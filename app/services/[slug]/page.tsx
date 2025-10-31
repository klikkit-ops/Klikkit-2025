import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import { supabase } from '@/lib/supabase'

// Fallback service data for when Supabase is not configured
const fallbackServices: Record<string, any> = {
  'digital-launchpad': {
    title: 'Digital Launchpad',
    subtitle: 'Perfect for startups and solo traders',
    price_setup: 750,
    price_monthly: 150,
    description: 'Get your business online quickly with a professional, AI-powered Progressive Web App (PWA). Perfect for startups, freelancers, and small businesses looking to establish a modern digital presence without breaking the bank. Our Digital Launchpad includes everything you need to start attracting customers online, from AI-generated content to smart SEO optimization.',
    detailedDescription: 'The Digital Launchpad is designed for businesses that need a professional online presence fast. We use cutting-edge AI to generate engaging content and imagery tailored to your brand, saving you time and money. Your 5-page PWA website installs like a native app on phones, loads instantly, and works offline—giving your customers a premium experience that sets you apart from competitors.',
    features: [
      '5-page PWA website',
      'AI-assisted content & imagery',
      'Basic AI chatbot',
      'SEO setup + Google Business integration',
      'Hosting & security',
      'Progressive Web App (PWA) features'
    ]
  },
  'business-growth-engine': {
    title: 'Business Growth Engine',
    subtitle: 'Ideal for established small businesses',
    price_setup: 1250,
    price_monthly: 250,
    description: 'Level up your digital presence with advanced features that drive real growth. Perfect for established businesses ready to scale, sell online, and automate customer interactions. Includes everything in Digital Launchpad plus e-commerce, advanced AI personalization, booking systems, and priority support.',
    detailedDescription: 'The Business Growth Engine is built for businesses that have outgrown basic websites. With up to 10 pages plus a full e-commerce solution, you can showcase your products and services, accept bookings 24/7, and convert visitors into customers automatically. Our advanced AI personalization engine tailors content to each visitor based on their behavior, dramatically improving conversion rates. Priority support ensures you\'re never stuck when you need help most.',
    features: [
      'Up to 10 pages + e-commerce',
      'Advanced AI personalization',
      'Booking systems / advanced forms',
      'Priority support',
      'Everything in Digital Launchpad',
      'Advanced PWA with offline capabilities',
      'Voice interface integration'
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Native iOS & Android apps for your business',
    price_setup: 3500,
    price_monthly: 300,
    description: 'Take your business mobile with native iOS and Android apps that your customers can download from the App Store and Google Play. Perfect for businesses wanting to offer a premium mobile experience, increase customer engagement, and build brand loyalty through a dedicated app.',
    detailedDescription: 'Native mobile apps give your business a significant competitive advantage. Customers spend 90% of their mobile time in apps, and apps see 3x higher conversion rates than mobile websites. We build your app using the latest native technologies (SwiftUI for iOS, Kotlin for Android) for the best possible performance and user experience. Our comprehensive package includes App Store and Play Store submission, push notifications to re-engage customers, analytics to track success, beta testing to gather feedback, and 3 months of post-launch support to ensure everything runs smoothly.',
    features: [
      'Native iOS app (SwiftUI)',
      'Native Android app (Kotlin)',
      'Cross-platform option (React Native/Flutter)',
      'App Store & Play Store submission',
      'Push notifications setup',
      'Analytics integration',
      'Beta testing program',
      '3 months post-launch support'
    ]
  },
  'custom-pro-solution': {
    title: 'Custom Pro Solution',
    subtitle: 'Fully bespoke architecture for complex needs',
    price_setup: 8000,
    price_monthly: 0,
    description: 'For businesses with unique requirements that need a completely customized digital solution. Whether you need complex integrations, real-time dashboards, multi-platform apps, or cutting-edge features like AR/VR, our Custom Pro Solution delivers exactly what your business needs.',
    detailedDescription: 'When your business needs go beyond standard solutions, we build something extraordinary. Our Custom Pro Solution is fully bespoke—designed and developed specifically for your unique requirements. This might include complex workflows, integrations with legacy systems, real-time data analytics dashboards, multi-platform apps (web + iOS + Android), or innovative features like AR/VR experiences. We price based on value delivered rather than time spent, ensuring you get a solution that drives real results for your business. Includes dedicated ongoing support and maintenance.',
    features: [
      'Fully bespoke architecture',
      'Custom logic, dashboards, integrations',
      'Dedicated support + maintenance',
      'React, Node, React-Native/Flutter',
      'Value-based pricing',
      'Native iOS app development',
      'Native Android app development',
      'Cross-platform mobile apps',
      'App Store optimization',
      'Push notifications',
      'Apple Pay & Google Pay integration',
      'AR/VR capabilities',
      'Real-time analytics dashboards'
    ]
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Fetch the specific service
  let service = null
  try {
    const { data } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .single()
    service = data
  } catch (error) {
    console.error('Error fetching service:', error)
  }

  // Use fallback data if Supabase is not configured
  if (!service && fallbackServices[slug]) {
    service = fallbackServices[slug]
  }

  // If still no service found, show error
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Link href="/services" className="text-primary-600 hover:text-primary-700">
            Back to all services
          </Link>
        </div>
      </div>
    )
  }

  const isMobileAppService = slug === 'mobile-app-development'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden section-padding-lg ${
        isMobileAppService ? 'bg-gradient-hero text-white' : 'bg-white'
      }`}>
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Digital services"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {isMobileAppService && (
              <div className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full mb-6">
                <Sparkles className="text-primary-600" size={16} />
                <span className="text-sm font-medium text-gray-900">Featured Service</span>
              </div>
            )}
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isMobileAppService ? 'text-white' : 'text-gray-900'}`}>
              {service.title}
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isMobileAppService ? 'text-white/90' : 'text-gray-600'
            }`}>
              {service.description || service.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gradient text-lg px-8 py-4 inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className={`text-lg px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center border-2 ${
                  isMobileAppService 
                    ? 'border-white text-white hover:bg-white hover:text-primary-600' 
                    : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8 md:p-12 text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                £{service.price_setup}
              </div>
              {service.price_monthly > 0 ? (
                <>
                  <div className="text-xl text-gray-600 mb-2">
                    + £{service.price_monthly}/month
                  </div>
                  <p className="text-gray-500 text-sm mb-8">
                    One-time setup fee, then monthly support
                  </p>
                </>
              ) : (
                <p className="text-gray-500 text-sm mb-8">
                  One-time setup, custom pricing
                </p>
              )}
              <Link href="/contact" className="btn-gradient inline-flex items-center text-lg px-8 py-4">
                Request a quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      {service.detailedDescription && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="glass-morphism rounded-2xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About {service.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's included
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to get started and grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start glass-morphism rounded-xl p-6">
                  <CheckCircle className="text-primary-600 mr-4 mt-0.5 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why {service.title}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center glass-morphism rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Setup</h3>
                <p className="text-gray-600">
                  Get up and running quickly with our streamlined process
                </p>
              </div>

              <div className="text-center glass-morphism rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partner</h3>
                <p className="text-gray-600">
                  Ongoing support and maintenance included
                </p>
              </div>

              <div className="text-center glass-morphism rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
                <p className="text-gray-600">
                  Built to scale with your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
            </div>

            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-8 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We'll discuss your goals, target audience, and requirements to create a tailored plan.
                  </p>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-8 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Development</h3>
                  <p className="text-gray-600">
                    We build your solution using the latest technologies and best practices.
                  </p>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-8 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing & Launch</h3>
                  <p className="text-gray-600">
                    Thorough testing ensures everything works perfectly before going live.
                  </p>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-8 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Continuous improvements and updates to keep you ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Call to action"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free consultation to discuss how {service.title} can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center">
                Get started today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

