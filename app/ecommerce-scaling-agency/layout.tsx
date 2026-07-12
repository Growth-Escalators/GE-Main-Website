import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/ecommerce-scaling-agency'

export const metadata: Metadata = {
  title: 'Ecommerce Scaling Agency — Break Your ROAS Ceiling',
  description:
    'Scale ecommerce profitably past a ROAS plateau with margin-protected pacing. Paraiso: 6× revenue in 60 days. Sable: 6.57× peak-window ROAS.',
  keywords: [
    'ecommerce scaling agency',
    'how to scale shopify ads',
    'scale ecommerce profitably',
    'scale meta ads past plateau',
    'ecommerce growth agency india',
    'seasonal peak ecommerce ads agency',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Ecommerce Scaling Agency — Growth Escalators',
    description:
      'Scale ecommerce brands past a ROAS ceiling without breaking unit economics. Paraiso: 6× revenue in 60 days. Sable: 6.57× ROAS in peak window.',
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
      name: 'Ecommerce Scaling & Growth Marketing',
      serviceType: 'Ecommerce Growth',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Scaling for profitable ecommerce brands stuck at a ROAS ceiling — margin-protected budget pacing, incrementality testing, audience expansion sequencing, and seasonal peak-window campaign architecture.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Ecommerce Scaling Agency', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function EcommerceScalingAgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
