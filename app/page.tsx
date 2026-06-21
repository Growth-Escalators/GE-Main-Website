'use client'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import AboutStatement from '@/components/sections/AboutStatement'
import Services from '@/components/sections/Services'
import Results from '@/components/sections/Results'
import Team from '@/components/sections/Team'
import Work from '@/components/sections/Work'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import SocialProofTicker from '@/components/ui/SocialProofTicker'
import Footer from '@/components/sections/Footer'

// Preloader removed (brand-foundation PR). Each section owns its own
// GSAP ScrollTrigger entrance animation and initializes on mount; smooth
// scrolling relies on CSS `scroll-behavior: smooth` (globals.css).
// Lenis/Three.js retired here; GSAP stays until the final cleanup PR.

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutStatement />
        <Services />
        <Results />
        <Team />
        <Work />
        <Testimonials />
        <CTA />
      </main>
      <SocialProofTicker />
      <Footer />
    </>
  )
}
