import type { Metadata } from 'next'

const SITE = 'https://www.growthescalators.com'
const PATH = '/d2c/beauty'

export const metadata: Metadata = {
  title: 'Beauty & Skincare Marketing Agency for D2C Brands',
  description:
    'Performance marketing for beauty, skincare and cosmetics D2C brands — UGC creative, sampling funnels, compliant product messaging, paid acquisition and ecommerce conversion.',
  keywords: ['beauty brand marketing agency india','skincare marketing agency','cosmetics d2c agency','beauty d2c marketing agency','meta ads agency for beauty brands','skincare d2c performance marketing'],
  alternates: { canonical: PATH },
  openGraph: { title: 'Beauty & Skincare Marketing Agency — Growth Escalators', description: 'UGC creative, sampling funnels, paid acquisition and ecommerce conversion for beauty, skincare and cosmetics D2C brands.', url: PATH, type: 'website' },
}

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
      description: 'Performance marketing for beauty, skincare and cosmetics D2C brands across creative, sampling funnels, paid acquisition, product messaging and ecommerce conversion.',
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
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />{children}</>
}
