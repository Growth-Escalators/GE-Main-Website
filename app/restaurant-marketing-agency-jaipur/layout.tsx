import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/restaurant-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for restaurants, cafés & cloud kitchens. We drive weeknight footfall, direct orders, and Google Maps rankings — not just likes. Took Yellow Diaries to 0→12,400 followers, 3× walk-ins, #1 local café. Free footfall audit.',
  keywords: [
    'restaurant marketing agency jaipur',
    'restaurant marketing jaipur',
    'cafe marketing agency jaipur',
    'restaurant social media agency jaipur',
    'restaurant advertising jaipur',
    'cloud kitchen marketing jaipur',
    'food marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Restaurant Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Weeknight footfall, direct orders, and Google Maps rankings for Jaipur restaurants & cafés. Real result: Yellow Diaries — 0→12,400 followers, 3× walk-ins, #1 local café.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (restaurant
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
      name: 'Growth Escalators — Restaurant Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for restaurants, cafés and cloud kitchens — footfall campaigns, Instagram content, Google Maps local SEO, and direct-order funnels.',
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
      knowsAbout: ['Restaurant Marketing', 'Café Marketing', 'Local SEO', 'Social Media Marketing', 'Food Advertising'],
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
        { '@type': 'ListItem', position: 2, name: 'Restaurant Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function RestaurantJaipurLayout({ children }: { children: React.ReactNode }) {
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
