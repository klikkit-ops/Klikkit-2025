import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">Klikkit</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tech-forward digital consultancy for South-East London businesses. 
              Smarter websites that grow with your business.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/klikkit"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/klikkit"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
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
                <Link href="/services/custom-pro-solution" className="text-gray-300 hover:text-white transition-colors">
                  Custom Pro Solution
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
                  href={process.env.NEXT_PUBLIC_GBP_URL}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Klikkit. All rights reserved.
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
