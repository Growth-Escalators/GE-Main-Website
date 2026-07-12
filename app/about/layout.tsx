import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — AI-First Performance Marketing Agency',
  description:
    'AI-first performance marketing agency based in Jaipur. ₹10Cr+ ad spend managed, 10,000+ campaigns, 4.9★ rating, 97% client retention. Meet the team.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Growth Escalators — AI-First Marketing Agency',
    description: 'AI-first performance marketing agency in Jaipur. ₹10Cr+ ad spend, 10,000+ campaigns, 4.9★ rating, 97% client retention.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
