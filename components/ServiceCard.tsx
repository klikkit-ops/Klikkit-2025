'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Service } from '@/lib/supabase'

interface ServiceCardProps {
  service: Service
  index: number
  isPopular?: boolean
}

export default function ServiceCard({ service, index, isPopular = false }: ServiceCardProps) {
  return (
    <div
      className={`relative glass-morphism rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isPopular ? 'ring-2 ring-primary-500 scale-105' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#F0B915] to-[#FFD452] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.subtitle}</p>
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          £{service.price_setup}
        </div>
        <div className="text-gray-600">
          {service.price_monthly > 0 ? (
            <>setup + £{service.price_monthly}/month</>
          ) : (
            <>one-time setup</>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex items-start">
            <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
            <Link
          href={`/services/${service.slug}`}
          className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 block ${
            isPopular
              ? 'bg-gradient-to-r from-[#F0B915] to-[#FFD452] text-white hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className={`w-full text-center py-3 px-6 rounded-lg font-medium border transition-all duration-200 block ${
            isPopular
              ? 'border-primary-500 text-primary-600 hover:bg-primary-50'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Get Started
          <ArrowRight className="ml-2 inline-block" size={16} />
        </Link>
      </div>
    </div>
  )
}

