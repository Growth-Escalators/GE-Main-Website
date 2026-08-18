import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import styles from '@/components/phase2/Phase2Core.module.css'

const CASES = [
  {
    client:'Paraiso Comfortwears', category:'D2C Performance Marketing · Ecommerce', className:styles.paraiso,
    headline:'From 1.9× to 3.2× ROAS — and 6× revenue in 60 days.',
    copy:'The work focused on turning paid acquisition into a more reliable ecommerce growth system: sharper media decisions, faster testing and a conversion journey that could support scale.',
    metrics:[['3.2×','ROAS'],['6×','revenue growth'],['60 days','growth window']], href:'/d2c'
  },
  {
    client:'Elixzor', category:'Ecommerce Advertising · Full Funnel', className:styles.elixzor,
    headline:'A full-funnel performance engine that reached 10× ROAS.',
    copy:'Acquisition was treated as a connected system rather than a collection of campaigns — aligning media, funnel decisions and ecommerce performance around profitable revenue.',
    metrics:[['10×','ROAS'],['₹3.2Cr+','revenue'],['Full funnel','growth system']], href:'/ecommerce-advertising-agency'
  },
  {
    client:'Dr. Dheeraj Dubay', category:'Healthcare · Patient Acquisition', className:styles.dheeraj,
    headline:'35,000+ leads across a patient acquisition journey built for intent.',
    copy:'Healthcare demand needs clarity, trust and a friction-light route from search or ad to enquiry. The work connected paid acquisition with the website and lead journey around patient intent.',
    metrics:[['35,000+','leads'],['Healthcare','growth'],['High intent','lead journey']], href:'/doctors'
  }
] as const

export default function WorkPage(){
  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div><p className={styles.eyebrow} data-p2-hero>Results + selected portfolio</p><h1 data-p2-hero>Proof before<br/>promises.</h1></div>
            <div className={styles.heroAside} data-p2-hero><p>Start with what changed for the business, then see the performance, creative, web and technology work behind the system. One page gives you both the outcome and the execution.</p><div className={styles.heroActions}><Link href="#portfolio" className={styles.pill}>See selected portfolio ↗</Link><Link href="/#book" className={styles.pillLine}>Get Free Audit</Link></div></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>Featured case studies</p><h2 data-p2-reveal>Growth you can<br/>measure.</h2></div><p data-p2-reveal>No vanity wall. Each featured story leads with the commercial outcome and keeps the client, category and route to the relevant specialist page crawlable.</p></div>
          <div className={styles.caseStack}>
            {CASES.map((item)=><article className={styles.case} key={item.client} data-p2-card>
              <div className={`${styles.caseVisual} ${item.className}`} data-p2-media><span>{item.client}</span><strong>{item.metrics[0][0]}</strong></div>
              <div className={styles.caseBody}><div className={styles.caseKicker}>{item.category}</div><h3>{item.headline}</h3><p>{item.copy}</p><div className={styles.metrics}>{item.metrics.map(([v,l])=><div className={styles.metric} key={l}><strong>{v}</strong><span>{l}</span></div>)}</div><div className={styles.heroActions}><Link href={item.href} className={styles.pill}>Explore the growth system ↗</Link></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>Selected portfolio</p><h2 data-p2-reveal>What the system<br/>looks like.</h2></div><p data-p2-reveal>Results tell you whether the work mattered. Portfolio shows the actual mix of media, commerce, creative, web and technology that gets connected behind those outcomes.</p></div>
          <div className={styles.visualHero} data-p2-media>
            <Image src="/portfolio/hero.png" alt="Growth Escalators selected portfolio montage" fill priority={false} sizes="(max-width: 900px) 100vw, 1320px" />
            <div className={styles.visualLabel}><span>Selected work / growth × technology</span><h2>Designed to move the business.</h2></div>
          </div>
          <div className={styles.tileGrid}>
            <article className={`${styles.tile} ${styles.violetTile}`} data-p2-card><p className={styles.eyebrow}>Performance × commerce</p><h3>Media that answers to revenue.</h3><p>Meta Ads, Google Ads, offers, product journeys and conversion decisions treated as one acquisition system.</p></article>
            <article className={`${styles.tile} ${styles.darkTile}`} data-p2-card><p className={styles.eyebrow}>Web × product</p><h3>Experiences built to convert.</h3><p>Shopify, Next.js, CRO and software work designed around the next action a real user needs to take.</p></article>
            <article className={styles.tile} data-p2-card><p className={styles.eyebrow}>Creative × social</p><h3>Ideas built for testing.</h3><p>Multiple statics, concepts, offers and content angles built to discover what earns attention and moves intent.</p></article>
            <article className={styles.tile} data-p2-card><p className={styles.eyebrow}>AI × automation</p><h3>Custom systems behind growth.</h3><p>GrowthBot, qualification, workflow automation and software that connect the website to the team behind it.</p></article>
          </div>
          <div className={styles.heroActions}><Link href="/portfolio" className={styles.pill}>Explore the full portfolio ↗</Link><Link href="/services" className={styles.pillLine}>See connected services</Link></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={styles.proofBand} data-p2-reveal><strong>187+ brands.<br/>One standard: outcomes.</strong><div><p>Across the wider body of work, Growth Escalators has managed ₹10Cr+ in ad spend with a 97% client retention rate. As we add deeper case studies, this page becomes the single place to understand both the outcome and the execution.</p><div className={styles.heroActions}><Link href="/services" className={styles.pill}>See services ↗</Link><Link href="/#book" className={styles.pillLine}>Get Free Audit</Link></div></div></div>
        </div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}
