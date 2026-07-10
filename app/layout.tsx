import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
// Load the portfolio-scoped stylesheet site-wide so any page can opt into
// the portfolio look by wrapping its content in `<div class="portfolio-root">`.
// Selectors inside portfolio.css are all prefixed with .portfolio-root, so
// loading it globally doesn't bleed styling into pages that don't use the wrapper.
import './portfolio/portfolio.css'
import dynamic from 'next/dynamic'

const GrowthBot = dynamic(() => import('@/components/ui/GrowthBot'), { ssr: false })
const CursorGlow = dynamic(() => import('@/components/portfolio/CursorGlow'), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/portfolio/ScrollProgress'), { ssr: false })

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
    "AI-first performance marketing agency. 10,000+ campaigns run, ₹10Cr+ in ad spend managed, 97% client retention. Specialists for doctors, roofing contractors, restaurants, and growing brands.",
  keywords: [
    'performance marketing agency',
    'AI marketing agency',
    'D2C performance marketing agency',
    'ecommerce Meta ads agency',
    'marketing for doctors',
    'roofing contractor marketing',
    'restaurant marketing',
    'Meta ads agency',
    'Google ads agency',
    'India marketing agency',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Growth Escalators',
    title: 'Growth Escalators — AI-First Performance Marketing Agency',
    description: 'AI-first performance marketing for doctors, roofing contractors, restaurants, and growing brands.',
    url: 'https://www.growthescalators.com',
    images: [
      {
        // Was a dead 2023 WordPress URL on the non-www host. Points at a
        // same-host path now — but no real 1200x630 asset exists yet at
        // public/og-image.jpg. MUST be added before this is fully fixed
        // (see SEO audit notes) — a broken OG image degrades every social/AI share.
        url: `${'https://www.growthescalators.com'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Growth Escalators — AI-first performance marketing agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Escalators — AI-First Performance Marketing Agency',
    description: 'AI-first performance marketing for doctors, roofing contractors, restaurants, and growing brands.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

/* JSON-LD entity graph — emitted on every page so search engines and AI
   crawlers see one consistent, connected business identity (GE SEO Standard
   v1, Layer 5: "connected @id graph, not isolated blocks").

   TODO before this is fully complete (real values needed, not fabricated):
   - JATIN_PERSON.sameAs: add Jatin's real personal LinkedIn profile URL.
   - ORGANIZATION.hasMap / geo: add the verified Google Business Profile
     maps URL + lat/long once GBP is claimed/confirmed (see SEO audit). */
const SITE_ID = `${'https://www.growthescalators.com'}`

const ORGANIZATION_SCHEMA = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_ID}/#organization`,
  name: 'Growth Escalators',
  url: SITE_ID,
  logo: `${SITE_ID}/og-image.jpg`,
  description: 'AI-first performance marketing agency. Specialists for doctors, roofing contractors, restaurants, and growing brands.',
  email: 'Info@growthescalators.com',
  telephone: '+91-77338-88883',
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
}

const JATIN_PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': `${SITE_ID}/#jatin-agrawal`,
  name: 'Jatin Agrawal',
  jobTitle: 'Founder',
  worksFor: { '@id': `${SITE_ID}/#organization` },
  // sameAs: [ 'ADD REAL LINKEDIN PROFILE URL HERE' ],
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
]

const SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [ORGANIZATION_SCHEMA, JATIN_PERSON_SCHEMA, ...SERVICE_SCHEMAS],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_GRAPH) }}
        />
      </head>
      <body className={jakarta.variable}>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <GrowthBot />
      </body>
    </html>
  )
}
