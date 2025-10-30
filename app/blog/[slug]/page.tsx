import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  let post = null
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
    post = data
  } catch (error) {
    console.error('Error fetching blog post:', error)
  }

  if (!post) {
    notFound()
  }

  // Calculate reading time (average 200 words per minute)
  const wordsPerMinute = 200
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <article className="bg-white">
        <div className="container-max section-padding">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to blog
          </Link>

          {post.featured_image && (
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <header className="max-w-3xl mx-auto">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="mr-2" size={16} />
              {post.published_at ? new Date(post.published_at).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Draft'}
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                {readingTime} min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>
        </div>
      </article>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center">
                Get in touch
                <ArrowLeft className="ml-2 rotate-180" size={20} />
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-colors text-lg inline-flex items-center justify-center"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              View all blog posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static params for blog posts
export async function generateStaticParams() {
  try {
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('published', true)

    return posts?.map((post) => ({
      slug: post.slug,
    })) || []
  } catch (error) {
    return []
  }
}

