import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import LeadForm from '@/components/landing/international/LeadForm'
import type { InternationalLandingContent } from '@/lib/content/international-landing/types'
import styles from './StaffingMarketPage.module.css'

function positioningNote(content: InternationalLandingContent) {
  if (content.market === 'US') {
    return 'This offer is offshore fulfilment from India for US staffing firms, MSPs, consultancies and delivery teams. It is not local US W-2 payroll, visa sponsorship or local on-site staffing.'
  }
  if (content.market === 'UAE') return 'India-based offshore technology capacity for UAE delivery teams, with role-by-role working-hour alignment confirmed before submission.'
  if (content.market === 'Australia') return 'India-based offshore technology capacity for Australian teams, with working-hour overlap agreed for the role before a profile is shared.'
  return 'India-based offshore technology capacity for UK teams, with working-hour overlap agreed for the role before a profile is shared.'
}

function FaqJsonLd({ content }: { content: InternationalLandingContent }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function StaffingMarketPage({ content }: { content: InternationalLandingContent }) {
  return (
    <>
      <FaqJsonLd content={content} />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>{content.hero.badge}</span>
                <h1>{content.hero.heading.lead}<em>{content.hero.heading.accent}</em></h1>
                <p>{content.hero.subhead}</p>
                <div className={styles.actions}>
                  <a href="#lead-form" className={styles.primary}>{content.hero.primaryCta.label} ↗</a>
                  <a href="#screening" className={styles.secondary}>See the screening system</a>
                </div>
                <div className={styles.positioning}>{positioningNote(content)}</div>
              </div>
              <aside className={styles.pipeline} aria-label="Requirement to shortlist process">
                <div className={styles.pipelineTop}><span>{content.hero.pipeline.cardBadge}</span><b>{content.market} × INDIA</b></div>
                <h2>{content.hero.pipeline.cardTitle}</h2>
                <div className={styles.pipelineSteps}>
                  {content.hero.pipeline.steps.map((step, index) => (
                    <div key={step.label}><b>0{index + 1}</b><strong>{step.label}</strong><span>{index === content.hero.pipeline.steps.length - 1 ? 'Client decision' : 'GE process'}</span></div>
                  ))}
                </div>
              </aside>
            </div>
            <div className={styles.trustRail}>
              {content.trustStrip.points.slice(0, 4).map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.pain.tag}</span><h2>{content.pain.headline}</h2></div><p>{content.pain.subhead}</p></div>
            <div className={styles.cards}>{content.pain.cards.map((item) => <article key={item.title}><span className={styles.eyebrow}>Constraint</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section id="skills" className={`${styles.section} ${styles.lavender}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.skills.tag}</span><h2>{content.skills.headline}</h2></div><p>{content.skills.footerNote ?? 'Share the JD even if the exact skill is not listed. We confirm feasibility before promising a shortlist.'}</p></div>
            <div className={styles.skillGrid}>{content.skills.categories.map((group) => <article key={group.title}><h3>{group.title}</h3><div className={styles.chips}>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="how-it-works" className={`${styles.section} ${styles.dark}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.process.tag}</span><h2>{content.process.headline}</h2></div><p>One requirement, one mandatory-skill scorecard, one accountable shortlist process.</p></div>
            <div className={styles.process}>{content.process.steps.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section id="screening" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.screening.tag}</span><h2>{content.screening.headline}</h2></div><p>{content.screening.subhead}</p></div>
            <div className={styles.screeningGrid}>
              <div className={styles.gates}>{content.screening.gates.map((gate, index) => <div key={gate}><b>{index + 1}</b><span>{gate}</span></div>)}</div>
              <aside className={styles.scorecard}><span className={styles.eyebrow}>Illustrative screening summary</span><h3>What reaches your inbox</h3>{content.screening.summary.map((row) => <div className={styles.scoreRow} key={row.label}><span>{row.label}</span><strong>{row.value}</strong></div>)}</aside>
            </div>
          </div>
        </section>

        <section id="engagement-models" className={`${styles.section} ${styles.dark}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.engagementModels.tag}</span><h2>{content.engagementModels.headline}</h2></div><p>Start with the capacity you need now. Expand only when the delivery requirement justifies it.</p></div>
            <div className={styles.models}>{content.engagementModels.models.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.cream}`}>
          <div className={styles.shell}>
            <div className={styles.head}><div><span className={styles.eyebrow}>{content.proof.tag}</span><h2>{content.proof.headline}</h2></div><p>{content.proof.subhead}</p></div>
            <div className={styles.cards}>{content.proof.items.map((item, index) => <article key={item}><span className={styles.eyebrow}>0{index + 1}</span><h3>{index === 0 ? 'Scorecard' : index === 1 ? 'Availability' : index === 2 ? 'Ownership' : 'Clear terms'}</h3><p>{item}</p></article>)}</div>
          </div>
        </section>

        <section id="faqs" className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.faqGrid}>
              <div><span className={styles.eyebrow}>{content.faqs.tag}</span><h2>{content.faqs.headline}</h2></div>
              <div className={styles.faqs}>{content.faqs.faqs.map((item, index) => <details key={item.q} open={index === 0}><summary><span>0{index + 1}</span><strong>{item.q}</strong><b>+</b></summary><p>{item.a}</p></details>)}</div>
            </div>
          </div>
        </section>

        <div className={styles.formWrap}>
          <LeadForm content={content.leadForm} market={content.market} eventPrefix={content.eventPrefix} leadSourceLabel={content.leadSourceLabel} supportEmail="jatin@growthescalators.com" />
        </div>
        <div className={styles.disclosure}>{content.disclosure.text}</div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
