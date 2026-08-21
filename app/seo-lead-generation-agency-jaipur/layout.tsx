import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/seo-lead-generation-agency-jaipur'

export const metadata: Metadata = {
  title: 'SEO & Lead Generation Agency in Jaipur',
  description:
    'SEO and lead generation agency in Jaipur connecting technical SEO, local search, buyer-intent content, landing pages, conversion tracking and qualified lead generation.',
  keywords: [
    'SEO agency in Jaipur',
    'best SEO agency in Jaipur',
    'lead generation agency in Jaipur',
    'SEO and lead generation agency Jaipur',
    'local SEO company Jaipur',
    'lead generation company Jaipur',
    'digital lead generation Jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'SEO & Lead Generation Agency in Jaipur — Growth Escalators',
    description:
      'Technical SEO, local search, content, landing pages and conversion tracking connected to qualified lead generation.',
    url: PATH,
    type: 'website',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'SEO & Lead Generation Agency in Jaipur',
      serviceType: 'SEO and Lead Generation',
      url: `${SITE}${PATH}`,
      description:
        'SEO and lead generation services connecting technical SEO, local search, content, landing pages, tracking and qualified demand generation.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'Country', name: 'India' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'SEO & Lead Generation Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SeoLeadGenerationJaipurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
