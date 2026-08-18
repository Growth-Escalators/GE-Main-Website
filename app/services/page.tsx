import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import ServicesExperience from '@/components/phase2/ServicesExperience'
import ServicesAudit from '@/components/phase2/ServicesAudit'
import styles from '@/components/phase2/Phase2Core.module.css'
import serviceStyles from '@/components/phase2/ServicesRefinement.module.css'

export default function ServicesPage(){
  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow} data-p2-hero>Connected capabilities</p>
              <h1 data-p2-hero>Growth works<br/>better connected.</h1>
            </div>
            <div className={styles.heroAside} data-p2-hero>
              <p>Growth Escalators connects performance marketing, conversion, creative, search, software and delivery capacity around one commercial objective. Hover through the capabilities below to see how each lever is designed to move the business.</p>
              <div className={styles.heroActions}><Link href="#book" className={styles.pill}>Get Free Audit ↗</Link><Link href="/work" className={styles.pillLine}>See the proof</Link></div>
            </div>
          </div>
          <div className={styles.heroRule}>
            {[['187+','brands scaled'],['97%','client retention'],['₹10Cr+','ad spend managed'],['10,000+','campaigns']].map(([v,l])=><div className={styles.heroStat} key={l} data-p2-hero><strong>{v}</strong><span>{l}</span></div>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div><p className={styles.eyebrow} data-p2-reveal>Our services</p><h2 data-p2-reveal>Every lever.<br/>One system.</h2></div>
            <p data-p2-reveal>Each capability should make the outcome easier to picture. Move through the rows to see the growth logic behind media, funnels, commerce, creative, organic, software and talent.</p>
          </div>
          <ServicesExperience />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={serviceStyles.proofGrid}>
            <div className={serviceStyles.proofCopy} data-p2-reveal>
              <p className={styles.eyebrow}>Strategy is useful. Proof is better.</p>
              <strong>See what happens when the system connects.</strong>
              <p>Growth is easier to trust when the commercial outcome is visible. Our selected work shows verified results across D2C, ecommerce and healthcare — with the wider portfolio showing how the creative, web and technology layers support those outcomes.</p>
              <div className={styles.heroActions}><Link href="/work" className={styles.pill}>Explore case studies ↗</Link><Link href="/portfolio" className={styles.pillLine}>View portfolio</Link></div>
            </div>
            <div className={serviceStyles.proofVisual} data-p2-media>
              <Image src="/portfolio/hero.png" alt="Growth Escalators selected work montage" fill sizes="(max-width: 980px) 100vw, 760px" />
              <div className={serviceStyles.proofShade} />
              <span className={serviceStyles.proofTag}>Verified outcomes</span>
              <div className={serviceStyles.proofMetrics}>
                <div><strong>3.2×</strong><span>Paraiso ROAS</span></div>
                <div><strong>10×</strong><span>Elixzor ROAS</span></div>
                <div><strong>35K+</strong><span>Healthcare leads</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesAudit />
    </main>
    <Footer /><BackToTop />
  </>
}
