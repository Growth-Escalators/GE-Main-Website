import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/travel-agency-marketing-jaipur'

export const metadata: Metadata = {
  title: 'Travel Agency Marketing in Jaipur',
  description:
    'Jaipur marketing for travel companies, tour operators and DMCs focused on direct enquiries through Meta Ads, Google Ads, landing pages and WhatsApp follow-up.',
  keywords: [
    'travel agency marketing jaipur',
    'travel company marketing jaipur',
    'tour operator marketing jaipur',
    'travel lead generation jaipur',
    'digital marketing for travel agency',
    'travel agency advertising jaipur',
    'tourism marketing agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Travel Agency Marketing in Jaipur — Growth Escalators',
    description:
      'Direct travel enquiry acquisition for Jaipur travel companies through Meta, Google, landing pages and WhatsApp qualification.',
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
      name: 'Growth Escalators — Travel Agency Marketing in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for travel companies, tour operators and DMCs — Meta and Google acquisition, landing pages, WhatsApp qualification and direct-enquiry tracking.',
      telephone: '+91-7733888883',
      email: 'Info@growthescalators.com',
      priceRange: '₹₹',
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
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: ['Travel Marketing', 'Tour Operator Marketing', 'Lead Generation', 'Performance Marketing', 'Local SEO'],
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
        { '@type': 'ListItem', position: 2, name: 'Travel Agency Marketing in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function TravelJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
