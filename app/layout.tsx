import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
// Load the portfolio-scoped stylesheet site-wide so any page can opt into
// the portfolio look by wrapping its content in `<div class="portfolio-root">`.
// Selectors inside portfolio.css are all prefixed with .portfolio-root, so
// loading it globally doesn't bleed styling into pages that don't use the wrapper.
import './portfolio/portfolio.css'
import dynamic from 'next/dynamic'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import ContactIdentityGuard from '@/components/ui/ContactIdentityGuard'

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
    default: 'Growth Escalators — Growth Marketing, Technology & Talent',
    template: '%s — Growth Escalators',
  },
  description:
    'Jaipur-based growth company connecting performance marketing, ecommerce, websites, SEO, creative, AI automation, software and India-based technology talent around measurable commercial outcomes.',
  keywords: [
    'growth marketing agency',
    'performance marketing agency',
    'ecommerce growth agency',
    'conversion rate optimization',
    'website development company',
    'SEO agency',
    'AI automation agency',
    'software development company',
    'India technology staffing',
    'Jaipur growth agency',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Growth Escalators',
    title: 'Growth Escalators — Growth Marketing, Technology & Talent',
    description:
      'Performance marketing, ecommerce, websites, search, creative, AI, software and technology talent connected around measurable growth.',
    url: 'https://www.growthescalators.com',
    images: [
      {
        url: 'https://www.growthescalators.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Growth Escalators — Growth Marketing, Technology & Talent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Escalators — Growth Marketing, Technology & Talent',
    description:
      'Performance marketing, ecommerce, websites, search, creative, AI, software and technology talent connected around measurable growth.',
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
  logo: `${SITE_ID}/logo.webp`,
  description:
    'Jaipur-based growth company connecting performance marketing, ecommerce, websites, SEO, creative, AI automation, software and India-based technology talent around measurable commercial outcomes.',
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
  /* Sister brand — WizMatch is Jatin's staffing/recruitment company (same
     founder, disclosed relationship). Declared as a subOrganization so search
     + AI engines treat the two brands as one connected entity family. Points
     at WizMatch's canonical @id on wizmatchenterprises.com. */
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
  /* Same individual also founded the sister brand WizMatch — link the two
     Person nodes across domains so the entity resolves as one person.
     TODO: add Jatin's real personal LinkedIn URL to this array once confirmed. */
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
    // One Service node for the whole offshore-tech-staffing offer, not one per
    // country landing page (see international-landing Stage A brief: "do not
    // create separate structured-data business identities for each country").
    // UK shipped first; areaServed is pre-generalized to the full 4-market set
    // (UK/UAE/US/Australia) so this node needs no edit when those pages ship.
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_GRAPH) }}
        />
      </head>
      <body className={jakarta.variable}>
        <GoogleAnalytics />
        <ContactIdentityGuard />
        <ScrollProgress />
        <CursorGlow />
        {children}
        <GrowthBot />
      </body>
    </html>
  )
}
