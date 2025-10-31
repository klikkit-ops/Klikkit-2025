import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap, Shield, Users, Sparkles, Clock, CheckCircle2, TrendingUp } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import ChatWidget from '@/components/ChatWidget'
import ServiceCard from '@/components/ServiceCard'
import StatsSection from '@/components/StatsSection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ProcessSection from '@/components/ProcessSection'
import FAQSection from '@/components/FAQSection'

export default async function HomePage() {
  // Fetch services for the homepage
  let services = []
  try {
    const { data } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('tier_order')
      .limit(3)
    services = data || []
  } catch (error) {
    console.error('Error fetching services:', error)
    // Fallback to empty array if Supabase is not configured
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Conversion Focused */}
      <section className="relative overflow-hidden section-padding-lg">
        {/* Background Image with Glass Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Modern office workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Trust Badge with Glass Effect */}
            <div className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="text-yellow-300" size={16} />
              <span className="text-sm font-medium text-gray-900">Trusted by 50+ businesses across South-East London</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-slide-up">
              Websites, iOS Apps & Digital Solutions That{' '}
              <span className="text-yellow-300">Convert</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance animate-slide-up" style={{ animationDelay: '100ms' }}>
              Tech-forward digital consultancy for South-East London businesses. 
              AI-enhanced websites, native iOS apps, and growth strategies that drive real results.
            </p>

            {/* Social Proof Numbers */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm text-white/80">Websites Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">£2M+</div>
                <div className="text-sm text-white/80">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <Link href="/contact" className="btn-gradient text-lg px-8 py-4 inline-flex items-center justify-center">
                Book your free strategy call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/services" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center">
                See our services
              </Link>
            </div>

            {/* Urgency/Scarcity Element */}
            <div className="inline-flex items-center gap-2 text-sm text-white/90 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Clock className="text-yellow-300" size={16} />
              <span>Limited spots available for Q1 2026 projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Images */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        
        <StatsSection />
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service tiers designed for your growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup launchpads to enterprise solutions, including native iOS app development—we've got the perfect fit for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 px-6 py-4 rounded-lg border border-primary-200">
              <Sparkles className="text-primary-600" size={20} />
              <span className="text-gray-900 font-medium">
                Need an iOS or Android app?{' '}
                <Link href="/services/mobile-app-development" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Check out our Mobile App Development service →
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
            alt="Code and technology"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built with modern technology
            </h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge tools and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Next.js', 'React', 'SwiftUI', 'React Native', 'TypeScript', 'Supabase',
              'TailwindCSS', 'Node.js', 'Firebase', 'AI/ML', 'PostgreSQL', 'AWS'
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-morphism rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-2xl font-bold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why choose Klikkit?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center glass-morphism rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">
                  Smart automation and personalization that adapts to your customers' needs.
                </p>
              </div>
              
              <div className="text-center glass-morphism rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Partner</h3>
                <p className="text-gray-600">
                  South-East London based with global-grade technology and support.
                </p>
              </div>
              
              <div className="text-center glass-morphism rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
                <p className="text-gray-600">
                  Ongoing optimization through SEO, analytics, and conversion tracking.
                </p>
              </div>
            </div>

            {/* Risk Reversal CTA */}
            <div className="liquid-effect rounded-2xl p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle2 className="text-green-500" size={24} />
                <span className="font-semibold text-gray-900">Free 30-minute strategy call</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to see how we can power your next project?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation and discover what's possible for your business. No obligation, just insights.
              </p>
              <Link href="/contact" className="btn-gradient text-lg px-8 py-4 inline-flex items-center">
                Book your free strategy call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Business comparison"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How we compare
            </h2>
            <p className="text-xl text-gray-600">
              See what sets us apart from other agencies
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Other Agencies</th>
                    <th className="px-6 py-4 text-center font-semibold bg-primary-700">Klikkit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'AI Integration', other: 'Limited', klikkit: '✓ Built-in' },
                    { feature: 'iOS App Development', other: 'Separate Quote', klikkit: '✓ Available' },
                    { feature: 'Monthly Support', other: 'Extra Cost', klikkit: '✓ Included' },
                    { feature: 'SEO Optimization', other: 'Basic', klikkit: '✓ Advanced' },
                    { feature: 'Local Support', other: 'Remote Only', klikkit: '✓ South-East London' },
                    { feature: 'Transparent Pricing', other: 'Hidden Fees', klikkit: '✓ All Clear' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.other}</td>
                      <td className="px-6 py-4 text-center text-primary-600 font-semibold bg-primary-50">{row.klikkit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-hero text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Business growth"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-accent-900/95"></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the South-East London businesses already growing with Klikkit. 
              Book your free strategy call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                Book your free strategy call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 text-lg inline-flex items-center justify-center">
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
