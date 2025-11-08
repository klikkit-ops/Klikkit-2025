'use client'

import { CheckCircle, MessageSquare, Lightbulb, Rocket } from 'lucide-react'

interface ProcessStep {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Get in Touch',
    description: 'Contact us with details about your idea or book a free 30-minute strategy call',
    icon: <MessageSquare className="text-primary-600" size={32} />,
  },
  {
    number: 2,
    title: 'We Review',
    description: "We'll review your requirements and understand your business goals",
    icon: <Lightbulb className="text-primary-600" size={32} />,
  },
  {
    number: 3,
    title: 'Solutions Provided',
    description: "We'll provide you with a tailored list of solutions and a detailed proposal",
    icon: <CheckCircle className="text-primary-600" size={32} />,
  },
  {
    number: 4,
    title: 'Launch & Grow',
    description: 'We build, launch, and optimize your digital presence for maximum growth',
    icon: <Rocket className="text-primary-600" size={32} />,
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How we work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process designed to get you online quickly and effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative glass-morphism rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-600 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}

              {/* Step Number */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6 mx-auto text-white text-2xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

