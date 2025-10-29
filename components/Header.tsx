'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Klikkit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
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
                className="block px-3 py-2 btn-primary text-center"
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
