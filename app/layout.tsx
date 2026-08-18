import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import './refinement.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GrowthBot from '@/components/ui/GrowthBot'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growthescalators.com'),
  title: {
    default: 'Growth Escalators — AI-First Performance Marketing Agency',
    template: '%s — Growth Escalators',
  },
  description:
    'Jaipur-based growth partner for performance marketing, ecommerce, websites, software, AI automation and India-based technology staffing. ₹10Cr+ ad spend managed with 97% client retention.',
  keywords: [
    'performance marketing agency',
    'performance marketing agency Jaipur',
    'D2C growth agency',
    'ecommerce advertising agency',
    'Meta ads agency',
    'Google ads agency',
    'website development company Jaipur',
    'software development company Jaipur',
    'AI automation agency',
    'India technology staffing',
    'offshore tech staffing',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Growth Escalators',
    title: 'Growth Escalators — AI-First Performance Marketing Agency',
    description: 'Performance marketing, ecommerce, web, software, AI automation and technology staffing connected around measurable growth.',
    url: 'https://www.growthescalators.com',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Growth Escalators — Growth, Engineered' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Escalators — AI-First Performance Marketing Agency',
    description: 'Performance marketing, ecommerce, web, software, AI automation and technology staffing connected around measurable growth.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const SITE_ID = 'https://www.growthescalators.com'

const ORGANIZATION_SCHEMA = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_ID}/#organization`,
  name: 'Growth Escalators',
  url: SITE_ID,
  logo: `${SITE_ID}/logo.webp`,
  description: 'Jaipur-based growth partner for performance marketing, ecommerce, websites, software, AI automation and India-based technology staffing.',
  email: 'jatin@growthescalators.com',
  telephone: '+91-7733888883',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302033',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/growthescalators',
    'https://www.instagram.com/growthescalators',
    'https://www.linkedin.com/company/growth-escalators',
  ],
  founder: { '@id': `${SITE_ID}/#jatin-agrawal` },
  subOrganization: {
    '@type': 'Organization',
    '@id': 'https://www.wizmatchenterprises.com/#organization',
    name: 'WizMatch',
    url: 'https://www.wizmatchenterprises.com',
  },
}

const JATIN_PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': `${SITE_ID}/#jatin-agrawal`,
  name: 'Jatin Agrawal',
  jobTitle: 'Founder',
  worksFor: { '@id': `${SITE_ID}/#organization` },
  sameAs: ['https://www.wizmatchenterprises.com/#jatin-agrawal'],
}

const SERVICE_SCHEMAS = [
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-performance-marketing`,
    name: 'Performance Marketing & Media Buying',
    serviceType: 'Performance Marketing',
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-software-development`,
    name: 'Software Development',
    serviceType: 'Software Development',
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-ai-automation`,
    name: 'AI Automation',
    serviceType: 'AI Automation',
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-offshore-tech-staffing`,
    name: 'Offshore Technology Staffing',
    serviceType: 'IT Staffing',
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: ['GB', 'AE', 'US', 'AU'],
  },
]

const SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [ORGANIZATION_SCHEMA, JATIN_PERSON_SCHEMA, ...SERVICE_SCHEMAS],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_GRAPH) }} />
      </head>
      <body className={jakarta.variable}>
        <GoogleAnalytics />
        {children}
        <GrowthBot />
      </body>
    </html>
  )
}
