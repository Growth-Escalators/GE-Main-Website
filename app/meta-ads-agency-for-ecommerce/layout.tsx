import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/meta-ads-agency-for-ecommerce'

export const metadata: Metadata = {
  title: 'Meta Ads Agency for Ecommerce Brands',
  description:
    'Meta ads agency for ecommerce — UGC creative & offer testing, not just audience tweaks. Sneha Kapoor: ROAS 1.9×→6.1× in 75 days. Free audit.',
  keywords: [
    'meta ads agency for ecommerce',
    'facebook ads agency for shopify',
    'instagram ads for online store',
    'meta ads agency india',
    'facebook ads agency for ecommerce',
    'ugc creative testing agency',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Meta Ads Agency for Ecommerce Brands — Growth Escalators',
    description:
      'Meta-only ecommerce ads agency: UGC creative testing at scale, offer structuring, CBO pacing. Sneha Kapoor: ROAS 1.9×→6.1× in 75 days.',
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
      name: 'Meta Ads Management for Ecommerce',
      serviceType: 'Meta Ads Management',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Meta-only (Facebook, Instagram, Reels) advertising for ecommerce brands — UGC creative testing at scale, offer structuring, account structure, and CBO budget pacing.',
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
