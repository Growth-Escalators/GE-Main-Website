import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'

export const metadata: Metadata = {
  title: 'White-Label Software Development for Agencies',
  description:
    'White-label software development for agencies and product teams. India-based delivery for SaaS, web applications, ecommerce, internal tools, integrations and AI-enabled workflows under your brand.',
  alternates: { canonical: '/white-label-software-development' },
  openGraph: {
    title: 'White-Label Software Development for Agencies — Growth Escalators',
    description:
      'A silent engineering partner for SaaS, web applications, ecommerce, internal tools, integrations and AI-enabled workflows. Your client relationship stays yours.',
    url: '/white-label-software-development',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'White-Label Software Development for Agencies — Growth Escalators',
    description: 'White-label product engineering under your brand, with clear scope, ownership and handover.',
  },
}

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
