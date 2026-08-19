import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/ecommerce-advertising-agency'

export const metadata: Metadata = {
  title: 'Ecommerce Advertising Agency — Meta + Google',
  description:
    'Full-funnel ecommerce advertising across Meta and Google with blended, order-reconciled reporting, conversion strategy and tracking. Verified ecommerce proof: Elixzor reached 10× ROAS and ₹3.2Cr+ revenue.',
  keywords: ['ecommerce advertising agency','ecommerce advertising agency india','ecommerce marketing agency','d2c performance marketing agency','full funnel ecommerce ads agency','meta google ads agency for ecommerce'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Ecommerce Advertising Agency — Growth Escalators', description: 'Meta, Google, tracking and ecommerce conversion connected around one commercial view. Elixzor: 10× ROAS and ₹3.2Cr+ revenue.', url: PATH, type: 'website' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Ecommerce Advertising (Meta + Google)',
      serviceType: 'Ecommerce Advertising',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description: 'Full-funnel ecommerce advertising across Meta and Google with blended reporting, tracking, conversion strategy and new-versus-returning revenue visibility.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Ecommerce Advertising Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function EcommerceAdvertisingAgencyLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
