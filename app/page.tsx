'use client'

import TopTrustStrip from '@/components/home/TopTrustStrip'
import SiteNav from '@/components/home/SiteNav'
import Hero from '@/components/home/Hero'
import LogoTrustBar from '@/components/home/LogoTrustBar'
import StatsBand from '@/components/home/StatsBand'
import ServicesGrid from '@/components/home/ServicesGrid'
import CaseStudies from '@/components/home/CaseStudies'
import Industries from '@/components/home/Industries'
import WhyUs from '@/components/home/WhyUs'
import Testimonials from '@/components/home/Testimonials'
import AIConsultant from '@/components/home/AIConsultant'
import LeadFormBand from '@/components/home/LeadFormBand'
import SiteFooter from '@/components/home/SiteFooter'
import StickyCTABar from '@/components/home/StickyCTABar'
import ExitIntentPopup from '@/components/home/ExitIntentPopup'

// Redesigned homepage (feat/homepage-redesign). Composed from clean
// Framer-Motion sections under components/home/*. The legacy GSAP-era
// components/sections/* are no longer used by `/` — other routes still
// reference them until their own rebuilds. GrowthBot mounts globally
// via app/layout.tsx (GrowthBotLoader).
export default function Home() {
  return (
    <>
      <TopTrustStrip />
      <SiteNav />
      <main>
        <Hero />
        <LogoTrustBar />
        <StatsBand />
        <ServicesGrid />
        <CaseStudies />
        <Industries />
        <WhyUs />
        <Testimonials />
        <AIConsultant />
        <LeadFormBand />
      </main>
      <SiteFooter />
      {/* Fixed overlays — self-positioning, mounted once */}
      <StickyCTABar />
      <ExitIntentPopup />
    </>
  )
}
