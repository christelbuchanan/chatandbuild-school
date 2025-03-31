import React, { useState, useRef } from 'react'
import { Copy, Check } from 'lucide-react'

interface PromptExampleProps {
  title: string
  prompt: string
  description: string
  category: string
}

const PromptExample: React.FC<PromptExampleProps> = ({ 
  title, 
  prompt, 
  description,
  category
}) => {
  const [copied, setCopied] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleCopy = () => {
    try {
      // Try using the Clipboard API first
      navigator.clipboard.writeText(prompt)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
        .catch(() => {
          // Fallback to the textarea method if Clipboard API fails
          fallbackCopyTextToClipboard()
        })
    } catch (err) {
      // If Clipboard API is not available at all, use fallback
      fallbackCopyTextToClipboard()
    }
  }

  const fallbackCopyTextToClipboard = () => {
    if (!textAreaRef.current) return
    
    // Select the text
    textAreaRef.current.value = prompt
    textAreaRef.current.select()
    
    try {
      // Execute copy command
      const successful = document.execCommand('copy')
      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error('Fallback: Could not copy text: ', err)
    }
    
    // Remove focus from the textarea
    textAreaRef.current.blur()
  }

  const categoryColors = {
    development: "bg-blue-100 text-blue-800",
    design: "bg-purple-100 text-purple-800",
    content: "bg-green-100 text-green-800",
    debugging: "bg-red-100 text-red-800",
    planning: "bg-orange-100 text-orange-800",
    other: "bg-gray-100 text-gray-800"
  }

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || categoryColors.other

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColor}`}>
            {category}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <div className="bg-gray-50 p-5 relative">
        <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-gray-100 p-3 rounded-md">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-8 right-8 p-2 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-500" />}
        </button>
        
        {/* Hidden textarea for fallback copy method */}
        <textarea
          ref={textAreaRef}
          aria-hidden="true"
          className="sr-only"
          tabIndex={-1}
          readOnly
        />
      </div>
    </div>
  )
}

export default PromptExample
