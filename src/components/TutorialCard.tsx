import React, { useState } from 'react'
import { Clock, User, Tag, Wrench, BookOpen, Star, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

interface TutorialCardProps {
  id: string
  title: string
  description: string
  author: string
  duration: string
  image: string
  level: 'beginner' | 'intermediate' | 'advanced'
  topics?: string[]
  tools?: string[]
  publishDate?: string
  rating?: number
  prerequisites?: string[]
  learningOutcomes?: string[]
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  id,
  title,
  description,
  author,
  duration,
  image,
  level,
  topics = [],
  tools = [],
  publishDate = 'June 2023',
  rating = 4.5,
  prerequisites = [],
  learningOutcomes = []
}) => {
  const [expanded, setExpanded] = useState(false)
  
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  }

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  // Generate stars for rating
  const renderRating = () => {
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

  return (
    <div className={`bg-white rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 ${expanded ? 'shadow-lg' : 'shadow'} hover:shadow-lg`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-5 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">{title}</h3>
        
        <div className="mt-2 flex items-center">
          <div className="flex mr-2">
            {renderRating()}
          </div>
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
        
        <p className={`mt-3 text-gray-600 text-sm ${expanded ? '' : 'line-clamp-3'}`}>{description}</p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <User className="h-4 w-4 mr-1" />
          <span>{author}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Published: {publishDate}</span>
          <span className="mx-2">•</span>
          <BookOpen className="h-4 w-4 mr-1" />
          <span>{learningOutcomes.length} outcomes</span>
        </div>
        
        {topics.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Tag className="h-4 w-4 mr-1" />
              <span className="font-semibold">Topics:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {topics.map((topic, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {tools.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Wrench className="h-4 w-4 mr-1" />
              <span className="font-semibold">Tools:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {tools.map((tool, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {expanded && (
          <>
            {prerequisites.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">Prerequisites</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                  {prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {learningOutcomes.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">What You'll Learn</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        
        <button 
          onClick={toggleExpand}
          className="mt-4 flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {expanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <div className="px-5 pb-5">
        <Link 
          to={`/tutorials/${id}`}
          className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition-colors font-medium"
        >
          View Tutorial
        </Link>
      </div>
    </div>
  )
}

export default TutorialCard
