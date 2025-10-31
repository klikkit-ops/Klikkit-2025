'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownCloseTimer, setDropdownCloseTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServicesEnter = () => {
    if (dropdownCloseTimer) {
      clearTimeout(dropdownCloseTimer)
      setDropdownCloseTimer(null)
    }
    setServicesMenuOpen(true)
  }

  const handleServicesLeave = () => {
    const timer = setTimeout(() => {
      setServicesMenuOpen(false)
    }, 200) // 200ms delay before closing
    setDropdownCloseTimer(timer)
  }

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <nav className="container-max max-w-6xl mx-auto px-4">
        <div 
          className="backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/30 flex justify-between items-center mt-4"
          style={{
            background: 'linear-gradient(to right, rgba(240, 185, 21, 0.35), rgba(240, 185, 21, 0.3))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/klikkit-logo.png"
              alt="Klikkit Logo"
              width={150}
              height={48}
              className="transition-all duration-200 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
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
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-6 animate-fade-in"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
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
                    <Link
                      href="/services/hosting"
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors group border-t border-gray-200 pt-4"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                        Web Hosting
                      </div>
                      <div className="text-sm text-gray-600">Reliable hosting plans</div>
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
          <div className="md:hidden mt-4 glass-morphism backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 animate-slide-down">
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
