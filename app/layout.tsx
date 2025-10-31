import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klikkit - Website Design & iOS App Development | South-East London',
  description: 'Tech-forward digital consultancy for South-East London businesses. AI-enhanced websites, native iOS apps, PWAs, and growth strategies. Serving Croydon, Bromley, and surrounding areas.',
  keywords: 'web design, iOS app development, mobile app development, website design London, South London web design, Progressive Web Apps, React Native, SwiftUI, AI websites, digital marketing, SEO, Croydon web design',
  authors: [{ name: 'Jake @ Klikkit' }],
  icons: {
    icon: 'https://klikkit.co.uk/wp-content/uploads/2021/05/cropped-favicon-192x192.png',
    apple: 'https://klikkit.co.uk/wp-content/uploads/2021/05/cropped-favicon-192x192.png',
  },
  openGraph: {
    title: 'Klikkit - Website Design & iOS App Development | South-East London',
    description: 'Tech-forward digital consultancy for South-East London businesses. AI-enhanced websites, native iOS apps, and growth strategies.',
    url: 'https://klikkit.co.uk',
    siteName: 'Klikkit',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://klikkit.co.uk/wp-content/uploads/2018/09/logo-white-pressed-370x118.png',
        width: 370,
        height: 118,
        alt: 'Klikkit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klikkit - Website Design & iOS App Development',
    description: 'Tech-forward digital consultancy for South-East London businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://klikkit.co.uk',
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
