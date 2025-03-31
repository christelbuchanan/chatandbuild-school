import React from 'react'
import { ExternalLink, Download, BookOpen, Video, FileText, Link as LinkIcon } from 'lucide-react'

const ResourcesPage = () => {
  const resources = [
    {
      title: 'Prompt Engineering Guide',
      description: 'A comprehensive guide to crafting effective prompts for various AI models.',
      type: 'ebook',
      link: '#',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'AI Development Cheat Sheet',
      description: 'Quick reference for common AI prompting patterns and techniques.',
      type: 'pdf',
      link: '#',
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: 'Mastering Code Generation',
      description: 'Video tutorial series on generating high-quality code with AI assistance.',
      type: 'video',
      link: '#',
      icon: <Video className="h-6 w-6" />
    },
    {
      title: 'AI Tools for Developers',
      description: 'Curated list of AI tools and services to enhance your development workflow.',
      type: 'article',
      link: '#',
      icon: <LinkIcon className="h-6 w-6" />
    }
  ]

  const externalResources = [
    {
      title: 'OpenAI Documentation',
      description: 'Official documentation for OpenAI models and APIs.',
      link: 'https://platform.openai.com/docs/',
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      title: 'GitHub Copilot Documentation',
      description: 'Learn how to use GitHub Copilot effectively in your development workflow.',
      link: 'https://docs.github.com/en/copilot',
      icon: <ExternalLink className="h-5 w-5" />
    },
    {
      title: 'Hugging Face Documentation',
      description: 'Resources for using Hugging Face models and libraries.',
      link: 'https://huggingface.co/docs',
      icon: <ExternalLink className="h-5 w-5" />
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Helpful resources to enhance your AI-assisted development skills
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mt-2">{resource.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{resource.type}</span>
                </div>
                <a
                  href={resource.link}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* External Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">External Resources</h2>
          <p className="mt-2 text-gray-600">Useful links to official documentation and learning materials</p>
          
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {externalResources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 text-blue-600">
                            {resource.icon}
                          </div>
                          <p className="ml-3 text-sm font-medium text-blue-600">{resource.title}</p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            External Link
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="text-sm text-gray-500">{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Downloadable Templates */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Prompt Templates</h2>
          <p className="mt-2 text-gray-600">Ready-to-use prompt templates for common development tasks</p>
          
          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">React Component Template</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Template for generating React functional components with TypeScript and styling.</p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">API Integration Template</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Template for generating API integration code with error handling.</p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Database Schema Template</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Template for generating database schemas with relationships and validation.</p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-white">Subscribe to our newsletter</h3>
            <div className="mt-2 max-w-xl text-sm text-blue-200">
              <p>Get the latest resources, tutorials, and tips delivered to your inbox.</p>
            </div>
            <form className="mt-5 sm:flex sm:items-center">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage
