import type { Metadata } from 'next'
import { US_CONTENT } from '@/lib/content/international-landing/us'

const { title, description, canonicalPath } = US_CONTENT.meta

export const metadata: Metadata = {
  // `title.absolute` bypasses the root layout's `%s — Growth Escalators` template —
  // without it the brand name gets appended twice, since this title already ends
  // with "| Growth Escalators" per the exact copy this page was briefed to use.
  title: { absolute: title },
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description,
    url: `https://www.growthescalators.com${canonicalPath}`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function USTechStaffingFulfilmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
