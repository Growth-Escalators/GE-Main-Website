import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/ecommerce-advertising-agency'

export const metadata: Metadata = {
  title: 'Ecommerce Advertising Agency — Meta + Google',
  description:
    'Full-funnel ecommerce advertising across Meta + Google with blended ROAS reporting. Exzept: 1.8×→5.2× ROAS, CPL −44%, +₹8L revenue in 90 days.',
  keywords: [
    'ecommerce advertising agency',
    'ecommerce advertising agency india',
    'ecommerce marketing agency',
    'd2c performance marketing agency',
    'full funnel ecommerce ads agency',
    'meta google ads agency for ecommerce',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Ecommerce Advertising Agency — Growth Escalators',
    description:
      'Full-funnel ecommerce advertising across Meta + Google with blended, order-reconciled ROAS. Exzept: 1.8×→5.2× ROAS, +₹8L revenue in 90 days.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node linked to the global
   #organization graph (app/layout.tsx). No PostalAddress / local NAP: this
   page targets all-India ecommerce founders, not a single city. Server-
   rendered so AI crawlers see it in raw HTML. */
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
      description:
        'Full-funnel ecommerce advertising across Meta and Google — blended, order-reconciled ROAS reporting, server-side/CAPI tracking, AOV and bundling strategy, and new-vs-returning revenue attribution.',
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
