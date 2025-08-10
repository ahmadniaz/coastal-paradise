import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coastal Paradise - Luxury Vacation Rental in Jupiter, Florida',
  description: 'Experience the perfect blend of modern luxury and tropical tranquility at Coastal Paradise. This stunning 3-bedroom, 2-bathroom vacation home features contemporary design elements that seamlessly integrate with the natural beauty of Jupiter, Florida.',
  keywords: 'vacation rental, Jupiter Florida, beach house, luxury rental, coastal paradise, tropical home',
  authors: [{ name: 'Coastal Paradise' }],
  creator: 'Coastal Paradise',
  publisher: 'Coastal Paradise',
  robots: 'index, follow',
  openGraph: {
    title: 'Coastal Paradise - Luxury Vacation Rental',
    description: 'Modern tropical design with lush gardens and outdoor spaces, just 10 minutes to the beach.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Coastal Paradise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coastal Paradise - Luxury Vacation Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coastal Paradise - Luxury Vacation Rental',
    description: 'Modern tropical design with lush gardens and outdoor spaces, just 10 minutes to the beach.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00BCD4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${dancingScript.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
