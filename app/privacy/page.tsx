import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us
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

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                At Klikkit ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Personal information (name, email address, phone number, company name)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent on site, click patterns)</li>
                <li>Communication data (messages sent through our contact form)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Storage and Security</h2>
              <p className="text-gray-700 mb-6">
                We use industry-standard security measures to protect your personal data. Your information is stored securely on our servers and is only accessed by authorized personnel for legitimate business purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies to enhance your browsing experience and analyze website traffic. You can control cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services (such as analytics tools, payment processors, and email services) that collect and process your data on our behalf. These services have their own privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this privacy policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-semibold mb-2">Klikkit</p>
                <p className="text-gray-700">Email: hello@klikkit.co.uk</p>
                <p className="text-gray-700">Website: klkkit.co.uk</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
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


