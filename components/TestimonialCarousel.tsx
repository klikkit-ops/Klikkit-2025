'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Owner',
    company: 'Local Restaurant',
    content: 'Jake transformed our online presence. Our bookings increased by 300% in just 3 months. The AI chatbot handles customer inquiries 24/7, freeing up our time to focus on what we do best.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike R.',
    role: 'Founder',
    company: 'E-commerce Store',
    content: 'The AI chatbot handles 80% of our customer inquiries automatically. Game changer! The e-commerce platform is lightning fast and our conversion rate has never been higher.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma L.',
    role: 'Managing Director',
    company: 'Consulting Firm',
    content: 'Professional, reliable, and always ahead of the curve. Highly recommend Klikkit. Our new website has positioned us as industry leaders and brought in quality leads.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David K.',
    role: 'CEO',
    company: 'Fitness App',
    content: 'Working with Klikkit on our iOS app was seamless. They delivered a beautiful, native app that our users love. The app store optimization alone increased our downloads by 200%.',
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real businesses in South-East London
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <div className="glass-morphism rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 text-primary-200" size={60} />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary-600" size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


