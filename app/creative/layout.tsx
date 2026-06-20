import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Folio — Creative Work from Growth Escalators',
  description:
    'A working portfolio of brand systems, social creative, posters, identity, and web design — shipped for clients across India and beyond by the team at Growth Escalators.',
  alternates: { canonical: '/creative' },
  openGraph: {
    title: 'Folio · Growth Escalators',
    description: 'Brand systems, social creative, identity, and posters — shipped for clients across India.',
    url: 'https://www.growthescalators.com/creative',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>
}
