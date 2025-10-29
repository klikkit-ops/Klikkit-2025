import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default async function BlogPage() {
  let blogPosts = []
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
    blogPosts = data || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Fallback to empty array if Supabase is not configured
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights on AI in web design, SEO trends, and digital strategy for small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-max">
          {blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {post.featured_image && (
                    <div className="relative h-48">
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="mr-2" size={16} />
                      {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Draft'}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      Read more
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600 mb-6">Check back soon for our latest insights!</p>
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Stay updated with our latest insights
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest tips on AI, SEO, and digital strategy delivered to your inbox.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg">
              Subscribe to updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
