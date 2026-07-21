import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/salon-spa-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Salon & Spa Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for salons, spas & beauty studios. We fill weekday appointment slots, cut no-shows, and build memberships — not just likes. Real beauty & wellness proof: Odra Organics 20M+ reach. Free booking audit.',
  keywords: [
    'salon marketing agency jaipur',
    'spa marketing agency jaipur',
    'salon social media marketing jaipur',
    'beauty salon marketing jaipur',
    'salon advertising jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Salon & Spa Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Weekday bookings, no-show reduction, and membership growth for Jaipur salons & spas. Real result: Odra Organics — 20M+ monthly reach, multiple million-view reels.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (salon & spa
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
      name: 'Growth Escalators — Salon & Spa Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for salons, spas and beauty & wellness studios — booking campaigns, Instagram content, Google Maps local SEO, and membership/retention funnels.',
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
      knowsAbout: ['Salon Marketing', 'Spa Marketing', 'Local SEO', 'Social Media Marketing', 'Appointment Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Salon & Spa Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SalonSpaJaipurLayout({ children }: { children: React.ReactNode }) {
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
