import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/wedding-event-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Wedding & Event Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for wedding planners, venues, photographers & event vendors. We turn viral-ready content and rapid-response funnels into signed bookings across peak and off-season. ₹10Cr+ ad spend managed, one client reel hit 5M views. Free booking audit.',
  keywords: [
    'wedding planner marketing jaipur',
    'wedding marketing agency jaipur',
    'event management marketing jaipur',
    'wedding photography marketing jaipur',
    'marketing for wedding vendors jaipur',
    'destination wedding marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Wedding & Event Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Viral-ready content and rapid-response booking funnels for Jaipur wedding & event brands. Real result: a client reel hit 5M views and 20M+ reach. ₹10Cr+ ad spend managed across 187+ brands.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (wedding & event
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
      name: 'Growth Escalators — Wedding & Event Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for wedding planners, venues, photographers, decor studios and event vendors — viral-ready content, rapid-response enquiry funnels, and seasonality-proof campaigns.',
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
      knowsAbout: ['Wedding Marketing', 'Event Marketing', 'Social Media Marketing', 'Lead Generation', 'Performance Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Wedding & Event Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function WeddingJaipurLayout({ children }: { children: React.ReactNode }) {
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
