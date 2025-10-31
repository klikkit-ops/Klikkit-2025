'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Calendar, TrendingUp, Filter } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { PortfolioItem } from '@/lib/supabase'

type ProjectType = 'all' | 'web' | 'ios' | 'android' | 'cross-platform' | 'pwa'

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectType>('all')
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPortfolioItems() {
      try {
        const { data } = await supabase
          .from('portfolio_items')
          .select('*')
          .order('created_at', { ascending: false })
        setPortfolioItems(data || [])
      } catch (error) {
        console.error('Error fetching portfolio items:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPortfolioItems()
  }, [])

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return portfolioItems
    return portfolioItems.filter((item) => item.project_type === selectedFilter)
  }, [portfolioItems, selectedFilter])

  const projectTypes: { value: ProjectType; label: string; count: number }[] = [
    { value: 'all', label: 'All Projects', count: portfolioItems.length },
    { value: 'web', label: 'Web', count: portfolioItems.filter((i) => i.project_type === 'web').length },
    { value: 'ios', label: 'iOS', count: portfolioItems.filter((i) => i.project_type === 'ios').length },
    { value: 'android', label: 'Android', count: portfolioItems.filter((i) => i.project_type === 'android').length },
    { value: 'cross-platform', label: 'Cross-Platform', count: portfolioItems.filter((i) => i.project_type === 'cross-platform').length },
    { value: 'pwa', label: 'PWA', count: portfolioItems.filter((i) => i.project_type === 'pwa').length },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding-lg">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Real projects, real results. See how we've helped South-East London businesses grow online and on mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      {portfolioItems.length > 0 && (
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="container-max py-4">
            <div className="flex items-center gap-4 overflow-x-auto">
              <Filter className="text-gray-600 flex-shrink-0" size={20} />
              {projectTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedFilter(type.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedFilter === type.value
                      ? 'bg-gradient-to-r from-primary-300 to-primary-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="font-medium">{type.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedFilter === type.value
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {type.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-max">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading portfolio...</p>
            </div>
          ) : filteredItems && filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gradient-to-r from-primary-300 to-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                    {item.project_type && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                          {item.project_type === 'cross-platform' ? 'Cross-Platform' : item.project_type.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                    {/* Metrics */}
                    {item.metrics && Object.keys(item.metrics).length > 0 && (
                      <div className="mb-4 p-3 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="text-primary-600" size={16} />
                          <span className="text-sm font-semibold text-gray-900">Results</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="text-xs">
                              <span className="text-gray-600">{key.replace(/_/g, ' ')}:</span>{' '}
                              <span className="font-semibold text-primary-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 4).map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          +{item.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-2" size={16} />
                        {new Date(item.created_at).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'short',
                        })}
                      </div>

                      {item.project_url && (
                        <a
                          href={item.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 flex items-center font-medium transition-colors"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedFilter === 'all' ? 'No portfolio items yet' : `No ${selectedFilter} projects found`}
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedFilter === 'all'
                  ? 'Check back soon for our latest projects!'
                  : 'Try selecting a different filter or check back soon.'}
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and see how we can help your business grow online.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              Start your project
              <ExternalLink className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
