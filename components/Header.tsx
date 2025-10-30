'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Klikkit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                Services
                <ChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    servicesMenuOpen ? 'rotate-180' : ''
                  }`}
                  size={16}
                />
              </button>

              {/* Mega Menu */}
              {servicesMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-6 animate-fade-in">
                  <div className="grid grid-cols-1 gap-4">
                    <Link
                      href="/services"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                        All Services
                      </div>
                      <div className="text-sm text-gray-600">View all our service tiers</div>
                    </Link>
                    <Link
                      href="/services/digital-launchpad"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                        Digital Launchpad
                      </div>
                      <div className="text-sm text-gray-600">Perfect for startups</div>
                    </Link>
                    <Link
                      href="/services/business-growth-engine"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                        Business Growth Engine
                      </div>
                      <div className="text-sm text-gray-600">For established businesses</div>
                    </Link>
                    <Link
                      href="/services/mobile-app-development"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group border-t border-gray-200 pt-4"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 flex items-center">
                        <Sparkles className="mr-2 text-primary-600" size={16} />
                        Mobile App Development
                      </div>
                      <div className="text-sm text-gray-600">iOS & Android apps</div>
                    </Link>
                    <Link
                      href="/services/custom-pro-solution"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                        Custom Pro Solution
                      </div>
                      <div className="text-sm text-gray-600">Enterprise solutions</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Blog
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                Get Quote
              </Link>
              <Link href="/contact" className="btn-primary">
                Book Call
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/services/mobile-app-development"
                className="block px-6 py-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                → Mobile App Development
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 btn-primary text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
