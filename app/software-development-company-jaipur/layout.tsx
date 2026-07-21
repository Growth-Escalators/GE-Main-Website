import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/software-development-company-jaipur'

export const metadata: Metadata = {
  title: 'Software Development Company in Jaipur',
  description:
    'Jaipur-based software development company building production SaaS, web & mobile apps, and AI automation. 237+ projects, 50+ integrations shipped — with India compliance (GST/TDS/RERA) built in. Get a free scoping call.',
  keywords: [
    'software development company in jaipur',
    'software development company jaipur',
    'custom software development jaipur',
    'app development company jaipur',
    'saas development company jaipur',
    'software company in jaipur',
    'mobile app development jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Software Development Company in Jaipur — Growth Escalators',
    description:
      'Production SaaS, web & mobile apps, and AI automation from a Jaipur team. 237+ projects, 50+ integrations, India compliance built in.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (software development)
   node linked back to the global #organization graph (app/layout.tsx). Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the
   real registered office; geo lat/long is approximate (from the site's map embed) —
   confirm against the verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Software Development Company in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Software development company in Jaipur building production SaaS, web & mobile apps, and AI automation with India compliance built in.',
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
      knowsAbout: ['Custom Software Development', 'SaaS Development', 'Web & Mobile Apps', 'AI Automation'],
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
        { '@type': 'ListItem', position: 2, name: 'Software Development Company in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SoftwareJaipurLayout({ children }: { children: React.ReactNode }) {
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
