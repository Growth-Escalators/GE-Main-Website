import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/saas-marketing-agency'

export const metadata: Metadata = {
  title: 'SaaS Marketing Agency in India',
  description:
    'SaaS marketing for Indian product and EdTech teams — trial-to-paid funnels, demo demand, CAC:LTV visibility, activation, lifecycle nurture and conversion-focused growth systems.',
  keywords: ['saas marketing agency india','saas marketing agency','saas lead generation','saas performance marketing','edtech marketing agency','saas growth agency india'],
  alternates: { canonical: PATH },
  openGraph: { title: 'SaaS Marketing Agency in India — Growth Escalators', description: 'Trial-to-paid funnels, demo demand, CAC:LTV visibility, activation and lifecycle nurture for SaaS and EdTech teams.', url: PATH, type: 'website' },
}

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
      description: 'SaaS and EdTech marketing across trial-to-paid funnels, demo demand, CAC:LTV visibility, activation and retention journeys.',
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
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
