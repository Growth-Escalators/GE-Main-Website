import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/performance-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Jaipur',
  description:
    "Jaipur's performance marketing agency — ₹10Cr+ ad spend managed and 10,000+ campaigns across Meta, Google, funnels and CRO. Book a free growth audit.",
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
      'Meta and Google acquisition, funnels and CRO from our Jaipur team. ₹10Cr+ ad spend managed and 10,000+ campaigns delivered.',
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
      name: 'Growth Escalators — Performance Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Performance marketing agency in Jaipur for Meta Ads, Google Ads, funnels, conversion optimisation and measurable growth.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
