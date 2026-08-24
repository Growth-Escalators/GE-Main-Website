import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/jewellery-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Jewellery Marketing Agency in Jaipur',
  description:
    'Jaipur-based marketing agency for jewellery brands & showrooms. We drive online sales, showroom footfall, and real ROAS tracking — not just likes. Real D2C proof: Paraiso 10× monthly sales in 30 days, ROAS 1.9×→3.2×. Free growth audit.',
  keywords: [
    'jewellery marketing agency jaipur',
    'jewellery digital marketing jaipur',
    'jewellery brand marketing',
    'jewellery social media agency jaipur',
    'jewellery advertising jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Jewellery Marketing Agency in Jaipur — Growth Escalators',
    description:
      'Online sales, showroom footfall, and real ROAS tracking for Jaipur jewellery brands. Real D2C result: Paraiso — ₹33k→₹3.4L monthly sales in 30 days, ROAS 1.9×→3.2×.',
    url: PATH,
    type: 'website',
  },
}

/* Jaipur-scoped ProfessionalService linked to the global organization.
   Keep NAP identical to app/layout.tsx + the visible footer. Add geo only
   after the current Google Business Profile pin is verified. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}${PATH}#business`,
      name: 'Growth Escalators — Jewellery Marketing Agency in Jaipur',
      url: `${SITE}${PATH}`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Marketing agency in Jaipur for jewellery brands, showrooms and D2C jewellery labels — performance campaigns, Instagram content, Google Maps local SEO, and showroom-footfall funnels.',
      telephone: '+91-7733888883',
      email: 'jatin@growthescalators.com',
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
      knowsAbout: ['Jewellery Marketing', 'D2C Marketing', 'Performance Marketing', 'Social Media Marketing', 'Local SEO'],
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
        { '@type': 'ListItem', position: 2, name: 'Jewellery Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function JewelleryJaipurLayout({ children }: { children: React.ReactNode }) {
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
