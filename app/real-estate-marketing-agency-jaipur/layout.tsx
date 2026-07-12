import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/real-estate-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency in Jaipur',
  description:
    "Jaipur's real estate marketing agency for builders & developers — ₹500Cr+ inventory marketed, AI buyer-quality scoring, +340% bookings on a Jaipur project. RERA-compliant. Book a free project audit.",
  keywords: [
    'real estate marketing agency in jaipur',
    'real estate marketing agency jaipur',
    'builder marketing agency jaipur',
    'real estate lead generation jaipur',
    'property marketing agency jaipur',
    'real estate digital marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Real Estate Marketing Agency in Jaipur — Growth Escalators',
    description:
      'AI-powered real estate marketing for Jaipur builders & developers. ₹500Cr+ inventory marketed, qualified site visits, RERA-compliant. Book a free project audit.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur real-estate ProfessionalService node linked to
   the global #organization graph (app/layout.tsx). Server-rendered so AI crawlers
   see it in raw HTML. Real NAP + 4.9★/187 rating (from app/contact). geo is
   approximate (site map embed) — confirm against the verified GBP. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Real Estate Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Real estate marketing agency in Jaipur for builders and developers — AI buyer-quality scoring, premium-project performance marketing, RERA-compliant.',
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
      serviceType: 'Real Estate Marketing',
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
        { '@type': 'ListItem', position: 2, name: 'Real Estate Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function JaipurRealEstateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
