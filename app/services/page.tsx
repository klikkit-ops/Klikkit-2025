import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import ServiceCard from '@/components/ServiceCard'

export default async function ServicesPage() {
  let services = []
  try {
    const { data } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('tier_order')
    services = data || []
  } catch (error) {
    console.error('Error fetching services:', error)
    // Fallback to empty array if Supabase is not configured
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding-lg">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-yellow-300" size={16} />
              <span className="text-sm font-medium">Complete Digital Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              From startup websites to enterprise iOS apps—we've got the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service tiers designed to grow with your business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup launchpads to enterprise solutions, including native iOS and Android app development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services?.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isPopular={index === 1}
              />
            ))}
          </div>

          {/* Mobile App Development Highlight */}
          {services?.some((s) => s.slug === 'mobile-app-development') && (
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="text-primary-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">Mobile App Development</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Need a native iOS or Android app? Our Mobile App Development service includes native SwiftUI apps, 
                  React Native cross-platform solutions, App Store optimization, and ongoing support.
                </p>
                <Link
                  href="/services/mobile-app-development"
                  className="btn-gradient inline-flex items-center"
                >
                  Learn More About Mobile Apps
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we can build
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Progressive Web Apps',
                description: 'Fast, app-like experiences that work offline',
                icon: '⚡',
              },
              {
                title: 'Native iOS Apps',
                description: 'Built with SwiftUI for the best Apple experience',
                icon: '📱',
              },
              {
                title: 'Native Android Apps',
                description: 'Kotlin-based apps optimized for Android',
                icon: '🤖',
              },
              {
                title: 'Cross-Platform Apps',
                description: 'React Native & Flutter for code efficiency',
                icon: '🔄',
              },
              {
                title: 'E-commerce Platforms',
                description: 'Full-featured online stores with payment integration',
                icon: '🛒',
              },
              {
                title: 'AI Integration',
                description: 'Chatbots, personalization, and automation',
                icon: '🤖',
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to choose your service tier?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free 30-minute strategy call and we'll help you find the perfect fit for your business.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              Book your free strategy call
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
