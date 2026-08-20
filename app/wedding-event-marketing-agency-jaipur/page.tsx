import type { Metadata } from 'next'
import IndustryLandingPage from '@/components/landing/IndustryLandingPage'
import { WEDDING_EVENT_JAIPUR_CONTENT } from '@/lib/restoredLocalSeoContent'

const SITE = 'https://www.growthescalators.com'
const PATH = '/wedding-event-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Wedding & Event Marketing Agency in Jaipur',
  description:
    'Jaipur wedding and event marketing agency for Meta & Google lead generation, destination-wedding SEO, portfolio websites, Reels and WhatsApp qualification. Free lead-gen audit.',
  keywords: [
    'wedding marketing agency jaipur',
    'event marketing agency jaipur',
    'wedding planner marketing jaipur',
    'destination wedding marketing jaipur',
    'event lead generation jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Wedding & Event Marketing Agency in Jaipur — Growth Escalators',
    description: 'Portfolio-led creative, paid acquisition, destination-wedding SEO and lead qualification for Jaipur planners, venues and event businesses.',
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
      name: 'Wedding & Event Marketing Agency in Jaipur',
      serviceType: 'Wedding and Event Lead Generation',
      url: `${SITE}${PATH}`,
      description: 'Meta and Google lead generation, destination-wedding SEO, portfolio conversion and WhatsApp qualification for Jaipur wedding and event businesses.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Jaipur' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Wedding & Event Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function WeddingEventMarketingJaipurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <IndustryLandingPage content={WEDDING_EVENT_JAIPUR_CONTENT} />
    </>
  )
}
