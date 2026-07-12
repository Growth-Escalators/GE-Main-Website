import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — ROAS, Leads & Revenue Results',
  description:
    'Real case studies from 100+ brands — ROAS 1.8x → 5.2x, CPL down 75%, revenue up ₹8L in 90 days. ₹10Cr+ ad spend managed. See the results.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case Studies — Growth Escalators',
    description: 'Real case studies from 100+ brands — ROAS 1.8x → 5.2x, CPL down 75%, revenue up ₹8L in 90 days.',
    url: '/work',
    type: 'website',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
