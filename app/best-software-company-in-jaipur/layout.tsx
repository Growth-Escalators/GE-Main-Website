import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/best-software-company-in-jaipur'

export const metadata: Metadata = {
  title: 'Best Software Company in Jaipur',
  description:
    'Growth Escalators stays accountable for uptime and performance long after launch — not just delivery. Rated 4.9★ by 187+ clients, 97% retention. See real builds and get a free scoping call.',
  keywords: [
    'best software company in jaipur',
    'best software development company in jaipur',
    'top software company jaipur',
    'best software company jaipur',
    'best it company jaipur',
    'best app development company jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Best Software Company in Jaipur — Growth Escalators',
    description:
      'The Jaipur software company that stays accountable after launch, not just at delivery. 4.9★ from 187+ clients, 97% retention.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService node linked back to
   the global #organization graph (app/layout.tsx). Server-rendered so AI
   crawlers (which don't run JS) see it in raw HTML. NAP is the real
   registered office; geo lat/long is approximate (from the site's map embed)
   — confirm against the verified Google Business Profile and update if it
   differs. 4.9★/187 reviews is the real, published rating from app/contact. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Best Software Company in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Software company in Jaipur that stays accountable for uptime, performance, and iteration long after launch — the same team that also runs your marketing.',
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
      knowsAbout: ['Custom Software Development', 'Web App Development', 'Conversion-Optimised Landing Pages', 'E-commerce Development'],
      openingHours: 'Mo-Sa 10:00-19:00',
      parentOrganization: { '@id': `${SITE}/#organization` },
      sameAs: [
        'https://www.facebook.com/growthescalators',
        'https://www.instagram.com/growthescalators',
        'https://www.linkedin.com/company/growth-escalators',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5',
      },
    },
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Software Development Services',
      serviceType: 'Custom Software Development',
      provider: { '@id': `${SITE}${PATH}#business` },
      areaServed: { '@type': 'City', name: 'Jaipur' },
      description:
        'Custom web app development, e-commerce builds, API integrations, internal tools and dashboards, plus hosting, QA and maintenance — with ongoing post-launch accountability.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Best Software Company in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function BestSoftwareCompanyJaipurLayout({ children }: { children: React.ReactNode }) {
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
