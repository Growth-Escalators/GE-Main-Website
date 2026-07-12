import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/doctors-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Marketing Agency for Doctors in Jaipur',
  description:
    'Jaipur marketing agency for doctors & clinics — Google Maps SEO, compliant ads, WhatsApp no-show fixes. Real clinic: +220% bookings in 4 months.',
  keywords: [
    'marketing agency for doctors in jaipur',
    'healthcare marketing agency jaipur',
    'clinic marketing jaipur',
    'doctor marketing agency jaipur',
    'hospital marketing agency jaipur',
    'medical marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Marketing Agency for Doctors in Jaipur — Growth Escalators',
    description:
      'Jaipur marketing agency for doctors & clinics. Google Maps SEO, healthcare-compliant ads, WhatsApp no-show fixes. Real clinic: +220% bookings in 4 months.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur healthcare ProfessionalService node linked to
   the global #organization graph (app/layout.tsx). Server-rendered so AI
   crawlers see it in raw HTML. Real NAP + 4.9★/187 rating (from app/contact).
   geo is approximate (site map embed) — confirm against the verified GBP. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Marketing Agency for Doctors in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency for doctors, clinics, and hospitals in Jaipur — Google Business Profile & local SEO, healthcare-compliant Google and Meta ads, WhatsApp appointment automation.',
      telephone: '+91-77338-88883',
      email: 'Info@growthescalators.com',
      priceRange: '₹₹₹',
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
        { '@type': 'State', name: 'Rajasthan' },
      ],
      serviceType: 'Healthcare Marketing',
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
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Marketing Agency for Doctors in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function DoctorsJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
