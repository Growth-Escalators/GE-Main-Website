import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import LeadForm from '@/components/landing/LeadForm'
import LeadMagnetCalculator from '@/components/landing/LeadMagnetCalculator'
import { D2C_CONTENT } from './_data/content'
import styles from './D2CExperience.module.css'

const diagnostics = [
  {
    id: '01',
    title: 'ROAS plateaued or declining',
    eyebrow: 'Acquisition economics',
    body: "You're already spending real money on ads — it is just not producing the returns it used to. Scaling further only makes it worse.",
    signal: ['Spend ↑', 'Revenue ↔', 'Marginal ROAS ↓'],
    metrics: 'CAC · NC-CAC · MER',
    icon: 'trend',
  },
  {
    id: '02',
    title: 'Creative fatigue',
    eyebrow: 'Creative system',
    body: 'The same 4–5 ad concepts have been running for months. CPMs rise, CTR decays, and nothing new enters the testing pipeline fast enough.',
    signal: ['CTR ↓', 'CPM ↑', 'Frequency ↑'],
    metrics: 'Hooks · Angles · Fatigue',
    icon: 'spark',
  },
  {
    id: '03',
    title: 'Account structure leaking spend',
    eyebrow: 'Account architecture',
    body: "Dead audiences, unclear budget allocation between cold and retargeting, and weak attribution make it hard to tell what is actually working.",
    signal: ['Overlap', 'Poor pacing', 'Weak attribution'],
    metrics: 'Structure · Attribution · Pacing',
    icon: 'nodes',
  },
  {
    id: '04',
    title: 'Scaling breaks the unit economics',
    eyebrow: 'Profitability',
    body: 'Every time budget increases, ROAS drops faster than revenue grows. The account was not built to scale profitably in the first place.',
    signal: ['Revenue ↑', 'Margin ↓', 'CAC payback ↑'],
    metrics: 'Margin · AOV · LTV',
    icon: 'gauge',
  },
] as const

const revenueStages = [
  { id: '01', title: 'Acquire', goal: 'Acquire the right customers at sustainable economics.', metric: 'CAC / NC-CAC' },
  { id: '02', title: 'Convert', goal: 'Turn more qualified traffic into customers.', metric: 'CVR / PDP CVR' },
  { id: '03', title: 'Monetize', goal: 'Increase the economic value created by each order.', metric: 'AOV / Margin' },
  { id: '04', title: 'Retain', goal: 'Create more repeat revenue from customers already earned.', metric: 'Repeat / LTV' },
  { id: '05', title: 'Scale', goal: 'Increase volume without breaking the economics.', metric: 'MER / Profit' },
] as const

const operatingMethod = [
  { id: '01', title: 'Define', copy: 'Set the commercial objective.' },
  { id: '02', title: 'Measure', copy: 'Establish the baseline.' },
  { id: '03', title: 'Analyze', copy: 'Find the highest-impact constraint.' },
  { id: '04', title: 'Improve', copy: 'Fix the highest-leverage issue.' },
  { id: '05', title: 'Control', copy: 'Protect the improvement.' },
  { id: '06', title: 'Scale', copy: 'Expand what has been proven.' },
] as const

const decisions = [
  { if: 'Traffic quality is healthy', but: 'Conversion is weak', then: 'Fix CRO before increasing acquisition spend.' },
  { if: 'CAC is healthy', but: 'Repeat purchase is weak', then: 'Fix retention before pushing harder.' },
  { if: 'Platform ROAS looks healthy', but: 'Contribution margin is weak', then: 'Fix unit economics before scaling.' },
] as const

const capabilityMeta = [
  { label: 'Paid acquisition', metric: 'Meta + Google' },
  { label: 'Creative system', metric: 'Hooks + angles + cadence' },
  { label: 'Conversion', metric: 'PDP + landing pages + checkout' },
  { label: 'Attribution', metric: 'Platform vs order data' },
  { label: 'Catalog', metric: 'Feeds + inventory + merchandising' },
  { label: 'Channel sequencing', metric: 'Scale only what is ready' },
] as const

function Icon({ type }: { type: string }) {
  if (type === 'trend') {
    return <svg viewBox="0 0 48 48" aria-hidden><path d="M8 13h32M8 35h32M10 29l9-8 8 5 11-12" /><path d="M33 14h5v5" /></svg>
  }
  if (type === 'spark') {
    return <svg viewBox="0 0 48 48" aria-hidden><path d="M24 6l3.6 11.4L39 21l-11.4 3.6L24 36l-3.6-11.4L9 21l11.4-3.6L24 6Z" /><path d="M38 31l1.7 5.3L45 38l-5.3 1.7L38 45l-1.7-5.3L31 38l5.3-1.7L38 31Z" /></svg>
  }
  if (type === 'nodes') {
    return <svg viewBox="0 0 48 48" aria-hidden><circle cx="12" cy="14" r="5" /><circle cx="36" cy="12" r="5" /><circle cx="24" cy="36" r="5" /><path d="M16 17l5 13M32 16l-5 15M17 14h14" /></svg>
  }
  return <svg viewBox="0 0 48 48" aria-hidden><path d="M8 31a16 16 0 0 1 32 0" /><path d="M24 31l9-9" /><circle cx="24" cy="31" r="3" /><path d="M12 31h2M34 31h2M16 21l1.5 1.5M30.5 22.5L32 21M24 15v2" /></svg>
}

export default function D2CExperience() {
  const faqs = D2C_CONTENT.faqs
  const resources = D2C_CONTENT.relatedResources?.links ?? []

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Growth Escalators', item: 'https://www.growthescalators.com/' },
      { '@type': 'ListItem', position: 2, name: 'D2C Performance Marketing', item: 'https://www.growthescalators.com/d2c' },
    ],
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <main>
        <section className={styles.hero} aria-labelledby="d2c-hero-title">
          <div className={styles.heroGlow} aria-hidden />
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>₹10CR+ AD SPEND MANAGED · 97% CLIENT RETENTION</p>
                <h1 id="d2c-hero-title">Higher ROAS.<br />Scaled Profitably.</h1>
                <p className={styles.heroBody}>
                  We help D2C and ecommerce brands identify what is actually limiting profitable growth — acquisition, creative,
                  conversion, monetization or retention — then fix the constraint before scaling spend.
                </p>
                <div className={styles.heroActions}>
                  <a href="#lead-form" className={styles.primaryButton}>Get My D2C Growth Audit <span>↗</span></a>
                  <a href="#case-study" className={styles.secondaryButton}>See a real D2C rebuild ↓</a>
                </div>
              </div>

              <aside className={styles.heroPanel} aria-label="Featured D2C result">
                <div className={styles.panelTopline}>
                  <span>RECENT D2C REBUILD</span>
                  <span className={styles.liveDot}>LIVE</span>
                </div>
                <div className={styles.panelBrand}>Paraiso</div>
                <p className={styles.panelType}>Fashion D2C · Comfort Wear</p>
                <div className={styles.roasVisual}>
                  <div>
                    <span>Before</span>
                    <strong>1.9×</strong>
                  </div>
                  <div className={styles.roasTrack} aria-hidden><span /></div>
                  <div>
                    <span>After</span>
                    <strong>3.2×</strong>
                  </div>
                </div>
                <div className={styles.heroPanelMetrics}>
                  <div><strong>6×</strong><span>Revenue growth</span></div>
                  <div><strong>60</strong><span>Days to new run-rate</span></div>
                </div>
                <p className={styles.panelNote}>Account structure + creative testing + CRO + scaling discipline.</p>
              </aside>
            </div>

            <div className={styles.proofStrip} aria-label="D2C performance proof">
              <div><strong>10,000+</strong><span>Campaigns run</span><small>Across Meta + Google</small></div>
              <div><strong>₹10Cr+</strong><span>Ad spend managed</span><small>D2C & ecommerce</small></div>
              <div><strong>97%</strong><span>Client retention</span><small>Long-term engagements</small></div>
              <div><strong>Full funnel</strong><span>Not media buying alone</span><small>Ads + Creative + CRO + Attribution</small></div>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="leak-map-heading">
          <div className={styles.shell}>
            <header className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>D2C GROWTH DIAGNOSTIC / 01</p>
                <h2 id="leak-map-heading">Where profitable D2C growth usually breaks.</h2>
              </div>
              <p>Most plateaued brands do not have one “ads problem.” One constraint is usually dragging down the economics of the entire system.</p>
            </header>

            <div className={styles.diagnosticGrid}>
              {diagnostics.map((item, index) => (
                <article className={`${styles.diagnosticCard} ${index === 0 ? styles.diagnosticPrimary : ''}`} key={item.id}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}><Icon type={item.icon} /></div>
                    <span className={styles.cardNumber}>{item.id}</span>
                  </div>
                  <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p className={styles.cardBody}>{item.body}</p>
                  <div className={styles.signalRow}>
                    {item.signal.map((signal) => <span key={signal}>{signal}</span>)}
                  </div>
                  <div className={styles.checkRow}><span>WE CHECK</span><strong>{item.metrics}</strong></div>
                </article>
              ))}
            </div>

            <div className={styles.aiCallout}>
              <div>
                <span>WHY THIS ISN’T JUST MEDIA BUYING</span>
                <strong>Meta’s AI can optimise delivery. It cannot repair the system around the ads.</strong>
              </div>
              <p>{D2C_CONTENT.aiAdvantage?.subhead}</p>
            </div>
          </div>
        </section>

        <section className={styles.transitionBand} aria-label="Methodology transition">
          <div className={styles.shell}>
            <p>The question is not “Which channel should we spend more on?”</p>
            <h2>It is which constraint should we fix first.</h2>
          </div>
        </section>

        <section className={`${styles.section} ${styles.systemSection}`} aria-labelledby="revenue-system-heading">
          <div className={styles.shell}>
            <header className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>OUR D2C REVENUE SYSTEM / 02</p>
                <h2 id="revenue-system-heading">Growth is one connected economic system.</h2>
              </div>
              <p>Meta Ads, Google Ads, CRO, Shopify, creative, email and automation are tools. The strategy is deciding which part of the revenue system needs attention first.</p>
            </header>

            <div className={styles.revenueSystem}>
              <div className={styles.stageGrid}>
                {revenueStages.map((stage, index) => (
                  <article key={stage.title} className={styles.stageCard}>
                    <div className={styles.stageTop}><span>{stage.id}</span>{index < revenueStages.length - 1 && <b aria-hidden>→</b>}</div>
                    <h3>{stage.title}</h3>
                    <p>{stage.goal}</p>
                    <small>{stage.metric}</small>
                  </article>
                ))}
              </div>
              <div className={styles.economicsRail}>
                <div><span>MEASUREMENT & UNIT ECONOMICS</span><strong>Runs across every stage.</strong></div>
                <p>CAC · CVR · AOV · Contribution Margin · Repeat Purchase · LTV · Profitability</p>
              </div>
            </div>

            <div className={styles.methodGridWrap}>
              <div className={styles.methodIntro}>
                <p className={styles.kicker}>SIX SIGMA-INSPIRED OPERATING METHOD</p>
                <h3>Diagnose. Improve. Control. Then scale.</h3>
                <p>Define–Control is the standard five-phase DMAIC core. Growth Escalators adds a sixth commercial phase — Scale — so volume increases only after the improvement is proven and controlled.</p>
              </div>
              <div className={styles.methodGrid}>
                {operatingMethod.map((step, index) => (
                  <div className={`${styles.methodStep} ${index === 5 ? styles.methodScale : ''}`} key={step.title}>
                    <span>{step.id}</span><strong>{step.title}</strong><p>{step.copy}</p><small>{index === 5 ? 'GE EXTENSION' : 'DMAIC CORE'}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.decisionMatrix}>
              <div className={styles.decisionIntro}><span>COMMERCIAL DECISIONS</span><h3>More spend is not always the answer.</h3></div>
              {decisions.map((decision) => (
                <article key={decision.but}>
                  <div><span>IF</span><strong>{decision.if}</strong></div>
                  <div><span>BUT</span><strong>{decision.but}</strong></div>
                  <div><span>THEN</span><strong>{decision.then}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-study" className={`${styles.section} ${styles.caseSection}`} aria-labelledby="case-study-heading">
          <div className={styles.shell}>
            <div className={styles.caseHeader}>
              <div>
                <p className={styles.kicker}>REAL D2C REBUILD / 03</p>
                <h2 id="case-study-heading">Paraiso</h2>
                <p>Fashion D2C · Comfort Wear</p>
              </div>
              <blockquote>{D2C_CONTENT.resultHighlight.quote}</blockquote>
            </div>

            <div className={styles.caseGrid}>
              <article className={styles.caseBefore}>
                <span>BEFORE</span>
                <strong>1.9× ROAS</strong>
                <ul>
                  <li>Revenue plateaued</li>
                  <li>Creative fatigue</li>
                  <li>Scaling attempts reduced efficiency</li>
                </ul>
              </article>

              <article className={styles.caseIntervention}>
                <span>WHAT CHANGED</span>
                <div className={styles.interventionList}>
                  <b>Creative system</b><b>Account architecture</b><b>Shopify CRO</b><b>Scaling rules</b>
                </div>
                <p>We rebuilt the system around the bottleneck instead of simply increasing media spend.</p>
              </article>

              <article className={styles.caseAfter}>
                <span>AFTER</span>
                <div className={styles.afterMetrics}>
                  {D2C_CONTENT.resultHighlight.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><small>{metric.label}</small></div>)}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="capabilities-heading">
          <div className={styles.shell}>
            <header className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>WHAT WE CHANGE / 04</p>
                <h2 id="capabilities-heading">The lever depends on the constraint.</h2>
              </div>
              <p>We do not sell every capability automatically. We deploy the channel, creative, CRO and data levers that the economics say need fixing.</p>
            </header>

            <div className={styles.capabilityGrid}>
              {D2C_CONTENT.services.map((service, index) => (
                <article key={service.title}>
                  <div className={styles.capabilityMeta}><span>{String(index + 1).padStart(2, '0')}</span><small>{capabilityMeta[index]?.label}</small></div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <div className={styles.capabilityFooter}>{capabilityMeta[index]?.metric}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.processSection}`} aria-labelledby="process-heading">
          <div className={styles.shell}>
            <header className={styles.compactHeader}>
              <p className={styles.kicker}>ENGAGEMENT MODEL / 05</p>
              <h2 id="process-heading">Diagnose → Fix → Prove → Scale</h2>
            </header>
            <div className={styles.processGrid}>
              {D2C_CONTENT.process.map((step) => <article key={step.step}><span>{step.step}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
            </div>

            <div className={styles.principleStrip}>
              {D2C_CONTENT.whyUs.map((item, index) => <div key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><p>{item.body}</p></div>)}
            </div>
          </div>
        </section>

        {D2C_CONTENT.leadMagnet && <div className={styles.embeddedCalculator}><LeadMagnetCalculator config={D2C_CONTENT.leadMagnet} /></div>}

        <div className={styles.embeddedForm}>
          <LeadForm
            recipient={D2C_CONTENT.leadForm.recipient}
            subjectPrefix={D2C_CONTENT.leadForm.subjectPrefix}
            headline={D2C_CONTENT.leadForm.headline}
            subhead={D2C_CONTENT.leadForm.subhead}
            tag={D2C_CONTENT.leadForm.tag}
            variant="d2c"
            businessVertical="d2c"
          />
        </div>

        <section className={styles.section} aria-labelledby="faq-heading">
          <div className={styles.shell}>
            <header className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>QUESTIONS, ANSWERED / 06</p>
                <h2 id="faq-heading">Frequently asked</h2>
              </div>
              <p>Detailed answers for D2C founders and growth teams evaluating performance marketing, catalog ads, attribution, CRO and scaling economics.</p>
            </header>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary><span>{faq.q}</span><b aria-hidden>+</b></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {resources.length > 0 && (
          <section className={`${styles.section} ${styles.librarySection}`} aria-labelledby="library-heading">
            <div className={styles.shell}>
              <header className={styles.sectionHeader}>
                <div>
                  <p className={styles.kicker}>D2C GROWTH LIBRARY / 07</p>
                  <h2 id="library-heading">Go deeper by category and growth problem.</h2>
                </div>
                <p>Category pages and practical playbooks on acquisition, creative, unit economics, channel sequencing and ecommerce advertising.</p>
              </header>

              <div className={styles.libraryGrid}>
                {resources.map((resource, index) => (
                  <Link href={resource.href} className={`${styles.resourceCard} ${index < 2 ? styles.resourceFeature : ''}`} key={resource.href}>
                    <span>{index < 2 ? 'CATEGORY PLAYBOOK' : index === 4 ? 'ECONOMICS' : index === 5 ? 'CREATIVE' : 'D2C PLAYBOOK'}</span>
                    <h3>{resource.label}</h3>
                    {resource.blurb && <p>{resource.blurb}</p>}
                    <b aria-hidden>↗</b>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.finalCta} aria-labelledby="final-cta-heading">
          <div className={styles.shell}>
            <p className={styles.kicker}>READY WHEN THE NUMBERS ARE</p>
            <h2 id="final-cta-heading">You probably do not need more channels.<br />You need to know what is limiting growth.</h2>
            <p>{D2C_CONTENT.finalCta.subhead}</p>
            <div className={styles.finalActions}>
              <a href="#lead-form" className={styles.lightButton}>Get My Free D2C Growth Audit <span>↗</span></a>
              <a href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20a%20D2C%20growth%20audit." target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>WhatsApp us</a>
            </div>
            <div className={styles.finalProof}><span>₹10Cr+ managed</span><span>10,000+ campaigns</span><span>97% client retention</span></div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />

      <div className={styles.mobileSticky} aria-label="D2C growth actions">
        <a href="#lead-form">Get Free Audit</a>
        <a href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20a%20D2C%20growth%20audit." target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>
  )
}
