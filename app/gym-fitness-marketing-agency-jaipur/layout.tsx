import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/gym-fitness-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Gym & Fitness Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for gyms, fitness studios & yoga centres. Local trial campaigns, trial-to-member funnels, and retention systems that grow members — and keep them. We sold out 40 memberships in 30 days for one studio. Free membership audit.',
  keywords: [
    'gym marketing agency jaipur',
    'fitness marketing agency jaipur',
    'gym marketing jaipur',
    'yoga studio marketing jaipur',
    'fitness studio marketing jaipur',
    'gym advertising jaipur',
    'gym social media marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Gym & Fitness Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Trial campaigns, trial-to-member funnels, and retention systems for Jaipur gyms & studios. Real result: 40 memberships sold out in 30 days.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (fitness marketing)
   node linked back to the global #organization graph. Server-rendered so AI
   crawlers see it in raw HTML. NAP is the real registered office; geo is
   approximate — confirm against the verified Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Gym & Fitness Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for gyms, fitness studios and yoga centres — local trial campaigns, trial-to-member conversion funnels, retention automation, and LTV tracking.',
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
      knowsAbout: ['Gym Marketing', 'Fitness Marketing', 'Local SEO', 'Membership Growth', 'Performance Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Gym & Fitness Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function GymJaipurLayout({ children }: { children: React.ReactNode }) {
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
