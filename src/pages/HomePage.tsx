import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import Testimonial from '../components/Testimonial'
import { Lightbulb, BookOpen, Code2, Users, Sparkles, Zap, Brain, Rocket } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      title: 'Prompt Engineering Guide',
      description: 'Learn how to craft effective prompts that get the results you want from AI models.',
      icon: <Lightbulb className="h-6 w-6" />,
      color: 'blue'
    },
    {
      title: 'Interactive Tutorials',
      description: 'Step-by-step tutorials to help you master AI-assisted development.',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'green'
    },
    {
      title: 'Code Examples',
      description: 'Real-world examples of how to integrate AI into your development workflow.',
      icon: <Code2 className="h-6 w-6" />,
      color: 'purple'
    },
    {
      title: 'Community Support',
      description: 'Join a community of developers learning to leverage AI in their projects.',
      icon: <Users className="h-6 w-6" />,
      color: 'orange'
    }
  ]

  const testimonials = [
    {
      quote: "ChatAndBuild completely transformed how I approach AI-assisted development. The prompt guides are incredibly helpful!",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      quote: "The tutorials are well-structured and easy to follow. I've been able to implement AI features in my apps much faster.",
      author: "Michael Chen",
      role: "Full Stack Developer",
      company: "StartupX",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      quote: "As someone new to AI, ChatAndBuild made the learning curve much less steep. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to master AI prompting
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our comprehensive platform helps you learn, practice, and perfect your AI prompting skills.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How ChatAndBuild Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Follow these simple steps to enhance your development workflow with AI.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-900">
                  Your journey to AI mastery
                </span>
              </div>
            </div>
            
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Learn</h3>
                <p className="mt-2 text-base text-gray-500">
                  Study our comprehensive prompt engineering guides and best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Practice</h3>
                <p className="mt-2 text-base text-gray-500">
                  Try our interactive examples and experiment with different prompt styles.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-100">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Apply</h3>
                <p className="mt-2 text-base text-gray-500">
                  Implement what you've learned in your own projects and workflows.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100">
                  <Rocket className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Master</h3>
                <p className="mt-2 text-base text-gray-500">
                  Become an expert at AI-assisted development and share your knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our users are saying
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Join thousands of developers who have improved their AI skills with ChatAndBuild.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center lg:max-w-3xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to supercharge your</span>
                  <span className="block">development with AI?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  Start your journey today and join our community of developers leveraging AI to build better applications faster.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Link
                    to="/prompt-guide"
                    className="inline-flex py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-blue-50"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/community"
                    className="inline-flex py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-900"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
