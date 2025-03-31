import React, { useState } from 'react'
import { Search, Filter, BookOpen } from 'lucide-react'
import TutorialCard from '../components/TutorialCard'
import { Link } from 'react-router-dom'
import { tutorialData } from '../data/tutorialData'

const TutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  
  const tutorials = tutorialData

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel
    
    return matchesSearch && matchesLevel
  })

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">
            Tutorials & Guides
          </h1>
          <p className="section-subtitle">
            Step-by-step tutorials to help you master AI-assisted development
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
              placeholder="Search tutorials..."
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
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Tutorial */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Featured tutorial"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Featured</div>
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                  New
                </span>
              </div>
              <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 hover:text-blue-600">
                Building a Complete Web App with AI Assistance
              </a>
              <p className="mt-2 text-gray-600">
                Learn how to build a full-stack web application from scratch using AI to accelerate your development process. This comprehensive guide covers everything from planning to deployment, including database design, API implementation, frontend development, and testing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">MongoDB</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Express</span>
              </div>
              <div className="mt-4 flex items-center">
                <BookOpen className="h-5 w-5 text-gray-500" />
                <span className="ml-2 text-sm text-gray-500">60 min tutorial</span>
              </div>
              <button className="mt-6 btn-primary">
                Start Tutorial
              </button>
            </div>
          </div>
        </div>

        {/* Tutorial Cards */}
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard
              key={tutorial.id}
              id={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              author={tutorial.author}
              duration={tutorial.duration}
              image={tutorial.image}
              level={tutorial.level as 'beginner' | 'intermediate' | 'advanced'}
              topics={tutorial.topics}
              tools={tutorial.tools}
              publishDate={tutorial.publishDate}
              rating={tutorial.rating}
              prerequisites={tutorial.prerequisites}
              learningOutcomes={tutorial.learningOutcomes}
            />
          ))}
        </div>
        
        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tutorials found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TutorialsPage
