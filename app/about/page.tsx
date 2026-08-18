import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import styles from '@/components/phase2/Phase2Core.module.css'

const VALUES=[
  ['01','Commercial clarity over channel theatre'],
  ['02','Human judgement, amplified by technology'],
  ['03','Ownership close to the work'],
  ['04','Proof before promises'],
] as const

export default function AboutPage(){
  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div><p className={styles.eyebrow} data-p2-hero>About Growth Escalators</p><h1 data-p2-hero>Human-led.<br/>Built to move.</h1></div>
            <div className={styles.heroAside} data-p2-hero><p>Growth Escalators is a Jaipur-based growth company connecting performance marketing, creative, technology and execution capacity around measurable commercial outcomes.</p><div className={styles.heroActions}><Link href="/work" className={styles.pill}>See our work ↗</Link><Link href="/contact" className={styles.pillLine}>Talk to us</Link></div></div>
          </div>
          <div className={styles.heroRule}>{[['187+','brands scaled'],['97%','client retention'],['₹10Cr+','ad spend managed'],['Jaipur','India']].map(([v,l])=><div className={styles.heroStat} key={l} data-p2-hero><strong>{v}</strong><span>{l}</span></div>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.peopleGrid}>
            <div className={styles.peopleCopy}><p className={styles.eyebrow} data-p2-reveal>The company</p><h2 data-p2-reveal>Close to the<br/>work. Close to<br/>the outcome.</h2><p data-p2-reveal>Growth Escalators was built around a simple operating idea: strategy should not disappear into a presentation and execution should not disappear into separate queues. The people making the media, creative, website and technology decisions should understand the same business objective.</p><div className={styles.valueList}>{VALUES.map(([n,t])=><div className={styles.value} key={n} data-p2-card><span>{n}</span><strong>{t}</strong></div>)}</div></div>
            <div className={styles.peopleMedia} data-p2-media><div className={styles.peopleMain}><Image src="/photos/photo-1.png" alt="Growth Escalators team in Jaipur" fill sizes="(max-width:900px) 100vw,58vw" /></div><div className={styles.peopleInset}><Image src="/photos/photo-2.jpeg" alt="Growth Escalators team at work" fill sizes="(max-width:900px) 40vw,20vw" /></div></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>Leadership</p><h2 data-p2-reveal>Founder-led.<br/>Operator-minded.</h2></div><p data-p2-reveal>Jatin Agrawal leads Growth Escalators from Jaipur. The wider team spans performance, design, content, SEO, technology and delivery — with specialist ownership close to the work instead of a layer-heavy agency model.</p></div>
          <div className={styles.proofBand} data-p2-reveal><strong>Jatin Agrawal<br/>Founder</strong><div><p>Growth Escalators also has a disclosed sister-brand relationship with WizMatch, the technology staffing business founded by Jatin. The brands serve different buyer needs while sharing an operator-led approach to delivery.</p><div className={styles.heroActions}><Link href="/staffing" className={styles.pillLine}>Explore technology staffing</Link><Link href="/contact" className={styles.pill}>Talk to the team ↗</Link></div></div></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`${styles.shell} ${styles.finalCta}`} data-p2-reveal><p className={styles.eyebrow}>The work is the culture test.</p><h2>See what accountability looks like in-market.</h2><p>Explore selected client outcomes, or bring us the constraint you are trying to solve.</p><div className={styles.heroActions}><Link href="/work" className={styles.pillLight}>See the work ↗</Link><Link href="/#book" className={styles.pillLight}>Get Free Audit</Link></div></div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}
