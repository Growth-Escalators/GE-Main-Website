import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/skincare-retention-marketing'

export const metadata: Metadata = {
  title: 'Skincare Retention Marketing | Grow Repeat Purchases',
  description:
    'Retention marketing for skincare & beauty D2C brands — replenishment funnels, WhatsApp + email flows, cohort LTV. Real result: repeat rate 18%→54%.',
  keywords: [
    'skincare subscription marketing',
    'beauty brand retention',
    'increase repeat purchase skincare',
    'grow ltv d2c',
    'd2c retention marketing agency',
    'skincare replenishment marketing',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Skincare & Beauty Retention Marketing — Growth Escalators',
    description:
      'Grow repeat purchase rate and LTV for skincare & beauty D2C brands. Replenishment funnels, WhatsApp + email retention. Real result: repeat rate 18%→54%.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node (no PostalAddress/local NAP;
   this is an India-wide vertical page, not a city page) linked to the global
   #organization graph (app/layout.tsx). Server-rendered so AI crawlers that
   don't run JS still see it in raw HTML. Standalone top-level route, so the
   breadcrumb is a simple Home → page pair (same pattern as the Jaipur pages). */
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
      description:
        'Retention marketing for skincare, beauty, and wellness D2C brands — replenishment and subscription funnels, WhatsApp + email lifecycle automation, cohort LTV tracking, and win-back campaigns.',
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
