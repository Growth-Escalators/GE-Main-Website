import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import LeadAttributionCapture from '@/components/analytics/LeadAttributionCapture'
import ContactIdentityGuard from '@/components/ui/ContactIdentityGuard'
import DeferredGrowthBot from '@/components/ui/DeferredGrowthBot'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growthescalators.com'),
  title: {
    default: 'Growth Escalators — Performance Marketing, Development, SEO & Tech Talent',
    template: '%s — Growth Escalators',
  },
  description:
    'Growth Escalators is a Jaipur-based growth company for D2C performance marketing, SEO and lead generation, website and software development, and pre-screened technology talent.',
  keywords: [
    'growth marketing agency',
    'D2C performance marketing agency',
    'performance marketing agency',
    'SEO agency Jaipur',
    'lead generation agency Jaipur',
    'website development agency Jaipur',
    'software development agency Jaipur',
    'app development agency Jaipur',
    'technology staffing India',
    'hire tech talent India',
    'Jaipur growth agency',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Growth Escalators',
    title: 'Growth Escalators — Performance Marketing, Development, SEO & Tech Talent',
    description:
      'D2C performance marketing, SEO and lead generation, website and software development, and technology talent connected around measurable growth.',
    url: 'https://www.growthescalators.com',
    images: [
      {
        url: 'https://www.growthescalators.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Growth Escalators — Performance Marketing, Development, SEO & Tech Talent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Escalators — Performance Marketing, Development, SEO & Tech Talent',
    description:
      'D2C performance marketing, SEO and lead generation, website and software development, and technology talent connected around measurable growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

/* JSON-LD entity graph — emitted on every page so search engines and AI
   crawlers see one consistent, connected business identity (GE SEO Standard
   v1, Layer 5: "connected @id graph, not isolated blocks"). */
const SITE_ID = `${'https://www.growthescalators.com'}`

const ORGANIZATION_SCHEMA = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_ID}/#organization`,
  name: 'Growth Escalators',
  url: SITE_ID,
  logo: `${SITE_ID}/logo.webp`,
  description:
    'Jaipur-based growth company for D2C performance marketing, SEO and lead generation, website and software development, and India-based technology talent.',
  email: 'jatin@growthescalators.com',
  telephone: '+91-7733888883',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302018',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/growthescalators',
    'https://www.instagram.com/growthescalators',
    'https://www.linkedin.com/company/growth-escalators',
  ],
  founder: { '@id': `${SITE_ID}/#jatin-agrawal` },
}

const JATIN_PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': `${SITE_ID}/#jatin-agrawal`,
  name: 'Jatin Agrawal',
  jobTitle: 'Founder',
  worksFor: { '@id': `${SITE_ID}/#organization` },
}

const SERVICE_SCHEMAS = [
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-d2c-performance-marketing`,
    name: 'Performance Marketing for D2C Brands',
    serviceType: 'D2C Performance Marketing',
    url: `${SITE_ID}/d2c`,
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-website-development`,
    name: 'Website Development',
    serviceType: 'Website Development',
    url: `${SITE_ID}/website-development-company-jaipur`,
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-software-app-development`,
    name: 'Software & App Development',
    serviceType: 'Software and App Development',
    url: `${SITE_ID}/software-development-company-jaipur`,
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: 'IN',
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-tech-talent`,
    name: 'Technology Talent & Staffing',
    serviceType: 'IT Staffing',
    url: `${SITE_ID}/staffing`,
    provider: { '@id': `${SITE_ID}/#organization` },
    areaServed: ['IN', 'GB', 'AE', 'US', 'AU'],
  },
  {
    '@type': 'Service',
    '@id': `${SITE_ID}/#service-seo-lead-generation`,
    name: 'SEO & Lead Generation',
    serviceType: 'SEO and Lead Generation',
    url: `${SITE_ID}/seo-lead-generation-agency-jaipur`,
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
        <GoogleAnalytics />
        <LeadAttributionCapture />
        <ContactIdentityGuard />
        {children}
        <DeferredGrowthBot />
      </body>
    </html>
  )
}
