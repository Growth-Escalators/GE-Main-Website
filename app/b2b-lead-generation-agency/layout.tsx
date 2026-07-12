import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/b2b-lead-generation-agency'

export const metadata: Metadata = {
  title: 'B2B Lead Generation Agency in India',
  description:
    "B2B lead generation agency for India's consulting & B2B firms — real pipeline: 0→15 qualified leads/month, ₹2.5L avg deal size. Book a free audit.",
  keywords: [
    'b2b lead generation agency india',
    'b2b lead generation agency',
    'b2b demand generation agency',
    'b2b marketing agency india',
    'b2b lead generation company india',
    'abm agency india',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'B2B Lead Generation Agency in India — Growth Escalators',
    description:
      'ABM-targeted B2B lead generation for consulting & B2B service firms. Real pipeline, not just leads. Book a free pipeline audit.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node linked to the global
   #organization graph (app/layout.tsx). Server-rendered so AI crawlers see it
   in raw HTML. No PostalAddress / local NAP — this page targets all of India,
   not a single city (contrast with /real-estate-marketing-agency-jaipur). */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'B2B Lead Generation Agency',
      serviceType: 'B2B Lead Generation',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'ABM-targeted B2B lead generation for consulting and B2B service firms — LinkedIn authority, Google Ads, content, and long-cycle nurture built around a defined ICP.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'B2B Lead Generation Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function B2BLeadGenerationAgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
