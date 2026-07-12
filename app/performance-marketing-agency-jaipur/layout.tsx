import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/performance-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Jaipur',
  description:
    "Jaipur's AI-first performance marketing agency — ₹10Cr+ ad spend managed, 10,000+ campaigns, rated 4.9★ by 187+ clients. Meta & Google Ads built to scale ROAS. Book a free call.",
  keywords: [
    'performance marketing agency in jaipur',
    'performance marketing agency jaipur',
    'best performance marketing agency in jaipur',
    'ppc agency jaipur',
    'meta ads agency jaipur',
    'google ads agency jaipur',
    'digital marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Performance Marketing Agency in Jaipur — Growth Escalators',
    description:
      'AI-first Meta & Google Ads in Jaipur. ₹10Cr+ managed, 10,000+ campaigns, 4.9★ from 187+ clients. ROAS that scales profitably.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService node that links back
   to the global #organization graph (app/layout.tsx). Server-rendered so AI
   crawlers (which don't run JS) see it in raw HTML. All values are real/published
   (NAP from app/contact; 4.9★/187 from the contact page).
   NOTE: geo lat/long is approximate (from the site's map embed) — confirm against
   the verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Performance Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'AI-first performance marketing agency in Jaipur. Meta & Google Ads, funnels, and CRO that scale ROAS profitably.',
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
        { '@type': 'ListItem', position: 2, name: 'Performance Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function JaipurLayout({ children }: { children: React.ReactNode }) {
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
