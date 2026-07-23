import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/software-company-in-jaipur'

export const metadata: Metadata = {
  title: 'Software Company in Jaipur',
  description:
    'Growth Escalators is a software company in Jaipur with an in-house Sanganer dev team — websites, web apps, CRMs, and WhatsApp automation. 50+ integrations shipped, rated 4.9★ by 187+ clients. Get a free scoping call.',
  keywords: [
    'software company in jaipur',
    'software company jaipur',
    'software development company jaipur',
    'custom software company jaipur',
    'it software company jaipur',
    'web development company jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Software Company in Jaipur — Growth Escalators',
    description:
      'An in-house Sanganer dev team building websites, web apps, CRMs, and automation for Jaipur businesses. 50+ integrations shipped, no offshore handoffs.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (software company)
   node linked back to the global #organization graph (app/layout.tsx). Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the
   real registered office; geo lat/long is approximate (from the site's map
   embed) — confirm against the verified Google Business Profile and update if
   it differs. 4.9★/187 reviews is the real, published rating from app/contact. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Software Company in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Software company in Jaipur with an in-house Sanganer dev team building websites, web apps, CRMs, and WhatsApp automation for local businesses.',
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
      knowsAbout: ['Custom Software Development', 'Web App Development', 'CRM & Dashboards', 'WhatsApp & API Automation'],
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
        'Custom web app development, e-commerce builds, API integrations, internal tools and dashboards, plus hosting, QA and maintenance.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Software Company in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SoftwareCompanyJaipurLayout({ children }: { children: React.ReactNode }) {
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
