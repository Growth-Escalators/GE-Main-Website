import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/website-development-company-jaipur'

export const metadata: Metadata = {
  title: 'Website Development Company in Jaipur',
  description:
    'Jaipur website development company building fast, SEO-ready, conversion-optimised websites — coded from scratch. Average 67% faster load, 40% more time on site. Get a free website audit.',
  keywords: [
    'website development company in jaipur',
    'website development company jaipur',
    'web development company jaipur',
    'website design company in jaipur',
    'website designing company in jaipur',
    'best website development company in jaipur',
    'ecommerce website development jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Website Development Company in Jaipur — Growth Escalators',
    description:
      'Fast, SEO-ready, conversion-optimised websites for Jaipur businesses. Coded from scratch — 67% faster load, 40% more time on site.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (website development)
   node linked back to the global #organization graph (app/layout.tsx). Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the real
   registered office; geo lat/long is approximate (from the site's map embed) —
   confirm against the verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Website Development Company in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Website development company in Jaipur building fast, SEO-ready, conversion-optimised websites coded from scratch.',
      telephone: '+91-77338-88883',
      email: 'Info@growthescalators.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302033',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 26.81, longitude: 75.83 },
      areaServed: [
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: ['Website Development', 'Web Design', 'E-commerce Websites', 'Landing Pages', 'Technical SEO'],
      openingHours: 'Mo-Sa 10:00-19:00',
      parentOrganization: { '@id': `${SITE}/#organization` },
      sameAs: [
        'https://www.facebook.com/growthescalators',
        'https://www.instagram.com/growthescalators',
        'https://www.linkedin.com/company/growth-escalators',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Website Development Company in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function WebsiteJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      {children}
    </>
  )
}
