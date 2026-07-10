import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Marketing for D2C Brands',
  description:
    "Higher ROAS, scaled profitably. AI-first performance marketing for D2C and e-commerce brands stuck at a plateaued ROAS — account rebuilds, creative testing, and full-funnel attribution.",
  alternates: { canonical: '/d2c' },
  openGraph: {
    title: 'Performance Marketing for D2C Brands — Growth Escalators',
    description:
      'Higher ROAS, scaled profitably. AI-first performance marketing built for D2C brands stuck at a plateau.',
    url: '/d2c',
    type: 'website',
  },
}

export default function D2CLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
