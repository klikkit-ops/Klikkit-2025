import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default async function ServicesPage() {
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .eq('active', true)
    .order('tier_order')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Three service tiers designed to grow with your business. 
              From startup launchpads to enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  index === 1 ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-6">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.subtitle}</p>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    £{service.price_setup}
                  </div>
                  <div className="text-gray-600">
                    setup + £{service.price_monthly}/month
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-colors block ${
                      index === 1
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full text-center py-3 px-6 rounded-lg font-medium border border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors block"
                  >
                    Get Started
                    <ArrowRight className="ml-2 inline-block" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to choose your service tier?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a free strategy call and we'll help you find the perfect fit for your business.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg">
              Book your free strategy call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
