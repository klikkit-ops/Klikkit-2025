import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Calendar } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default async function PortfolioPage() {
  let portfolioItems = []
  try {
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false })
    portfolioItems = data || []
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    // Fallback to empty array if Supabase is not configured
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real projects, real results. See how we've helped South-East London businesses grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-max">
          {portfolioItems && portfolioItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {item.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-2" size={16} />
                        {new Date(item.created_at).toLocaleDateString()}
                      </div>
                      
                      {item.project_url && (
                        <a
                          href={item.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center"
                        >
                          View Project
                          <ExternalLink className="ml-1" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No portfolio items yet</h3>
              <p className="text-gray-600 mb-6">Check back soon for our latest projects!</p>
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project and see how we can help your business grow online.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
