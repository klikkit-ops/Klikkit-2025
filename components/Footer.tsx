'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">Klikkit</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tech-forward digital consultancy for South-East London businesses. 
              Smarter websites, iOS apps, and digital solutions that grow with your business.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  {subscribed ? (
                    <CheckCircle size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
              )}
            </div>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/klikkit"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/klikkit"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/digital-launchpad" className="text-gray-300 hover:text-white transition-colors">
                  Digital Launchpad
                </Link>
              </li>
              <li>
                <Link href="/services/business-growth-engine" className="text-gray-300 hover:text-white transition-colors">
                  Business Growth Engine
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-gray-300 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-pro-solution" className="text-gray-300 hover:text-white transition-colors">
                  Custom Pro Solution
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_GBP_URL || '#'}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Reviews
                </a>
              </li>
            </ul>

            {/* Technology Stack */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">SwiftUI</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2012 - 2025 Klikkit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
