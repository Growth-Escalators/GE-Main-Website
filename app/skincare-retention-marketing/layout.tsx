import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/skincare-retention-marketing'

export const metadata: Metadata = {
  title: 'Skincare Retention Marketing | Grow Repeat Purchases',
  description:
    'Retention marketing for skincare and beauty D2C brands — replenishment journeys, WhatsApp and email lifecycle flows, cohort analysis, win-back campaigns and repeat-purchase strategy.',
  keywords: ['skincare subscription marketing','beauty brand retention','increase repeat purchase skincare','grow ltv d2c','d2c retention marketing agency','skincare replenishment marketing'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Skincare & Beauty Retention Marketing — Growth Escalators', description: 'Replenishment journeys, WhatsApp and email lifecycle flows, cohort analysis and win-back strategy for skincare and beauty D2C brands.', url: PATH, type: 'website' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Skincare & Beauty Retention Marketing',
      serviceType: 'Retention Marketing',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description: 'Retention marketing for skincare, beauty and wellness D2C brands across replenishment journeys, WhatsApp and email lifecycle automation, cohort analysis and win-back campaigns.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Skincare Retention Marketing', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function SkincareRetentionMarketingLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
