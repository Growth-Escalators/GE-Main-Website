import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import styles from '@/components/phase2/Phase2Core.module.css'

const SERVICES = [
  ['01','Performance Marketing','Meta Ads, Google Ads and full-funnel media connected to revenue, qualified demand and measurable acquisition.','/performance-marketing-agency-jaipur'],
  ['02','Funnels & Automation','Landing journeys, CRM logic, WhatsApp and lifecycle automation designed to reduce leakage between click, lead and sale.','/contact'],
  ['03','Web & Commerce','Conversion-led websites, Shopify experiences and Next.js builds that connect acquisition with a faster, clearer buying journey.','/website-development-company-jaipur'],
  ['04','Creative & Social','Creative systems, campaign concepts, social content and production built around customer insight rather than posting volume.','/portfolio'],
  ['05','SEO & Organic','Technical SEO, content architecture and search-led authority that help the right pages earn sustained discovery.','/services'],
  ['06','Software & AI','Software development, AI automation and integrations that remove operational friction and connect growth workflows.','/software-development-company-jaipur'],
  ['07','Technology Talent','India-based and offshore technology staffing support for teams that need screened delivery capacity around specific requirements.','/staffing'],
] as const

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
              <p>Growth Escalators connects performance marketing, conversion, creative, search, software and delivery capacity around one commercial objective. This page is the hub; deeper service pages handle the specialist detail.</p>
              <div className={styles.heroActions}><Link href="/#book" className={styles.pill}>Get Free Audit ↗</Link><Link href="/work" className={styles.pillLine}>See the proof</Link></div>
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
            <p data-p2-reveal>Instead of selling disconnected deliverables, we decide what deserves to be connected, what should stay specialist, and which constraint is actually holding growth back.</p>
          </div>
          <div className={styles.serviceList}>
            {SERVICES.map(([n,title,copy,href])=><Link href={href} className={styles.serviceRow} key={title} data-p2-card>
              <span className={styles.serviceIndex}>{n}</span><h3>{title}</h3><p>{copy}</p><span className={styles.serviceArrow}>↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={styles.proofBand} data-p2-reveal>
            <strong>Strategy is useful.<br/>Proof is better.</strong>
            <div><p>See how the system translates into measurable outcomes across D2C, ecommerce and healthcare.</p><div className={styles.heroActions}><Link href="/work" className={styles.pill}>Explore case studies ↗</Link><Link href="/portfolio" className={styles.pillLine}>View portfolio</Link></div></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`${styles.shell} ${styles.finalCta}`} data-p2-reveal>
          <p className={styles.eyebrow}>Not sure which service is the constraint?</p><h2>Find the gap before you add more spend.</h2><p>Start with the Free Growth Audit. We’ll review the acquisition and conversion journey and identify the highest-leverage next move.</p><div className={styles.heroActions}><Link href="/#book" className={styles.pillLight}>Get Free Audit ↗</Link></div>
        </div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}
