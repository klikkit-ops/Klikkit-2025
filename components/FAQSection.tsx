'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer comprehensive digital solutions including website design and development (PWAs), iOS and Android native app development, cross-platform mobile apps, AI integration, e-commerce solutions, SEO optimization, hosting, and ongoing maintenance. Our services range from startup launchpads to enterprise-level custom solutions.',
  },
  {
    id: 2,
    question: 'How long does it take to build a website?',
    answer: 'Timeline varies by project complexity. A standard 5-page PWA typically takes 2-4 weeks, while custom solutions can take 8-12 weeks. We prioritize quality and ensure thorough testing before launch. We\'ll provide a detailed timeline during your free strategy call.',
  },
  {
    id: 3,
    question: 'Do you offer iOS app development?',
    answer: 'Yes! We specialize in native iOS app development using SwiftUI, as well as cross-platform solutions using React Native and Flutter. We handle everything from design to App Store submission and optimization. Our Mobile App Development service includes beta testing and post-launch support.',
  },
  {
    id: 4,
    question: 'What is included in your pricing?',
    answer: 'Our pricing includes design, development, initial content setup, SEO configuration, hosting setup, and basic training. Monthly packages include hosting, security updates, backups, and support. Additional features like advanced AI personalization, e-commerce, or custom integrations may have additional costs discussed upfront.',
  },
  {
    id: 5,
    question: 'Do you provide ongoing support?',
    answer: 'Yes! All our packages include ongoing support. Basic plans include email support and monthly updates, while premium plans include priority support, monthly optimization, and dedicated account management. We also offer custom maintenance packages for enterprise clients.',
  },
  {
    id: 6,
    question: 'Can you help with existing websites?',
    answer: 'Absolutely! We offer website repair, redesign, and optimization services. We can modernize outdated sites, improve performance, add new features, or migrate to modern platforms. We\'ll assess your current site and provide a detailed improvement plan.',
  },
  {
    id: 7,
    question: 'What makes you different from other agencies?',
    answer: 'We combine modern technology (Next.js, React, AI) with proven marketing psychology to create websites that don\'t just look good—they convert. We\'re South-East London based, focusing on local businesses with global-grade solutions. Plus, we offer transparent pricing, no hidden fees, and a results-driven approach.',
  },
  {
    id: 8,
    question: 'Do you offer AI-powered features?',
    answer: 'Yes! We integrate AI chatbots, AI-assisted content generation, personalization engines, and analytics dashboards. Our AI solutions help automate customer service, personalize user experiences, and provide valuable business insights. All our packages include basic AI features, with advanced options available.',
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="glass-morphism border-0 rounded-lg transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFAQ === faq.id}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="text-primary-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-5 animate-slide-down">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


