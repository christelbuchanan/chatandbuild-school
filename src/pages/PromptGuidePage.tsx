import React, { useState } from 'react'
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react'
import PromptExample from '../components/PromptExample'

const PromptGuidePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSection, setExpandedSection] = useState<string | null>('basics')

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const promptExamples = [
    {
      id: 1,
      title: 'React Component Creation',
      prompt: 'Create a React functional component for a product card that displays an image, title, price, and add to cart button. Use TypeScript for prop types and style it with Tailwind CSS.',
      description: 'Generate a complete React component with TypeScript and Tailwind CSS styling.',
      category: 'development'
    },
    {
      id: 2,
      title: 'API Integration',
      prompt: 'Write a JavaScript function that fetches data from an API endpoint, handles errors, and processes the response. Include proper error handling and loading states.',
      description: 'Create a reusable function for API data fetching with error handling.',
      category: 'development'
    },
    {
      id: 3,
      title: 'CSS Animation',
      prompt: 'Create a CSS animation for a button that scales up slightly and changes color when hovered, with a smooth transition back to its original state.',
      description: 'Generate CSS for a subtle and professional button hover animation.',
      category: 'design'
    },
    {
      id: 4,
      title: 'Database Schema Design',
      prompt: 'Design a MongoDB schema for a blog application with users, posts, comments, and categories. Include proper relationships, indexes, and validation.',
      description: 'Create a complete database schema with relationships and validation.',
      category: 'development'
    },
    {
      id: 5,
      title: 'Bug Debugging',
      prompt: 'I have a React component that\'s causing an infinite re-render loop. Here\'s my code: [paste code]. Help me identify the cause and fix the issue.',
      description: 'Get help debugging a common React issue with detailed explanation.',
      category: 'debugging'
    },
    {
      id: 6,
      title: 'Project Planning',
      prompt: 'I\'m building a task management application with React, Node.js, and MongoDB. Help me plan the project structure, key features, and implementation steps.',
      description: 'Get a comprehensive project plan with architecture and implementation steps.',
      category: 'planning'
    }
  ]

  const filteredPrompts = promptExamples.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'debugging', label: 'Debugging' },
    { value: 'planning', label: 'Planning' },
    { value: 'content', label: 'Content' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Prompt Engineering Guide
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Learn how to craft effective prompts for AI-assisted development
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search prompts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative inline-block w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guide Content */}
        <div className="mt-12 bg-white shadow rounded-lg overflow-hidden">
          {/* Basics Section */}
          <div className="border-b border-gray-200">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection('basics')}
            >
              <h2 className="text-xl font-semibold text-gray-900">Prompt Engineering Basics</h2>
              {expandedSection === 'basics' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === 'basics' && (
              <div className="px-6 py-4">
                <p className="text-gray-700 mb-4">
                  Prompt engineering is the process of designing and refining inputs to AI models to get the desired outputs. Here are some fundamental principles:
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Be Specific and Clear</h3>
                <p className="text-gray-700 mb-4">
                  The more specific your prompt, the better the results. Include details about format, style, and requirements.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Use Examples</h3>
                <p className="text-gray-700 mb-4">
                  Providing examples of the desired output can help the AI understand what you're looking for.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Break Down Complex Tasks</h3>
                <p className="text-gray-700 mb-4">
                  For complex tasks, break them down into smaller, more manageable prompts.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Iterate and Refine</h3>
                <p className="text-gray-700 mb-4">
                  Don't expect perfect results on the first try. Refine your prompts based on the outputs you receive.
                </p>
              </div>
            )}
          </div>
          
          {/* Advanced Techniques Section */}
          <div className="border-b border-gray-200">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection('advanced')}
            >
              <h2 className="text-xl font-semibold text-gray-900">Advanced Techniques</h2>
              {expandedSection === 'advanced' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === 'advanced' && (
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Role Prompting</h3>
                <p className="text-gray-700 mb-4">
                  Assign a specific role to the AI, such as "Act as an experienced React developer" to get more specialized responses.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Chain of Thought</h3>
                <p className="text-gray-700 mb-4">
                  Ask the AI to explain its reasoning step by step, which can lead to more accurate and thoughtful responses.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Few-Shot Learning</h3>
                <p className="text-gray-700 mb-4">
                  Provide multiple examples of input-output pairs to help the AI understand the pattern you want it to follow.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Constraint Specification</h3>
                <p className="text-gray-700 mb-4">
                  Clearly define constraints and limitations for the AI to work within, such as "Use only ES6 features" or "Optimize for mobile devices."
                </p>
              </div>
            )}
          </div>
          
          {/* Development-Specific Section */}
          <div className="border-b border-gray-200">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection('development')}
            >
              <h2 className="text-xl font-semibold text-gray-900">Development-Specific Prompts</h2>
              {expandedSection === 'development' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === 'development' && (
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 mt-2 mb-3">Code Generation</h3>
                <p className="text-gray-700 mb-4">
                  When asking for code, specify the programming language, framework, coding style, and any specific requirements or constraints.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Debugging</h3>
                <p className="text-gray-700 mb-4">
                  When asking for help with debugging, provide the complete error message, relevant code snippets, and what you've already tried.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Architecture Design</h3>
                <p className="text-gray-700 mb-4">
                  For architecture questions, describe the problem domain, scale requirements, and any existing systems that need to be integrated.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Code Refactoring</h3>
                <p className="text-gray-700 mb-4">
                  When asking for refactoring help, explain what aspects you want to improve (readability, performance, maintainability) and provide the original code.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Prompt Examples */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Prompts</h2>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {filteredPrompts.map((example) => (
              <PromptExample
                key={example.id}
                title={example.title}
                prompt={example.prompt}
                description={example.description}
                category={example.category}
              />
            ))}
          </div>
          
          {filteredPrompts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No prompts found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PromptGuidePage
