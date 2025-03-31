import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Tag, Wrench, BookOpen, Star, Calendar, ChevronUp, ChevronDown } from 'lucide-react'
import { tutorialData } from '../data/tutorialData'

const TutorialDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [tutorial, setTutorial] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call
    const foundTutorial = tutorialData.find(t => t.id === id)
    
    if (foundTutorial) {
      setTutorial(foundTutorial)
      // Set the first section as active by default
      if (foundTutorial.content && foundTutorial.content.sections.length > 0) {
        setActiveSection(foundTutorial.content.sections[0].id)
      }
    }
    
    setLoading(false)
    
    // Scroll to top when tutorial changes
    window.scrollTo(0, 0)
  }, [id])

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
  }

  // Generate stars for rating
  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />)
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300 fill-current" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
        </div>
      )
    }
    
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }
    
    return stars
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    )
  }

  if (!tutorial) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Tutorial Not Found</h2>
          <p className="mt-4 text-gray-600">The tutorial you're looking for doesn't exist or has been removed.</p>
          <Link to="/tutorials" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Back to Tutorials
          </Link>
        </div>
      </div>
    )
  }

  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/tutorials" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tutorials
        </Link>
        
        {/* Tutorial header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <img 
              src={tutorial.image} 
              alt={tutorial.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                  {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                </span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{tutorial.duration}</span>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">{tutorial.title}</h1>
              <div className="mt-2 flex items-center">
                <div className="flex mr-2">
                  {renderRating(tutorial.rating)}
                </div>
                <span className="text-sm">{tutorial.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <User className="h-5 w-5 mr-2" />
                <span>{tutorial.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Published: {tutorial.publishDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>{tutorial.learningOutcomes.length} learning outcomes</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg">{tutorial.description}</p>
            
            {/* Topics and Tools */}
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              {tutorial.topics.length > 0 && (
                <div className="flex-1">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Tag className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Topics Covered</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.topics.map((topic: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {tutorial.tools.length > 0 && (
                <div className="flex-1">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Wrench className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Tools Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tools.map((tool: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Prerequisites and Learning Outcomes */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {tutorial.prerequisites.length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Prerequisites</h3>
                  <ul className="space-y-2">
                    {tutorial.prerequisites.map((prereq: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">•</span>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {tutorial.learningOutcomes.length > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {tutorial.learningOutcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">✓</span>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Tutorial content */}
        {tutorial.content && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tutorial Content</h2>
              
              {/* Table of Contents */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-1">
                  {tutorial.content.sections.map((section: any, index: number) => (
                    <li key={index} className="text-blue-600 hover:text-blue-800">
                      <button 
                        onClick={() => setActiveSection(section.id)}
                        className="hover:underline text-left"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* Content Sections */}
              <div className="space-y-8">
                {tutorial.content.sections.map((section: any, index: number) => (
                  <div key={index} id={section.id} className="scroll-mt-24">
                    <div 
                      className="flex justify-between items-center cursor-pointer py-3 border-b border-gray-200"
                      onClick={() => toggleSection(section.id)}
                    >
                      <h3 className="text-xl font-semibold text-gray-900">
                        {index + 1}. {section.title}
                      </h3>
                      <button className="text-gray-500 hover:text-gray-700">
                        {activeSection === section.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    
                    {activeSection === section.id && (
                      <div className="py-4 prose prose-blue max-w-none">
                        {section.content.map((content: any, contentIndex: number) => {
                          if (content.type === 'paragraph') {
                            return <p key={contentIndex} className="mb-4 text-gray-700">{content.text}</p>
                          } else if (content.type === 'heading') {
                            return <h4 key={contentIndex} className="text-lg font-semibold text-gray-800 mt-6 mb-3">{content.text}</h4>
                          } else if (content.type === 'list') {
                            return (
                              <ul key={contentIndex} className="list-disc pl-6 mb-4 space-y-2">
                                {content.items.map((item: string, itemIndex: number) => (
                                  <li key={itemIndex} className="text-gray-700">{item}</li>
                                ))}
                              </ul>
                            )
                          } else if (content.type === 'code') {
                            return (
                              <div key={contentIndex} className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto">
                                <pre className="font-mono text-sm">{content.text}</pre>
                              </div>
                            )
                          } else if (content.type === 'example') {
                            return (
                              <div key={contentIndex} className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                                <p className="font-semibold text-blue-800 mb-2">{content.title}</p>
                                <p className="text-gray-700">{content.text}</p>
                              </div>
                            )
                          } else if (content.type === 'image') {
                            return (
                              <div key={contentIndex} className="my-6">
                                <img 
                                  src={content.url} 
                                  alt={content.alt || 'Tutorial image'} 
                                  className="rounded-lg shadow-md max-w-full"
                                />
                                {content.caption && (
                                  <p className="text-sm text-gray-500 mt-2 text-center">{content.caption}</p>
                                )}
                              </div>
                            )
                          } else if (content.type === 'tip') {
                            return (
                              <div key={contentIndex} className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                                <p className="font-semibold text-green-800 mb-2">Tip</p>
                                <p className="text-gray-700">{content.text}</p>
                              </div>
                            )
                          } else if (content.type === 'warning') {
                            return (
                              <div key={contentIndex} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                                <p className="font-semibold text-yellow-800 mb-2">Warning</p>
                                <p className="text-gray-700">{content.text}</p>
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Next steps and related tutorials */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
              <p className="text-gray-700 mb-4">
                Now that you've completed this tutorial, you might want to explore these related topics:
              </p>
              <ul className="space-y-3">
                {tutorial.nextSteps?.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">→</span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                )) || (
                  <>
                    <li className="flex items-start">
                      <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">→</span>
                      <span className="text-gray-700">Practice creating prompts for different scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">→</span>
                      <span className="text-gray-700">Explore advanced prompt engineering techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">→</span>
                      <span className="text-gray-700">Learn how to use AI for specific development tasks</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tutorials</h3>
              <div className="space-y-4">
                {tutorial.relatedTutorials?.map((related: any, index: number) => (
                  <Link 
                    key={index}
                    to={`/tutorials/${related.id}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-blue-600">{related.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{related.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{related.duration}</span>
                      <span className="mx-2">•</span>
                      <span className={`px-2 py-0.5 rounded-full ${levelColors[related.level as keyof typeof levelColors]}`}>
                        {related.level}
                      </span>
                    </div>
                  </Link>
                )) || (
                  <>
                    <Link 
                      to="/tutorials/react-components"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-blue-600">Generating React Components with AI</h4>
                      <p className="text-sm text-gray-600 mt-1">Learn how to create reusable React components using AI assistance.</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>25 min</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          intermediate
                        </span>
                      </div>
                    </Link>
                    <Link 
                      to="/tutorials/prompt-chaining"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-blue-600">Advanced Prompt Chaining Techniques</h4>
                      <p className="text-sm text-gray-600 mt-1">Discover how to chain multiple prompts together for complex tasks.</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>50 min</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                          advanced
                        </span>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialDetailPage
