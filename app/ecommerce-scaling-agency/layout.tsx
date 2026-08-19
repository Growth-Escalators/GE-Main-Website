import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/ecommerce-scaling-agency'

export const metadata: Metadata = {
  title: 'Ecommerce Scaling Agency — Break Your ROAS Ceiling',
  description:
    'Scale ecommerce beyond a ROAS plateau with margin-aware pacing, creative supply, conversion and retention considered together. Verified proof: Paraiso grew revenue 6× in 60 days while reaching 3.2× ROAS.',
  keywords: ['ecommerce scaling agency','how to scale shopify ads','scale ecommerce profitably','scale meta ads past plateau','ecommerce growth agency india','seasonal peak ecommerce ads agency'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Ecommerce Scaling Agency — Growth Escalators', description: 'Scale ecommerce beyond a ROAS plateau without ignoring store economics. Paraiso: 6× revenue growth in 60 days and 3.2× ROAS.', url: PATH, type: 'website' },
}

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
      description: 'Scaling for ecommerce brands facing a growth ceiling, connecting margin-aware media pacing, creative supply, conversion, inventory and retention.',
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
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
