'use client'

import TopTrustStrip from '@/components/home/TopTrustStrip'
import SiteNav from '@/components/home/SiteNav'
import SiteFooter from '@/components/home/SiteFooter'
import StickyCTABar from '@/components/home/StickyCTABar'
import StaffingHero from '@/components/staffing/StaffingHero'
import StaffingProblem from '@/components/staffing/StaffingProblem'
import StaffingProcess from '@/components/staffing/StaffingProcess'
import StaffingMartechEdge from '@/components/staffing/StaffingMartechEdge'
import StaffingWhatYouGet from '@/components/staffing/StaffingWhatYouGet'
import StaffingRoles from '@/components/staffing/StaffingRoles'
import StaffingWhyUs from '@/components/staffing/StaffingWhyUs'
import StaffingFAQ from '@/components/staffing/StaffingFAQ'
import StaffingLeadForm from '@/components/staffing/StaffingLeadForm'

// Staffing & Recruiting landing page (feat/staffing-lander). Reuses the
// redesigned site chrome (TopTrustStrip / SiteNav / SiteFooter / StickyCTABar)
// from components/home and the staffing-specific body from components/staffing.
// Messaging: AI-led sourcing/screening, MarTech expertise, deep tech & marketing
// talent pool, full-time or contract, remote-ready, "we use the talent we
// provide". No placement/replacement guarantee anywhere — by design.
export default function StaffingPage() {
  return (
    <>
      <TopTrustStrip />
      <SiteNav />
      <main>
        <StaffingHero />
        <StaffingProblem />
        <StaffingProcess />
        <StaffingMartechEdge />
        <StaffingWhatYouGet />
        <StaffingRoles />
        <StaffingWhyUs />
        <StaffingFAQ />
        <StaffingLeadForm />
      </main>
      <SiteFooter />
      <StickyCTABar />
    </>
  )
}
