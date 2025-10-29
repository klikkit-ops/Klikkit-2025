import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klikkit - Smarter Websites That Grow With Your Business',
  description: 'Tech-forward digital consultancy for South-East London businesses. AI-enhanced websites, SEO, and growth strategies.',
  keywords: 'web design, digital marketing, SEO, AI, South London, business growth',
  authors: [{ name: 'Jake @ Klikkit' }],
  openGraph: {
    title: 'Klikkit - Smarter Websites That Grow With Your Business',
    description: 'Tech-forward digital consultancy for South-East London businesses.',
    url: 'https://klikkit.co.uk',
    siteName: 'Klikkit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klikkit - Smarter Websites That Grow With Your Business',
    description: 'Tech-forward digital consultancy for South-East London businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
