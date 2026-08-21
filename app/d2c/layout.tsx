import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D2C Performance Marketing Agency',
  description:
    'Performance marketing agency for D2C and ecommerce brands — Meta Ads, Google Ads, creative testing, CRO and full-funnel growth built around profitable scaling.',
  keywords: [
    'D2C performance marketing agency',
    'performance marketing agency for D2C brands',
    'ecommerce performance marketing agency',
    'D2C growth agency',
    'Meta Ads agency for ecommerce',
  ],
  alternates: { canonical: '/d2c' },
  openGraph: {
    title: 'D2C Performance Marketing Agency — Growth Escalators',
    description:
      'Performance marketing for D2C brands built around profitable scaling, creative testing, CRO and full-funnel acquisition.',
    url: '/d2c',
    type: 'website',
  },
}

export default function D2CLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
