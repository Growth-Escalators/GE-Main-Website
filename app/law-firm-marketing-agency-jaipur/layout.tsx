import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/law-firm-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Law Firm & CA Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for law firms, advocates & CA firms. We build authority and qualified enquiries via SEO, LinkedIn & content — fully within Bar Council/ICAI norms. Real B2B result: Credo World, 0→15 qualified leads/month, 400% LinkedIn growth. Free authority audit.',
  keywords: [
    'law firm marketing agency jaipur',
    'marketing for lawyers jaipur',
    'chartered accountant marketing jaipur',
    'ca firm marketing jaipur',
    'legal marketing agency jaipur',
    'professional services marketing jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Law Firm & CA Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Compliance-aware authority marketing for Jaipur law firms, advocates & CA firms. Real B2B result: Credo World — 0→15 qualified leads/month, 400% LinkedIn growth in 4 months.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a Jaipur-scoped ProfessionalService (legal & finance
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
      name: 'Growth Escalators — Law Firm & CA Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for law firms, advocates and chartered accountant / finance firms — authority content, LinkedIn thought leadership, local SEO, and compliance-aware qualified-enquiry generation.',
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
      knowsAbout: ['Legal Marketing', 'Professional Services Marketing', 'B2B Lead Generation', 'LinkedIn Marketing', 'Local SEO'],
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
        { '@type': 'ListItem', position: 2, name: 'Law Firm & CA Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function LawFirmJaipurLayout({ children }: { children: React.ReactNode }) {
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
