import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/saas-marketing-agency'

export const metadata: Metadata = {
  title: 'SaaS Marketing Agency in India',
  description:
    "SaaS marketing agency for India's SaaS & EdTech founders — trial-to-paid funnels, CAC:LTV. CAC −52%, LTV 3×; EdTech CPL ₹420→₹88. Free audit.",
  keywords: [
    'saas marketing agency india',
    'saas marketing agency',
    'saas lead generation',
    'saas performance marketing',
    'edtech marketing agency',
    'saas growth agency india',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'SaaS Marketing Agency in India — Growth Escalators',
    description:
      'Trial-to-paid funnels, CAC:LTV economics, demo-booking, activation and retention for SaaS & EdTech. Book a free funnel audit.',
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
      name: 'SaaS Marketing Agency',
      serviceType: 'SaaS Marketing',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'SaaS and EdTech marketing — trial-to-paid and demo-booking funnels, CAC:LTV-driven performance marketing, activation, and retention/expansion campaigns.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'SaaS Marketing Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SaaSMarketingAgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
