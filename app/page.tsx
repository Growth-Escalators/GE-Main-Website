import TrustStrip from '@/components/sections/TrustStrip'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Results from '@/components/sections/Results'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import Industries from '@/components/sections/Industries'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import AIConsultant from '@/components/sections/AIConsultant'
import LeadFormBand from '@/components/sections/LeadFormBand'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <TrustStrip />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Results />
        <Services />
        <Work />
        <Industries />
        <WhyUs />
        <Testimonials />
        <AIConsultant />
        <LeadFormBand />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
