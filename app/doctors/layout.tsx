import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing for Doctors & Clinics — Growth Escalators',
  description:
    "More patients. Less ad spend. Performance marketing, content, and conversion-focused websites built specifically for doctors, clinics, and hospitals across India.",
  openGraph: {
    title: 'Marketing for Doctors & Clinics — Growth Escalators',
    description:
      "More patients. Less ad spend. Performance marketing built specifically for doctors and clinics.",
    type: 'website',
  },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
