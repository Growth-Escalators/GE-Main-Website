import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/meta-ads-agency-for-ecommerce'

export const metadata: Metadata = {
  title: 'Meta Ads Agency for Ecommerce Brands',
  description:
    'Meta ads agency for ecommerce brands focused on creative testing, offer iteration, account structure and Shopify conversion — not just audience tweaks. Verified D2C proof: Paraiso reached 3.2× ROAS with 6× revenue growth in 60 days.',
  keywords: ['meta ads agency for ecommerce','facebook ads agency for shopify','instagram ads for online store','meta ads agency india','facebook ads agency for ecommerce','ugc creative testing agency'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Meta Ads Agency for Ecommerce Brands — Growth Escalators', description: 'Creative testing, offer iteration, account structure and Shopify conversion for ecommerce Meta Ads. Paraiso: 3.2× ROAS and 6× revenue growth in 60 days.', url: PATH, type: 'website' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Meta Ads Management for Ecommerce',
      serviceType: 'Meta Ads Management',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description: 'Meta advertising for ecommerce brands across Facebook, Instagram and Reels, focused on creative testing, offer structure, account pacing and conversion.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Meta Ads Agency for Ecommerce', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function MetaAdsEcommerceLayout({ children }: { children: React.ReactNode }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
