import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/travel-agency-marketing-jaipur'

export const metadata: Metadata = {
  title: 'Travel Agency Marketing in Jaipur',
  description:
    'Jaipur-based marketing agency for travel companies, tour operators & DMCs. We generate qualified booking enquiries with intent-based ads and instant WhatsApp follow-up. Cut Flight Ticket Fare’s cost-per-lead ₹380→₹94, 4× conversion, 500+ leads/mo. Free audit.',
  keywords: [
    'travel agency marketing jaipur',
    'travel company marketing jaipur',
    'tour operator marketing jaipur',
    'travel lead generation jaipur',
    'digital marketing for travel agency',
    'travel agency advertising jaipur',
    'tourism marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Travel Agency Marketing in Jaipur — Growth Escalators',
    description:
      'Qualified booking enquiries for Jaipur travel companies via intent-based ads + instant WhatsApp follow-up. Real result: Flight Ticket Fare — ₹380→₹94 CPL, 4× conversion, 500+ leads/mo.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (travel marketing)
   node linked back to the global #organization graph. Server-rendered so AI
   crawlers see it in raw HTML. NAP is the real registered office; geo is
   approximate — confirm against the verified Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Travel Agency Marketing in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for travel companies, tour operators and DMCs — intent-based ads, instant WhatsApp lead response, enquiry funnels, and cost-per-booking tracking.',
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
      knowsAbout: ['Travel Marketing', 'Tour Operator Marketing', 'Lead Generation', 'Performance Marketing', 'Local SEO'],
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
        { '@type': 'ListItem', position: 2, name: 'Travel Agency Marketing in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function TravelJaipurLayout({ children }: { children: React.ReactNode }) {
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
