import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Code2, BookOpen, Lightbulb, Users, Home } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5 mr-1" /> },
    { name: 'Prompt Guide', path: '/prompt-guide', icon: <Lightbulb className="w-5 h-5 mr-1" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen className="w-5 h-5 mr-1" /> },
    { name: 'Resources', path: '/resources', icon: <Code2 className="w-5 h-5 mr-1" /> },
    { name: 'Community', path: '/community', icon: <Users className="w-5 h-5 mr-1" /> },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ChatAndBuild</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
