import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/digital-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Jaipur',
  description:
    'Jaipur-based digital marketing agency — performance ads, SEO, funnels, social, and web under one team. ₹10Cr+ ad spend managed. Real results: Exzept ROAS 1.8x→5.2x, Yellow Diaries 0→12,400 followers. Free strategy call.',
  keywords: [
    'digital marketing agency jaipur',
    'digital marketing agency in jaipur',
    'online marketing agency jaipur',
    'internet marketing services jaipur',
    'digital marketing company jaipur',
    'digital marketing consultant jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Digital Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Performance ads, SEO, funnels, social, and web under one Jaipur-based team. ₹10Cr+ ad spend managed. Real results: Exzept ROAS 1.8x→5.2x, Yellow Diaries 0→12,400 followers.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (digital marketing)
   node linked back to the global #organization graph. Server-rendered so AI
   crawlers see it in raw HTML. NAP is the real registered office; geo is
   approximate — confirm against the verified Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Digital Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Digital marketing agency in Jaipur running performance ads, SEO, funnels, social media, and website development under one team.',
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
      knowsAbout: ['Digital Marketing', 'Performance Marketing', 'SEO', 'Social Media Marketing', 'Website Development'],
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
        { '@type': 'ListItem', position: 2, name: 'Digital Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function DigitalMarketingJaipurLayout({ children }: { children: React.ReactNode }) {
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
