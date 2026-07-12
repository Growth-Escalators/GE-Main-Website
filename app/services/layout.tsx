import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services — Ads, Funnels & SEO',
  description:
    'Performance marketing, funnels, websites, branding & SEO under one roof. 10,000+ campaigns, ₹10Cr+ ad spend, 97% retention. Book a free audit.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Digital Marketing Services — Growth Escalators',
    description: 'Performance marketing, funnels, websites, branding & SEO under one roof. 10,000+ campaigns, ₹10Cr+ ad spend, 97% retention.',
    url: '/services',
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
