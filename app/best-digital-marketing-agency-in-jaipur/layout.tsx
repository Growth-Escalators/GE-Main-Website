import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/best-digital-marketing-agency-in-jaipur'

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Jaipur',
  description:
    '100% India-built, AI-first digital marketing agency in Jaipur. 97% client retention, 10,000+ campaigns run, 4.9★ from 187 reviews. Real results: Credo World 0→15 B2B leads/month. Free strategy call.',
  keywords: [
    'best digital marketing agency in jaipur',
    'best digital marketing agency jaipur',
    'top digital marketing agency jaipur',
    'top marketing agency in jaipur',
    'best marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Best Digital Marketing Agency in Jaipur — Growth Escalators',
    description:
      'AI-first, 97% client retention, 10,000+ campaigns run, 4.9★ from 187 reviews. Real results: Credo World 0→15 B2B leads/month in 4 months.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (digital marketing,
   comparison/superlative intent) node linked back to the global #organization
   graph. Server-rendered so AI crawlers see it in raw HTML. NAP is the real
   registered office; geo is approximate — confirm against the verified
   Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Best Digital Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'AI-first digital marketing agency in Jaipur with a verifiable track record — 97% client retention, 10,000+ campaigns, senior-operator staffing on every account.',
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
      knowsAbout: ['Digital Marketing', 'Performance Marketing', 'SEO', 'Social Media Marketing', 'B2B Lead Generation'],
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
        { '@type': 'ListItem', position: 2, name: 'Best Digital Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function BestDigitalMarketingJaipurLayout({ children }: { children: React.ReactNode }) {
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
