'use client'

import { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import VideoTestimonialsShorts, { type VideoTestimonial } from '@/components/landing/VideoTestimonialsShorts'
import LeadForm from '@/components/landing/LeadForm'
import LeadMagnetCalculator, { type CalculatorConfig } from '@/components/landing/LeadMagnetCalculator'
import styles from './IndustryLandingPage.module.css'

export type LandingContent = {
  hero: {
    badge: string
    headlineLines: [string, string]
    cyclingWords: string[]
    subhead: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    statPills: { emoji: string; value: string; label: string }[]
    variant?: 'default' | 'bold'
    image?: { src: string; alt: string }
  }
  painPoints: { emoji: string; title: string; body: string }[]
  painPointsTag?: string
  painPointsHeadline?: string
  showcase?: {
    tag?: string
    headline?: string
    subhead?: string
    images: { src: string; alt: string; caption?: string }[]
  }
  aiAdvantage?: {
    tag: string
    headline: string
    subhead?: string
    cards: { emoji: string; title: string; body: string }[]
  }
  services: { title: string; body: string }[]
  servicesTag?: string
  servicesHeadline?: string
  servicesSubhead?: string
  builds?: {
    tag?: string
    headline?: string
    subhead?: string
    items: { name: string; what: string; stack: string; href?: string }[]
  }
  resultHighlight: {
    label?: string
    name: string
    detail: string
    quote: string
    metrics: { value: string; label: string }[]
  }
  resultsTag?: string
  resultsHeadline?: string
  process: { step: string; title: string; body: string }[]
  processTag?: string
  processHeadline?: string
  whyUs: { title: string; body: string }[]
  whyUsTag?: string
  whyUsHeadline?: string
  faqs: { q: string; a: string }[]
  faqsTag?: string
  faqsHeadline?: string
  finalCta: { title: string; subhead: string; ctaLabel: string }
  videoTestimonials: VideoTestimonial[]
  videoTestimonialsTag?: string
  videoTestimonialsHeadline?: string
  videoTestimonialsSubhead?: string
  leadForm: {
    recipient?: string
    subjectPrefix?: string
    headline?: string
    subhead?: string
    tag?: string
  }
  leadMagnet?: CalculatorConfig
  industryLabel?: string
  bookingUrl?: string
  relatedResources?: {
    tag?: string
    headline?: string
    subhead?: string
    links: { label: string; href: string; blurb?: string }[]
  }
}

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.52 },
}

function useCyclingWord(words: string[], intervalMs = 2400) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (words.length <= 1) return
    const timer = setInterval(() => setIdx((value) => (value + 1) % words.length), intervalMs)
    return () => clearInterval(timer)
  }, [words, intervalMs])
  return words[idx] ?? ''
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button type="button" className={styles.faqHead} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
        <span>{q}</span><span className={styles.faqIcon} aria-hidden>+</span>
      </button>
      <div id={panelId} className={styles.faqBody} hidden={!open}>{a}</div>
    </div>
  )
}

function FaqPageJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function SectionHeading({ tag, title, subhead }: { tag: string; title: string; subhead?: string }) {
  return (
    <div className={styles.sectionHeader}>
      <span className="section-tag">{tag}</span>
      <h2 className={styles.sectionHeadline}>{title}</h2>
      {subhead && <p className={styles.sectionSub}>{subhead}</p>}
    </div>
  )
}

export default function IndustryLandingPage({ content }: { content: LandingContent }) {
  const cycle = useCyclingWord(content.hero.cyclingWords)
  const bookHref = content.bookingUrl ?? '#lead-form'
  const extProps = (href: string) => href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' as const } : {}

  return (
    <div className={styles.page}>
      <FaqPageJsonLd faqs={content.faqs} />
      <Navbar />
      <main>
        <section className={`${styles.hero} ${content.hero.variant === 'bold' ? styles.heroBold : ''}`} aria-label="Hero">
          <div className={styles.heroAurora} aria-hidden><div className={styles.heroOrb1} /><div className={styles.heroOrb2} /><div className={styles.heroOrb3} /></div>
          <div className={`${styles.heroInner} container-x`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroMain}>
                <motion.span className={styles.heroBadge} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
                  {content.hero.badge}
                </motion.span>
                <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .04 }}>
                  {content.hero.headlineLines[0]}<br />{content.hero.headlineLines[1]}
                </motion.h1>
              </div>
              <motion.div className={styles.heroAside} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .14 }}>
                <motion.div className={styles.heroCycle} key={cycle} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>{cycle}</motion.div>
                <p className={styles.heroSub}>{content.hero.subhead}</p>
                <div className={styles.heroCtas}>
                  <a href={content.hero.primaryCta.href} {...extProps(content.hero.primaryCta.href)} className="btn-primary">{content.hero.primaryCta.label}</a>
                  <a href={content.hero.secondaryCta.href} {...extProps(content.hero.secondaryCta.href)} className="btn-outline">{content.hero.secondaryCta.label}</a>
                </div>
              </motion.div>
            </div>

            <motion.div className={styles.heroPills} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .28 }}>
              {content.hero.statPills.map((pill) => (
                <span key={pill.label} className={`glass-pill ${styles.heroPill}`}>
                  <span className={styles.heroPillEmoji}>{pill.emoji}</span>
                  <span className={styles.heroPillValue}>{pill.value}</span>
                  <span>{pill.label}</span>
                </span>
              ))}
            </motion.div>

            {content.hero.image && (
              <motion.div className={styles.heroImageWrap} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .68, delay: .36 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.heroImage} src={content.hero.image.src} alt={content.hero.image.alt} width={1200} height={720} loading="eager" decoding="async" />
              </motion.div>
            )}
          </div>
        </section>

        <section className={styles.section} aria-label="Pain points">
          <div className="container-x">
            <SectionHeading tag={content.painPointsTag ?? 'SOUND FAMILIAR?'} title={content.painPointsHeadline ?? "What's really holding you back"} />
            <div className={styles.painGrid}>
              {content.painPoints.map((item, index) => (
                <motion.article key={item.title} className={styles.painCard} {...reveal} transition={{ duration: .5, delay: (index % 2) * .06 }}>
                  <div className={styles.painEmoji}>{item.emoji}</div><h3 className={styles.painTitle}>{item.title}</h3><p className={styles.painBody}>{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {content.showcase && content.showcase.images.length > 0 && (
          <section className={styles.section} aria-label="Showcase">
            <div className="container-x">
              <SectionHeading tag={content.showcase.tag ?? 'THE OPPORTUNITY'} title={content.showcase.headline ?? 'What growth looks like'} subhead={content.showcase.subhead} />
              <div className={styles.showcaseGrid}>
                {content.showcase.images.map((image, index) => (
                  <motion.figure key={image.src} className={styles.showcaseItem} {...reveal} transition={{ duration: .5, delay: (index % 3) * .06 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.showcaseImg} src={image.src} alt={image.alt} width={800} height={600} loading="lazy" decoding="async" />
                    {image.caption && <figcaption className={styles.showcaseCaption}>{image.caption}</figcaption>}
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {content.aiAdvantage && (
          <section className={styles.aiSection} aria-label="AI advantage">
            <div className={`${styles.aiInner} container-x`}>
              <div className={styles.sectionHeader}>
                <span className={`section-tag ${styles.aiTag}`}>{content.aiAdvantage.tag}</span>
                <h2 className={styles.sectionHeadline}>{content.aiAdvantage.headline}</h2>
                {content.aiAdvantage.subhead && <p className={styles.sectionSub}>{content.aiAdvantage.subhead}</p>}
              </div>
              <div className={styles.aiGrid}>
                {content.aiAdvantage.cards.map((card, index) => (
                  <motion.article key={card.title} className={styles.aiCard} {...reveal} transition={{ duration: .5, delay: (index % 2) * .06 }}>
                    <div className={styles.aiCardEmoji}>{card.emoji}</div><h3 className={styles.aiCardTitle}>{card.title}</h3><p className={styles.aiCardBody}>{card.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.section} aria-label="Services">
          <div className="container-x">
            <SectionHeading tag={content.servicesTag ?? 'WHAT WE DO'} title={content.servicesHeadline ?? 'Everything you need, under one roof'} subhead={content.servicesSubhead} />
            <div className={styles.svcGrid}>
              {content.services.map((service, index) => (
                <motion.article key={service.title} className={styles.svcCard} {...reveal} transition={{ duration: .5, delay: (index % 3) * .05 }}>
                  <h3 className={styles.svcTitle}>{service.title}</h3><p className={styles.svcBody}>{service.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {content.builds && content.builds.items.length > 0 && (
          <section className={styles.section} id="builds" aria-label="What we have built">
            <div className="container-x">
              <SectionHeading tag={content.builds.tag ?? 'WHAT WE’VE BUILT'} title={content.builds.headline ?? 'Real products we’ve shipped'} subhead={content.builds.subhead} />
              <div className={styles.svcGrid}>
                {content.builds.items.map((build, index) => (
                  <motion.article key={build.name} className={styles.svcCard} {...reveal} transition={{ duration: .5, delay: (index % 3) * .05 }}>
                    <h3 className={styles.svcTitle}>{build.href ? <a href={build.href} target="_blank" rel="noopener noreferrer">{build.name} ↗</a> : build.name}</h3>
                    <p className={styles.svcBody}>{build.what}</p>
                    <p className={styles.svcBody} style={{ marginTop: 14, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12 }}>{build.stack}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.section} id="results" aria-label="Featured result">
          <div className="container-x">
            <SectionHeading tag={content.resultsTag ?? 'REAL RESULTS'} title={content.resultsHeadline ?? 'Clients we’ve helped grow'} />
            <motion.div className={styles.resultBlock} {...reveal}>
              <div>
                <p className={styles.resultMeta}>{content.resultHighlight.label ?? 'FEATURED CLIENT'}</p>
                <h3 className={styles.resultDoctor}>{content.resultHighlight.name}</h3>
                <p className={styles.resultSpec}>{content.resultHighlight.detail}</p>
                <blockquote className={styles.resultQuote}>{content.resultHighlight.quote}</blockquote>
              </div>
              <div className={styles.resultMetrics}>
                {content.resultHighlight.metrics.map((metric) => <div key={metric.label} className={styles.metric}><div className={styles.metricValue}>{metric.value}</div><div className={styles.metricLabel}>{metric.label}</div></div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {content.videoTestimonials.length > 0 && (
          <VideoTestimonialsShorts videos={content.videoTestimonials} tag={content.videoTestimonialsTag ?? 'HEAR FROM OUR CLIENTS'} headline={content.videoTestimonialsHeadline ?? 'Real clients, real outcomes'} subhead={content.videoTestimonialsSubhead} />
        )}

        <section className={styles.section} aria-label="Process">
          <div className="container-x">
            <SectionHeading tag={content.processTag ?? 'HOW IT WORKS'} title={content.processHeadline ?? 'Four steps, zero guesswork'} />
            <div className={styles.procGrid}>
              {content.process.map((step, index) => (
                <motion.article key={step.step} className={styles.procCard} {...reveal} transition={{ duration: .5, delay: index * .05 }}>
                  <div className={styles.procStep}>{step.step}</div><h3 className={styles.procTitle}>{step.title}</h3><p className={styles.procBody}>{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-label="Why us">
          <div className="container-x">
            <SectionHeading tag={content.whyUsTag ?? 'WHY GROWTH ESCALATORS'} title={content.whyUsHeadline ?? 'Not your average agency'} />
            <div className={styles.whyGrid}>
              {content.whyUs.map((item, index) => (
                <motion.article key={item.title} className={styles.whyCard} {...reveal} transition={{ duration: .5, delay: (index % 2) * .05 }}>
                  <h3 className={styles.whyTitle}>{item.title}</h3><p className={styles.whyBody}>{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {content.leadMagnet && <LeadMagnetCalculator config={content.leadMagnet} />}

        {!content.bookingUrl && (
          <LeadForm recipient={content.leadForm.recipient ?? 'Info@growthescalators.com'} subjectPrefix={content.leadForm.subjectPrefix ?? `New ${content.industryLabel ?? 'Industry'} Lead`} headline={content.leadForm.headline} subhead={content.leadForm.subhead} tag={content.leadForm.tag} />
        )}

        <section className={styles.section} aria-label="FAQ">
          <div className="container-x">
            <SectionHeading tag={content.faqsTag ?? 'QUESTIONS, ANSWERED'} title={content.faqsHeadline ?? 'Frequently asked'} />
            <div className={styles.faqList}>{content.faqs.map((faq, index) => <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={index === 0} />)}</div>
          </div>
        </section>

        {content.relatedResources && content.relatedResources.links.length > 0 && (
          <section className={styles.section} aria-label="Related resources">
            <div className="container-x">
              <SectionHeading tag={content.relatedResources.tag ?? 'GO DEEPER'} title={content.relatedResources.headline ?? 'Related reading & resources'} subhead={content.relatedResources.subhead} />
              <div className={styles.svcGrid}>
                {content.relatedResources.links.map((resource, index) => (
                  <motion.article key={resource.href} className={styles.svcCard} {...reveal} transition={{ duration: .5, delay: (index % 3) * .05 }}>
                    <Link href={resource.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                      <h3 className={styles.svcTitle}>{resource.label}</h3>{resource.blurb && <p className={styles.svcBody}>{resource.blurb}</p>}
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.ctaBanner} aria-label="Final call to action">
          <div className="container-x">
            <h2 className={styles.ctaTitle}>{content.finalCta.title}</h2>
            <p className={styles.ctaSub}>{content.finalCta.subhead}</p>
            <a href={bookHref} {...extProps(bookHref)} className="btn-primary">{content.finalCta.ctaLabel}</a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
