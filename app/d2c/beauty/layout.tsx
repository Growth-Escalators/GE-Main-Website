import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/d2c/beauty'

export const metadata: Metadata = {
  title: 'Beauty & Skincare Marketing Agency for D2C Brands',
  description:
    'Performance marketing agency for beauty & skincare D2C brands — UGC creative, sampling funnels, compliant claims. Real result: AOV +118%. Book a free call.',
  keywords: [
    'beauty brand marketing agency india',
    'skincare marketing agency',
    'cosmetics d2c agency',
    'beauty d2c marketing agency',
    'meta ads agency for beauty brands',
    'skincare d2c performance marketing',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Beauty & Skincare Marketing Agency — Growth Escalators',
    description:
      'Performance marketing for beauty, skincare & cosmetics D2C brands. UGC creative, sampling funnels, compliant claims creative. Real result: AOV +118%.',
    url: PATH,
    type: 'website',
  },
}

/* Page-level JSON-LD — a NATIONAL Service node (no PostalAddress/local NAP;
   this is an India-wide vertical page, not a city page) linked to the global
   #organization graph (app/layout.tsx). Server-rendered so AI crawlers that
   don't run JS still see it in raw HTML. Breadcrumb reflects the real nesting
   under /d2c: Home → D2C → Beauty. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE}${PATH}#service`,
      name: 'Beauty & Skincare Marketing Agency',
      serviceType: 'Beauty & Skincare Marketing',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'Performance marketing for beauty, skincare, and cosmetics D2C brands — UGC and influencer-whitelisted creative, sampling/trial funnels, shade- and SKU-aware catalogs, and compliant before/after claims creative.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'D2C', item: `${SITE}/d2c` },
        { '@type': 'ListItem', position: 3, name: 'Beauty', item: `${SITE}${PATH}` },
      ],
    },
  ],
}

export default function BeautyD2CLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {children}
    </>
  )
}
