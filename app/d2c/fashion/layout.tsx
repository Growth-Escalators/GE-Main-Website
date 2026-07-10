import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meta Ads Agency for Fashion & Apparel D2C Brands',
  description:
    'Performance marketing for fashion and apparel D2C brands stuck at a plateaued ROAS. We rebuild the account around return-adjusted ROAS, seasonal catalogs, and drop-cycle creative — not the dashboard number.',
  alternates: { canonical: '/d2c/fashion' },
  openGraph: {
    title: 'Meta Ads Agency for Fashion & Apparel Brands — Growth Escalators',
    description:
      'Scale fashion D2C profitably: return-adjusted ROAS, clean catalogs, and creative built for drop cycles.',
    url: '/d2c/fashion',
    type: 'website',
  },
}

export default function FashionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
