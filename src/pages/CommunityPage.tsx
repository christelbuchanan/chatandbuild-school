import React from 'react'
import { MessageSquare, Users, Calendar, Award, ArrowRight } from 'lucide-react'

const CommunityPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Prompt Engineering Workshop',
      date: 'June 15, 2023',
      time: '2:00 PM - 4:00 PM EST',
      description: 'Learn advanced prompt engineering techniques from industry experts.',
      link: '#'
    },
    {
      id: 2,
      title: 'AI for Frontend Development',
      date: 'June 22, 2023',
      time: '1:00 PM - 3:00 PM EST',
      description: 'Discover how to leverage AI to accelerate your frontend development workflow.',
      link: '#'
    },
    {
      id: 3,
      title: 'Community Q&A Session',
      date: 'June 29, 2023',
      time: '3:00 PM - 4:00 PM EST',
      description: 'Open forum to ask questions and share experiences with the community.',
      link: '#'
    }
  ]

  const communityMembers = [
    {
      name: 'Alex Johnson',
      role: 'AI Prompt Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      contributions: 156
    },
    {
      name: 'Sarah Miller',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      contributions: 132
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      contributions: 98
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      contributions: 87
    }
  ]

  const discussionTopics = [
    {
      id: 1,
      title: 'Best practices for React component generation',
      replies: 24,
      views: 342,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      title: 'How to optimize prompts for code refactoring',
      replies: 18,
      views: 256,
      lastActivity: '5 hours ago'
    },
    {
      id: 3,
      title: 'Debugging strategies with AI assistance',
      replies: 32,
      views: 421,
      lastActivity: '1 day ago'
    },
    {
      id: 4,
      title: 'Comparing different AI models for development tasks',
      replies: 15,
      views: 189,
      lastActivity: '2 days ago'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Community
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Connect with other developers, share knowledge, and grow together
          </p>
        </div>

        {/* Community Stats */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Members
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        5,240
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Discussions
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        342
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Monthly Events
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        12
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Shared Resources
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        1,240
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="mt-12 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:p-6 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-white">
                Ready to join our community?
              </h3>
              <div className="mt-2 max-w-xl text-sm text-blue-200">
                <p>
                  Connect with like-minded developers, share your knowledge, and learn from others.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:ml-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50"
              >
                Join Now
                <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Upcoming Events
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Join our virtual events to learn and connect with the community
                </p>
              </div>
              <ul className="divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <li key={event.id}>
                    <a href={event.link} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-blue-600 truncate">
                            {event.title}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Upcoming
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                              {event.date} • {event.time}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{event.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View all events <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Top Contributors */}
          <div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Top Contributors
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Community members who are actively sharing knowledge
                </p>
              </div>
              <ul className="divide-y divide-gray-200">
                {communityMembers.map((member, index) => (
                  <li key={index}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-12 w-12 rounded-full" src={member.avatar} alt={member.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.role}</div>
                        </div>
                        <div className="ml-auto flex-shrink-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {member.contributions} contributions
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View all members <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Discussion Forums */}
        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Discussions
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Join the conversation and share your knowledge
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {discussionTopics.map((topic) => (
                <li key={topic.id}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {topic.title}
                        </p>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <MessageSquare className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {topic.replies} replies
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {topic.views} views
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            Last activity {topic.lastActivity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View all discussions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
