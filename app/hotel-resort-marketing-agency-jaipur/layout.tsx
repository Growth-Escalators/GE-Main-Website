import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/hotel-resort-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Hotel & Resort Marketing Agency in Jaipur',
  description:
    'Jaipur marketing agency for hotels, resorts and boutique stays focused on direct demand, Google Maps visibility, social content and measurable booking enquiries.',
  keywords: [
    'hotel marketing agency jaipur',
    'resort marketing jaipur',
    'hotel digital marketing jaipur',
    'hospitality marketing agency jaipur',
    'direct booking marketing jaipur',
    'hotel social media marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Hotel & Resort Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Direct-demand marketing, Maps visibility and social acquisition for Jaipur hotels, resorts and boutique stays.',
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
      name: 'Growth Escalators — Hotel & Resort Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for hotels, resorts, boutique stays and banquet venues — direct-demand funnels, Google Maps local SEO, occupancy-gap campaigns and social content.',
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
      knowsAbout: ['Hotel Marketing', 'Hospitality Marketing', 'Direct Booking', 'Local SEO', 'Social Media Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Hotel & Resort Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function HotelJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
