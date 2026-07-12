import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Marketing for Cafés & Restaurants',
  description:
    'Fill your tables at peak hours, slash dependence on Swiggy, Zomato and UberEats, and turn first-time diners into regulars. AI-first marketing built for cafés, restaurants, and cloud kitchens.',
  alternates: { canonical: '/restaurants' },
  // De-targeted 2026-07-12 (Jatin): GE is not pursuing restaurants/cafés right now.
  // noindex removes it from Google without deleting the page (revisit in ~2–3 months).
  robots: { index: false, follow: true },
  openGraph: {
    title: 'AI-Powered Marketing for Cafés & Restaurants — Growth Escalators',
    description:
      'AI-first marketing for cafés, restaurants, and cloud kitchens. Full tables, higher margins, more loyal regulars.',
    url: '/restaurants',
    type: 'website',
  },
}

export default function RestaurantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
