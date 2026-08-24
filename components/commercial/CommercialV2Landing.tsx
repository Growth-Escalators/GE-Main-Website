import type { LandingContent } from '@/components/landing/IndustryLandingPage'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import LeadForm, { type LeadFormVariant } from '@/components/landing/LeadForm'
import styles from './CommercialV2Landing.module.css'

export type CommercialStage = {
  label: string
  title: string
  detail: string
  metric?: string
}

export type CommercialDecision = {
  if: string
  but: string
  then: string
}

export type CommercialStrategy = {
  eyebrow: string
  systemLabel: string
  systemTitle: string
  systemIntro: string
  stages: CommercialStage[]
  decisions: CommercialDecision[]
  capabilityTitle?: string
  capabilityIntro?: string
  proofTitle?: string
  formVariant?: LeadFormVariant
  businessVertical?: string
  service?: string
  sectionOrder?: Array<'diagnosis' | 'system' | 'method' | 'decisions' | 'proof' | 'capabilities' | 'ai' | 'form' | 'faq' | 'resources'>
}

const METHOD = [
  { label: '01', title: 'Define', detail: 'Set the commercial objective and the constraint worth solving.' },
  { label: '02', title: 'Measure', detail: 'Establish the baseline using the metrics that reflect the real business outcome.' },
  { label: '03', title: 'Analyze', detail: 'Find the highest-impact reason performance is breaking.' },
  { label: '04', title: 'Improve', detail: 'Fix the constraint with the smallest set of changes capable of moving the economics.' },
  { label: '05', title: 'Control', detail: 'Protect the improvement so performance does not disappear when volume or conditions change.' },
  { label: '06', title: 'Scale', detail: 'Growth Escalators extension: increase volume only after the improvement is proven and controlled.' },
]

function FaqJsonLd({ faqs }: { faqs: LandingContent['faqs'] }) {
  if (!faqs.length) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <header className={styles.sectionHeader}>
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </header>
  )
}

export default function CommercialV2Landing({ content, strategy }: { content: LandingContent; strategy: CommercialStrategy }) {
  const order = strategy.sectionOrder ?? ['diagnosis', 'system', 'method', 'decisions', 'proof', 'capabilities', 'ai', 'form', 'faq', 'resources']
  const result = content.resultHighlight

  const renderSection = (section: CommercialStrategy['sectionOrder'][number]) => {
    if (section === 'diagnosis') {
      return (
        <section className={styles.lightSection} aria-labelledby="commercial-diagnosis" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow="DIAGNOSE" title={content.painPointsHeadline ?? 'Where profitable growth breaks'} copy="The first job is to identify the constraint. More traffic or more services are not automatically the answer." />
            <div className={styles.diagnosticGrid}>
              {content.painPoints.map((item, index) => (
                <article className={index === 0 ? styles.diagnosticPrimary : styles.diagnosticCard} key={item.title}>
                  <div className={styles.cardIndex}>0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className={styles.cardSignal}>WE INVESTIGATE</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'system') {
      return (
        <section className={styles.systemSection} aria-labelledby="commercial-system" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow={strategy.systemLabel} title={strategy.systemTitle} copy={strategy.systemIntro} />
            <div className={styles.stageGrid}>
              {strategy.stages.map((stage, index) => (
                <article key={`${stage.label}-${stage.title}`}>
                  <div className={styles.stageTop}><span>{stage.label}</span>{index < strategy.stages.length - 1 ? <b aria-hidden>→</b> : null}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                  {stage.metric ? <small>{stage.metric}</small> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'method') {
      return (
        <section className={styles.methodSection} aria-labelledby="commercial-method" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow="OPERATING METHOD" title="Define. Measure. Analyze. Improve. Control. Then scale." copy="Define–Control is the standard five-phase DMAIC core. Growth Escalators adds a sixth commercial phase — Scale — so volume increases only after the improvement is proven and controlled." />
            <div className={styles.methodGrid}>
              {METHOD.map((step, index) => (
                <article className={index === METHOD.length - 1 ? styles.scaleStep : undefined} key={step.title}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                  <small>{index === METHOD.length - 1 ? 'GE COMMERCIAL EXTENSION' : 'DMAIC CORE'}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'decisions') {
      return (
        <section className={styles.lightSection} aria-labelledby="commercial-decisions" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow="COMMERCIAL DECISION LOGIC" title="The lever depends on the constraint." copy="These are examples of how the same diagnostic method changes the intervention. The goal is not to sell every service; it is to fix the part of the system that is limiting the outcome." />
            <div className={styles.decisionGrid}>
              {strategy.decisions.map((decision, index) => (
                <article key={`${decision.if}-${decision.but}`}>
                  <span className={styles.decisionIndex}>0{index + 1}</span>
                  <div><small>IF</small><strong>{decision.if}</strong></div>
                  <div><small>BUT</small><strong>{decision.but}</strong></div>
                  <div className={styles.thenCell}><small>THEN</small><strong>{decision.then}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'proof') {
      return (
        <section id="results" className={styles.proofSection} aria-labelledby="commercial-proof" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow={content.resultsTag ?? 'PROVE'} title={strategy.proofTitle ?? content.resultsHeadline ?? 'Proof before promises'} />
            <div className={styles.proofGrid}>
              <div className={styles.proofBefore}>
                <span>CONTEXT</span>
                <h3>{result.name}</h3>
                <p>{result.detail}</p>
              </div>
              <div className={styles.proofChange}>
                <span>WHAT THE EVIDENCE SHOWS</span>
                <blockquote>{result.quote}</blockquote>
              </div>
              <div className={styles.proofAfter}>
                <span>OUTCOME</span>
                <div className={styles.metricList}>
                  {result.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><small>{metric.label}</small></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    if (section === 'capabilities') {
      return (
        <section className={styles.lightSection} aria-labelledby="commercial-capabilities" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow="CAPABILITIES" title={strategy.capabilityTitle ?? 'We deploy the capability the economics require.'} copy={strategy.capabilityIntro ?? content.servicesSubhead ?? 'The work is selected around the constraint rather than a fixed package.'} />
            <div className={styles.capabilityGrid}>
              {content.services.map((service, index) => (
                <article key={service.title}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'ai' && content.aiAdvantage) {
      return (
        <section className={styles.systemSection} aria-labelledby="commercial-ai" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow={content.aiAdvantage.tag} title={content.aiAdvantage.headline} copy={content.aiAdvantage.subhead} />
            <div className={styles.semanticGrid}>
              {content.aiAdvantage.cards.map((card, index) => (
                <article key={card.title}><span>0{index + 1}</span><h3>{card.title}</h3><p>{card.body}</p></article>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'form') {
      return (
        <div className={styles.formWrap} key={section}>
          <LeadForm
            recipient={content.leadForm.recipient}
            subjectPrefix={content.leadForm.subjectPrefix}
            headline={content.leadForm.headline}
            subhead={content.leadForm.subhead}
            tag={content.leadForm.tag}
            variant={strategy.formVariant}
            businessVertical={strategy.businessVertical}
            service={strategy.service}
          />
        </div>
      )
    }

    if (section === 'faq') {
      return (
        <section className={styles.faqSection} aria-labelledby="commercial-faq" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow={content.faqsTag ?? 'FAQ'} title={content.faqsHeadline ?? 'Questions buyers ask before choosing a partner'} />
            <div className={styles.faqList}>
              {content.faqs.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary><span>{item.q}</span><b aria-hidden>+</b></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )
    }

    if (section === 'resources' && content.relatedResources?.links.length) {
      return (
        <section className={styles.resourceSection} aria-labelledby="commercial-resources" key={section}>
          <div className={styles.shell}>
            <SectionHeading eyebrow={content.relatedResources.tag ?? 'TOPIC CLUSTER'} title={content.relatedResources.headline ?? 'Related resources'} copy={content.relatedResources.subhead} />
            <div className={styles.resourceGrid}>
              {content.relatedResources.links.map((resource, index) => (
                <a className={index < 2 ? styles.resourceFeature : styles.resourceCard} href={resource.href} key={resource.href}>
                  <span>{index < 2 ? 'CATEGORY / CORE' : 'TACTICAL RESOURCE'}</span>
                  <h3>{resource.label}</h3>
                  {resource.blurb ? <p>{resource.blurb}</p> : null}
                  <b aria-hidden>↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>
      )
    }

    return null
  }

  return (
    <div className={styles.page}>
      <FaqJsonLd faqs={content.faqs} />
      <Navbar />
      <main>
        <section className={styles.hero} aria-labelledby="commercial-hero-title">
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow}>{strategy.eyebrow}</span>
                <h1 id="commercial-hero-title">{content.hero.headlineLines[0]}<br />{content.hero.headlineLines[1]}</h1>
              </div>
              <div className={styles.heroAside}>
                <p>{content.hero.subhead}</p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}<span aria-hidden>↗</span></a>
                  <a className={styles.secondaryButton} href={content.hero.secondaryCta.href}>{content.hero.secondaryCta.label}</a>
                </div>
              </div>
            </div>
            <div className={styles.proofStrip} aria-label="Commercial proof summary">
              {content.hero.statPills.map((pill) => <div key={pill.label}><strong>{pill.value}</strong><span>{pill.label}</span></div>)}
            </div>
          </div>
        </section>

        {order.map((section) => renderSection(section))}

        <section className={styles.finalCta} aria-label="Final call to action">
          <div className={styles.shell}>
            <span className={styles.eyebrow}>NEXT STEP</span>
            <h2>{content.finalCta.title}</h2>
            <p>{content.finalCta.subhead}</p>
            <a className={styles.primaryButton} href="#lead-form">{content.finalCta.ctaLabel}<span aria-hidden>↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
