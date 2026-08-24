import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/real-estate-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency in Jaipur',
  description:
    'Jaipur real estate marketing for builders and developers — paid acquisition, project landing pages, lead qualification, site-visit growth, CRM follow-up and booking attribution.',
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
      'Performance marketing for Jaipur builders and developers focused on qualified enquiries, site visits, CRM follow-up and measurable project outcomes.',
    url: PATH,
    type: 'website',
  },
}

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
        'Real estate marketing agency in Jaipur for builders and developers — paid acquisition, project landing pages, lead qualification, site-visit growth, CRM follow-up and booking attribution.',
      telephone: '+91-7733888883',
      email: 'Info@growthescalators.com',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302018',
        addressCountry: 'IN',
      },
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
