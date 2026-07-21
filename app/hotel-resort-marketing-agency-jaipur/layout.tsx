import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/hotel-resort-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Hotel & Resort Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for hotels, resorts & boutique stays. We drive direct bookings, cut OTA commissions, and win Google Maps rankings. Hospitality-adjacent proof: Yellow Diaries — 0→12,400 followers, 3× walk-ins. Free occupancy audit.',
  keywords: [
    'hotel marketing agency jaipur',
    'resort marketing jaipur',
    'hotel digital marketing jaipur',
    'hospitality marketing agency jaipur',
    'direct booking marketing jaipur',
    'hotel social media marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Hotel & Resort Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Direct bookings, cut OTA commissions, and Google Maps rankings for Jaipur hotels & resorts. Hospitality-adjacent proof: Yellow Diaries (café) — 0→12,400 followers, 3× walk-ins.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (hotel & resort
   marketing) node linked back to the global #organization graph. Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the
   real registered office; geo lat/long is approximate — confirm against the
   verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Hotel & Resort Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for hotels, resorts, boutique stays and banquet venues — direct-booking funnels, Google Maps local SEO, occupancy-gap campaigns, and social content.',
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
      knowsAbout: ['Hotel Marketing', 'Hospitality Marketing', 'Direct Booking', 'Local SEO', 'Social Media Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Hotel & Resort Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function HotelJaipurLayout({ children }: { children: React.ReactNode }) {
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
