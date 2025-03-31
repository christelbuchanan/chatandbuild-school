import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating?: number
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
      )}
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
