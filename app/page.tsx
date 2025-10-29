import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import ChatWidget from '@/components/ChatWidget'

export default async function HomePage() {
  // Fetch services for the homepage
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .eq('active', true)
    .order('tier_order')
    .limit(3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smarter websites, not just prettier ones
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tech-forward digital consultancy for South-East London businesses. 
              AI-enhanced websites that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Book your free strategy call
                <ArrowRight className="ml-2 inline-block" size={20} />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three service tiers, one goal: your growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup launchpads to enterprise solutions, we've got the perfect fit for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  index === 1 ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                    setup + £{service.price_monthly}/month
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

                <Link
                  href={`/services/${service.slug}`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    index === 1
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why choose Klikkit?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">
                  Smart automation and personalization that adapts to your customers' needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Partner</h3>
                <p className="text-gray-600">
                  South-East London based with global-grade technology and support.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
                <p className="text-gray-600">
                  Ongoing optimization through SEO, analytics, and conversion tracking.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to see how AI can power your next site?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute strategy call and discover what's possible for your business.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start your Digital Launchpad today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by local businesses
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses in South-East London
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Jake transformed our online presence. Our bookings increased by 300% in just 3 months."
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-gray-600 text-sm">Local Restaurant Owner</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The AI chatbot handles 80% of our customer inquiries automatically. Game changer!"
              </p>
              <div className="font-semibold text-gray-900">Mike R.</div>
              <div className="text-gray-600 text-sm">E-commerce Store</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, reliable, and always ahead of the curve. Highly recommend Klikkit."
              </p>
              <div className="font-semibold text-gray-900">Emma L.</div>
              <div className="text-gray-600 text-sm">Consulting Firm</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join the South-East London businesses already growing with Klikkit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg">
                Book your free strategy call
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors text-lg">
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
