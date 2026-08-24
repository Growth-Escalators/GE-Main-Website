import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/real-estate-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Real Estate Marketing Agency in Jaipur',
  description:
    'Jaipur real estate marketing agency for builders and developers — Meta and Google Ads, project landing pages, lead qualification, CRM follow-up and site-visit measurement. Verified project proof: 3× more qualified site visits in 60 days.',
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
      'Performance marketing and lead-generation systems for Jaipur builders and developers. Verified project proof: 3× more qualified site visits in 60 days.',
    url: PATH,
    type: 'website',
  },
}

/* Jaipur real-estate ProfessionalService linked to the global organization.
   Keep NAP identical to app/layout.tsx + the visible footer. Add geo only
   after the current Google Business Profile pin is verified. */
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
        'Real estate marketing agency in Jaipur for builders and developers — paid acquisition, project landing pages, lead qualification, CRM follow-up and site-visit measurement.',
      telephone: '+91-7733888883',
      email: 'jatin@growthescalators.com',
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
