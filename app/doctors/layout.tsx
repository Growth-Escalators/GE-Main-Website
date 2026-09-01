import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Marketing for Doctors & Clinics in India',
  description:
    'India-wide healthcare marketing for doctors, clinics, hospitals, and surgeons — patient acquisition, local SEO, compliant ads, content, and conversion-focused websites.',
  alternates: { canonical: '/doctors' },
  openGraph: {
    title: 'Healthcare Marketing for Doctors & Clinics in India — Growth Escalators',
    description:
      'India-wide patient acquisition and healthcare marketing for doctors, clinics, hospitals, and surgeons.',
    url: '/doctors',
    type: 'website',
  },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
