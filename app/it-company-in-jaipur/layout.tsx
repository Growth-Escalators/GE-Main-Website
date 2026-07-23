import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/it-company-in-jaipur'

export const metadata: Metadata = {
  title: 'IT Company in Jaipur',
  description:
    'Growth Escalators is an IT company in Jaipur managing hosting, uptime, security, backups, and helpdesk support — so you don’t need a full-time in-house IT team. Rated 4.9★ by 187+ clients. Get a free systems audit.',
  keywords: [
    'it company in jaipur',
    'it company jaipur',
    'managed it services jaipur',
    'it support company jaipur',
    'it infrastructure services jaipur',
    'it services company jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'IT Company in Jaipur — Growth Escalators',
    description:
      'Managed hosting, uptime, security, backups, and helpdesk support for Jaipur businesses — no full-time IT hire needed.',
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
      name: 'Growth Escalators — IT Company in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'IT company in Jaipur managing hosting, uptime, security, backups, and helpdesk support for businesses that don’t want a full-time in-house IT team.',
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
      knowsAbout: ['Managed IT Support', 'Cloud Infrastructure Management', 'Network & Security Setup', 'Data Backup & Disaster Recovery'],
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
      name: 'Managed IT Services',
      serviceType: 'IT Support & Infrastructure Management',
      provider: { '@id': `${SITE}${PATH}#business` },
      areaServed: { '@type': 'City', name: 'Jaipur' },
      description:
        'Managed IT support, cloud infrastructure management, network & security setup, data backup & disaster recovery, and software/systems setup.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'IT Company in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function ItCompanyJaipurLayout({ children }: { children: React.ReactNode }) {
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
