import type { Metadata } from 'next'
import IndustryLandingPage from '@/components/landing/IndustryLandingPage'
import { RESTAURANT_JAIPUR_CONTENT } from '@/lib/restoredLocalSeoContent'

const SITE = 'https://www.growthescalators.com'
const PATH = '/restaurant-marketing-agency-jaipur'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Agency in Jaipur',
  description:
    'Jaipur restaurant marketing agency for Google Maps, local SEO, Meta & Google Ads, Reels, bookings, orders, reviews and repeat-customer growth. Get a free restaurant growth audit.',
  keywords: [
    'restaurant marketing agency jaipur',
    'restaurant digital marketing jaipur',
    'restaurant social media marketing jaipur',
    'restaurant seo jaipur',
    'restaurant advertising agency jaipur',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Restaurant Marketing Agency in Jaipur — Growth Escalators',
    description: 'Local SEO, Google Maps, social creative, paid acquisition and conversion systems for Jaipur restaurants, cafés and F&B brands.',
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
      name: 'Restaurant Marketing Agency in Jaipur',
      serviceType: 'Restaurant and F&B Marketing',
      url: `${SITE}${PATH}`,
      description: 'Local SEO, Google Maps optimisation, performance advertising, social creative, booking conversion and retention marketing for Jaipur restaurants and F&B brands.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Jaipur' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Restaurant Marketing Agency in Jaipur', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function RestaurantMarketingJaipurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <IndustryLandingPage content={RESTAURANT_JAIPUR_CONTENT} />
    </>
  )
}
