import Navbar from '@/components/sections/Navbar'
import HomepageReference from '@/components/sections/HomepageReference'
import HomepagePhaseOneRefinements from '@/components/sections/HomepagePhaseOneRefinements'
import LeadFormBand from '@/components/sections/LeadFormBand'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomepageReference />
        <LeadFormBand submitLabel="Get My Free Audit →" />
      </main>
      <Footer />
      <BackToTop />
      <HomepagePhaseOneRefinements />
    </>
  )
}
