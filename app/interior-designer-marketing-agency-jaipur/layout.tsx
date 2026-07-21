import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/interior-designer-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Interior Designer Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for interior designers & architects. We generate qualified, budget-matched project enquiries via portfolio-led content, local SEO, and lead nurture — not just profile views. ₹10Cr+ ad spend managed across 187+ brands. Free pipeline audit.',
  keywords: [
    'interior designer marketing agency jaipur',
    'interior design marketing jaipur',
    'marketing for interior designers',
    'architect marketing jaipur',
    'interior design lead generation jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Interior Designer Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Qualified, budget-matched project enquiries for Jaipur interior designers & architects — portfolio-led content, local SEO, and lead nurture. ₹10Cr+ ad spend managed across 187+ brands.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (interior design
   marketing) node linked back to the global #organization graph. Server-
   rendered so AI crawlers (which don't run JS) see it in raw HTML. NAP is the
   real registered office; geo lat/long is approximate — confirm against the
   verified Google Business Profile and update if it differs. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Interior Designer Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for interior designers, architects and design studios — portfolio websites, case-study content, local SEO, and budget-qualified lead generation.',
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
      knowsAbout: ['Interior Design Marketing', 'Lead Generation', 'Local SEO', 'Performance Marketing', 'Web Development'],
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
        { '@type': 'ListItem', position: 2, name: 'Interior Designer Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function InteriorJaipurLayout({ children }: { children: React.ReactNode }) {
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
