import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — ROAS, Leads & Revenue Results',
  description:
    'Growth Escalators case studies across D2C, ecommerce and healthcare: Paraiso reached 3.2× ROAS with 6× revenue growth, Elixzor reached 10× ROAS and ₹3.2Cr+ revenue, and Dr. Dheeraj Dubay generated 35,000+ leads.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case Studies — Growth Escalators',
    description: 'Verified outcome-led work across D2C, ecommerce and healthcare from Growth Escalators.',
    url: '/work',
    type: 'website',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
