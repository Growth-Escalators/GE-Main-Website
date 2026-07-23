import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/social-media-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Jaipur',
  description:
    "Jaipur-based social media marketing agency — content strategy, Reels, and community management that compound followers into customers. Real results: Yellow Diaries 0→12,400 IG followers, Dr. Mukesh Sharma 0→8,200 LinkedIn followers. Free content audit.",
  keywords: [
    'social media marketing agency jaipur',
    'social media marketing company jaipur',
    'instagram marketing agency jaipur',
    'social media management services jaipur',
    'content marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Social Media Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Content strategy, Reels, and community management for Jaipur brands. Real results: Yellow Diaries 0→12,400 Instagram followers, Dr. Mukesh Sharma 0→8,200 LinkedIn followers.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (social media
   marketing) node linked back to the global #organization graph. Server-
   rendered so AI crawlers see it in raw HTML. NAP is the real registered
   office; geo is approximate — confirm against the verified Google
   Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Social Media Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Social media marketing agency in Jaipur — content strategy, Reels production, community management, and analytics that turn followers into customers.',
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
      knowsAbout: ['Social Media Marketing', 'Instagram Marketing', 'Content Strategy', 'Community Management', 'LinkedIn Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Social Media Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SocialMediaMarketingJaipurLayout({ children }: { children: React.ReactNode }) {
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
