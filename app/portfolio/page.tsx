import CursorGlow from '@/components/portfolio/CursorGlow';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import BackToTop from '@/components/portfolio/BackToTop';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import StatsTicker from '@/components/portfolio/StatsTicker';
import AboutIntro from '@/components/portfolio/AboutIntro';
import ServicesGrid from '@/components/portfolio/ServicesGrid';
import CaseStudies from '@/components/portfolio/CaseStudies';
import ResultsProof from '@/components/portfolio/ResultsProof';
import OurProcess from '@/components/portfolio/OurProcess';
import ClientLogos from '@/components/portfolio/ClientLogos';
import Testimonials from '@/components/portfolio/Testimonials';
import WhyUs from '@/components/portfolio/WhyUs';
import CTABanner from '@/components/portfolio/CTABanner';
import FAQ from '@/components/portfolio/FAQ';
import Footer from '@/components/portfolio/Footer';

export const metadata = {
  title: 'Portfolio — 100+ Brands Scaled with Real Results',
  description:
    'Real campaign results — ROAS lifts, CPL drops and revenue growth across 100+ brands. ₹10Cr+ ad spend managed, 4.9★ rated. Explore the case studies.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Growth Escalators',
    description: 'Real campaign results across 100+ brands. ₹10Cr+ ad spend managed, 4.9★ rated. Explore the case studies.',
    url: '/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsTicker />
        <AboutIntro />
        <ServicesGrid />
        <CaseStudies />
        <ResultsProof />
        <OurProcess />
        <ClientLogos />
        <Testimonials />
        <WhyUs />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
