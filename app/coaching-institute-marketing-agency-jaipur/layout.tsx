import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/coaching-institute-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Coaching Institute Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for coaching institutes, test-prep centres & EdTech. Course-level ads, demo funnels, and instant follow-up that fill batches — not just forms. Cut one EdTech brand’s cost-per-lead ₹420→₹88 in 6 weeks. Free admissions audit.',
  keywords: [
    'coaching institute marketing agency jaipur',
    'coaching classes marketing jaipur',
    'education marketing agency jaipur',
    'coaching marketing jaipur',
    'edtech marketing agency jaipur',
    'admissions marketing jaipur',
    'digital marketing for coaching institutes',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Coaching Institute Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Course-level ads, demo funnels, and instant follow-up that fill batches for Jaipur coaching institutes. Real result: cost-per-lead ₹420→₹88 in 6 weeks, 2→20 calls/day.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (education marketing)
   node linked back to the global #organization graph. Server-rendered so AI
   crawlers see it in raw HTML. NAP is the real registered office; geo is
   approximate — confirm against the verified Google Business Profile. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Coaching Institute Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for coaching institutes, test-prep centres and EdTech brands — course-level ads, demo funnels, instant lead follow-up, and cost-per-admission tracking.',
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
      knowsAbout: ['Education Marketing', 'Coaching Institute Marketing', 'EdTech Marketing', 'Lead Generation', 'Performance Marketing'],
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
        { '@type': 'ListItem', position: 2, name: 'Coaching Institute Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function CoachingJaipurLayout({ children }: { children: React.ReactNode }) {
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
