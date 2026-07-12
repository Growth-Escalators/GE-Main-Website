import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Marketing for Developers & Builders',
  description:
    'Real estate marketing for developers & builders: premium-buyer targeting, AI lead-scoring, lower cost per qualified site visit. Book a free audit.',
  alternates: { canonical: '/real-estate' },
  openGraph: {
    title: 'Real Estate Marketing — Growth Escalators',
    description:
      'AI-first marketing for real estate developers & builders. Premium-buyer targeting, AI lead-scoring, lower cost per site visit.',
    url: '/real-estate',
    type: 'website',
  },
}

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
