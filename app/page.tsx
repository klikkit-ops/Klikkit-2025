import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import ChatWidget from '@/components/ChatWidget'

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
      {/* Hero Section */}
      <section className="relative gradient-bg section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 floating-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Smarter websites,{' '}
                <span className="text-gradient">not just prettier ones</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Tech-forward digital consultancy for South-East London businesses. 
                AI-enhanced websites that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="btn-primary text-lg group">
                  Book your free strategy call
                  <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link href="/services" className="btn-secondary text-lg">
                  See our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Three service tiers,{' '}
              <span className="text-gradient">one goal: your growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From startup launchpads to enterprise solutions, we've got the perfect fit for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services?.map((service, index) => (
              <div
                key={service.id}
                className={`relative glass-effect rounded-3xl p-8 card-hover ${
                  index === 1 ? 'ring-2 ring-primary-500 scale-105 shadow-2xl' : 'shadow-xl'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    index === 0 ? 'bg-gradient-to-br from-primary-100 to-primary-200' :
                    index === 1 ? 'bg-gradient-to-br from-primary-200 to-primary-300' :
                    'bg-gradient-to-br from-primary-300 to-primary-400'
                  }`}>
                    {index === 0 && <Zap className="text-primary-600" size={32} />}
                    {index === 1 && <Shield className="text-primary-700" size={32} />}
                    {index === 2 && <Users className="text-primary-800" size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.subtitle}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    £{service.price_setup}
                  </div>
                  <div className="text-gray-600 text-lg">
                    setup + £{service.price_monthly}/month
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className={`w-full text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-md hover:shadow-lg'
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
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why choose <span className="text-gradient">Klikkit</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-primary-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Smart automation and personalization that adapts to your customers' needs.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-primary-700" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Partner</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  South-East London based with global-grade technology and support.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-300 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-primary-800" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Focused</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ongoing optimization through SEO, analytics, and conversion tracking.
                </p>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to see how AI can power your next site?
              </h3>
              <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                Book a free 30-minute strategy call and discover what's possible for your business.
              </p>
              <Link href="/contact" className="btn-primary text-xl group">
                Start your Digital Launchpad today
                <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-gradient">local businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses in South-East London
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Jake transformed our online presence. Our bookings increased by 300% in just 3 months."
              </p>
              <div className="font-bold text-gray-900 text-lg">Sarah M.</div>
              <div className="text-gray-600">Local Restaurant Owner</div>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "The AI chatbot handles 80% of our customer inquiries automatically. Game changer!"
              </p>
              <div className="font-bold text-gray-900 text-lg">Mike R.</div>
              <div className="text-gray-600">E-commerce Store</div>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Professional, reliable, and always ahead of the curve. Highly recommend Klikkit."
              </p>
              <div className="font-bold text-gray-900 text-lg">Emma L.</div>
              <div className="text-gray-600">Consulting Firm</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to grow your business{' '}
              <span className="text-white/90">online?</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the South-East London businesses already growing with Klikkit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-5 px-10 rounded-xl transition-all duration-300 text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
                Book your free strategy call
                <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-5 px-10 rounded-xl transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
