import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                <FileText className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Our terms and conditions
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 md:p-12">
            <div className="prose prose-lg prose-primary max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated: October 30, 2025</strong>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Provided</h2>
              <p className="text-gray-700 mb-6">
                Klikkit provides digital consultancy services including web design, iOS app development, and related digital solutions. All services are provided subject to the terms outlined in individual service agreements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content on this website, including text, graphics, logos, and software, is the property of Klikkit or its content suppliers and is protected by applicable copyright and trademark laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-700 mb-6">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Timely feedback and approvals</li>
                <li>Payment of agreed fees</li>
                <li>Compliance with relevant laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-6">
                Payment terms are specified in individual service agreements. Typically:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Setup fees are due upon agreement signing</li>
                <li>Monthly fees are due in advance</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Level Agreement</h2>
              <p className="text-gray-700 mb-6">
                We strive to provide high-quality services and will make reasonable efforts to meet project timelines. However, we cannot guarantee completion dates and are not liable for delays beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, Klikkit shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-6">
                Either party may terminate service agreements with appropriate notice as specified in the agreement. Upon termination, all outstanding fees become immediately due.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Confidentiality</h2>
              <p className="text-gray-700 mb-6">
                We agree to maintain the confidentiality of all client information and project details, except where disclosure is required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 mb-6">
                Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of English courts.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-semibold mb-2">Klikkit</p>
                <p className="text-gray-700">Email: hello@klikkit.co.uk</p>
                <p className="text-gray-700">Website: klkkit.co.uk</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms are governed by and construed in accordance with the laws of England and Wales.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                  Have questions? Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

