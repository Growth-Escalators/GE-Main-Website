import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/b2b-lead-generation-agency'

export const metadata: Metadata = {
  title: 'B2B Lead Generation Agency in India',
  description:
    'B2B lead generation for consulting, SaaS and service firms in India — ICP definition, paid demand, outbound, authority content, lead qualification and CRM handoff built around pipeline quality.',
  keywords: ['b2b lead generation agency india','b2b lead generation agency','b2b demand generation agency','b2b marketing agency india','b2b lead generation company india','abm agency india'],
  alternates: { canonical: PATH },
  openGraph: { title: 'B2B Lead Generation Agency in India — Growth Escalators', description: 'ICP-led B2B demand generation, qualification and CRM handoff built around qualified pipeline instead of raw lead volume.', url: PATH, type: 'website' },
}

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
      description: 'B2B lead generation for consulting, SaaS and service firms across ICP definition, paid demand, outbound, authority content, lead qualification and CRM handoff.',
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
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
