import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import styles from '@/components/phase2/Phase2Core.module.css'

export const metadata = {
  title: 'Portfolio — Growth, Creative, Web & Technology Work',
  description: 'Explore Growth Escalators work across performance marketing, ecommerce, websites, creative and technology. 187+ brands scaled, ₹10Cr+ ad spend managed.',
  alternates: { canonical: '/portfolio' },
  openGraph: { title: 'Portfolio — Growth Escalators', description: 'Selected Growth Escalators work across growth, creative, web and technology.', url: '/portfolio', type: 'website' },
}

const PROCESS=[
  ['01','Find the constraint','Start with the business problem, not the channel checklist.'],
  ['02','Build the system','Connect acquisition, experience, creative and technology where it matters.'],
  ['03','Measure reality','Use commercial signals to decide what deserves more investment.'],
  ['04','Scale the winners','Increase velocity around the work that is actually moving the business.'],
] as const

export default function PortfolioPage(){
  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div><p className={styles.eyebrow} data-p2-hero>Growth Escalators portfolio</p><h1 data-p2-hero>Work, not<br/>wallpaper.</h1></div>
            <div className={styles.heroAside} data-p2-hero><p>Portfolio is the visual layer of the story: performance, commerce, creative and technology shown as connected work. For verified outcome-led case studies, head to Work.</p><div className={styles.heroActions}><Link href="/work" className={styles.pill}>See case studies ↗</Link><Link href="/#book" className={styles.pillLine}>Get Free Audit</Link></div></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.visualHero} data-p2-media>
            <Image src="/portfolio/hero.png" alt="Growth Escalators selected portfolio montage" fill priority sizes="(max-width: 900px) 100vw, 1320px" />
            <div className={styles.visualLabel}><span>Selected work / growth × technology</span><h2>Designed to move the business.</h2></div>
          </div>
          <div className={styles.tileGrid}>
            <article className={`${styles.tile} ${styles.violetTile}`} data-p2-card><p className={styles.eyebrow}>Performance × commerce</p><h3>Media that has to answer to revenue.</h3><p>Meta Ads, Google Ads, offers, product journeys and conversion decisions treated as one acquisition system.</p></article>
            <article className={`${styles.tile} ${styles.darkTile}`} data-p2-card><p className={styles.eyebrow}>Web × product</p><h3>Experiences built to convert.</h3><p>Shopify, Next.js, CRO and software work designed around the next action a real user needs to take.</p></article>
            <article className={styles.tile} data-p2-card><p className={styles.eyebrow}>Creative × social</p><h3>Ideas that earn attention.</h3><p>Campaign concepts, content systems and production that make performance media more useful instead of simply creating more assets.</p></article>
            <article className={styles.tile} data-p2-card><p className={styles.eyebrow}>AI × automation</p><h3>Less operational drag.</h3><p>GrowthBot, lead qualification, workflow automation and custom software that connect the website to the team behind it.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>How the work gets made</p><h2 data-p2-reveal>One operating<br/>rhythm.</h2></div><p data-p2-reveal>The visual output can change completely by brand. The decision-making system underneath stays disciplined.</p></div>
          <div className={styles.process}>{PROCESS.map(([n,t,d])=><div className={styles.processStep} key={n} data-p2-card><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`${styles.shell} ${styles.finalCta}`} data-p2-reveal><p className={styles.eyebrow}>Need the measurable version?</p><h2>See what the work changed.</h2><p>The Work page leads with verified business outcomes. Or start with a free audit if you want us to look at your current system.</p><div className={styles.heroActions}><Link href="/work" className={styles.pillLight}>Explore case studies ↗</Link><Link href="/#book" className={styles.pillLight}>Get Free Audit</Link></div></div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}
