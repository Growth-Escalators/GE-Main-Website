import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import LeadMagnetCalculator from '@/components/landing/LeadMagnetCalculator'
import VideoTestimonialsShorts from '@/components/landing/VideoTestimonialsShorts'
import type { LandingContent } from '@/components/landing/IndustryLandingPage'
import CommercialMotion from './CommercialMotion'
import CommercialCapabilities from './CommercialCapabilities'
import CommercialLeadForm from './CommercialLeadForm'
import styles from './CommercialLandingPage.module.css'

type ProofMetric = { value: string; label: string }
type ProofBlock = { eyebrow: string; title: string; copy: string; metrics: ProofMetric[]; href: string; cta: string }

const GLOBAL_PROOF: ProofMetric[] = [
  { value: '187+', label: 'brands scaled' },
  { value: '97%', label: 'client retention' },
  { value: '₹10Cr+', label: 'ad spend managed' },
  { value: '4.9/5', label: 'Google rating' },
]

function proofFor(label?: string): ProofBlock {
  if (label === 'D2C Brand') {
    return {
      eyebrow: 'Verified D2C proof',
      title: 'Scale only counts when the economics hold.',
      copy: 'Paraiso moved from 1.9× to 3.2× ROAS while revenue grew 6× in 60 days. That is the standard: stronger acquisition and a buying journey capable of carrying the extra demand.',
      metrics: [
        { value: '3.2×', label: 'Paraiso ROAS' },
        { value: '6×', label: 'revenue growth' },
        { value: '60', label: 'days' },
      ],
      href: '/work',
      cta: 'See the Paraiso work',
    }
  }
  if (label === 'Ecommerce Brand') {
    return {
      eyebrow: 'Verified ecommerce proof',
      title: 'Full-funnel growth has to reconcile to revenue.',
      copy: 'Elixzor reached 10× ROAS and ₹3.2Cr+ in revenue by treating acquisition, funnel decisions and ecommerce performance as one connected system.',
      metrics: [
        { value: '10×', label: 'ROAS' },
        { value: '₹3.2Cr+', label: 'revenue' },
        { value: 'Full funnel', label: 'growth system' },
      ],
      href: '/work',
      cta: 'See the Elixzor work',
    }
  }
  if (label === 'Doctor') {
    return {
      eyebrow: 'Verified healthcare proof',
      title: 'Patient acquisition starts with intent and trust.',
      copy: 'For Dr. Dheeraj Dubay, the growth journey generated 35,000+ leads by connecting demand generation with a clearer website and enquiry path.',
      metrics: [
        { value: '35K+', label: 'leads' },
        { value: 'High intent', label: 'journey' },
        { value: 'Healthcare', label: 'growth system' },
      ],
      href: '/work',
      cta: 'See the healthcare work',
    }
  }
  if (label === 'Jaipur') {
    return {
      eyebrow: 'Performance proof',
      title: 'Performance has to answer to the business.',
      copy: 'Growth Escalators has managed ₹10Cr+ in ad spend across 10,000+ campaigns. The job is not to make an ads dashboard look busy; it is to find the acquisition and conversion system that can scale responsibly.',
      metrics: [
        { value: '₹10Cr+', label: 'ad spend managed' },
        { value: '10,000+', label: 'campaigns' },
        { value: '97%', label: 'client retention' },
      ],
      href: '/work',
      cta: 'Explore verified work',
    }
  }
  return {
    eyebrow: 'Growth Escalators proof',
    title: 'Build the system. Measure what changed.',
    copy: 'The commercial pages keep the promise simple: connect the right growth, experience and technology levers around a measurable business outcome, then make the work accountable.',
    metrics: [
      { value: '187+', label: 'brands scaled' },
      { value: '97%', label: 'client retention' },
      { value: '₹10Cr+', label: 'ad spend managed' },
    ],
    href: '/work',
    cta: 'Explore verified work',
  }
}

function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
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

export default function CommercialLandingPage({ content }: { content: LandingContent }) {
  const proof = proofFor(content.industryLabel)
  const primaryHref = content.bookingUrl ?? content.hero.primaryCta.href
  const external = primaryHref.startsWith('http')
  const showcase = content.showcase?.images ?? []
  const source = content.leadForm.subjectPrefix || `${content.industryLabel ?? 'Commercial'} enquiry`

  return (
    <>
      <FaqJsonLd faqs={content.faqs} />
      <Navbar />
      <main className={styles.page}>
        <CommercialMotion />

        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.kicker} data-cm-hero>{content.hero.badge}</span>
                <h1 data-cm-hero>{content.hero.headlineLines[0]}<br />{content.hero.headlineLines[1]}</h1>
                <p data-cm-hero>{content.hero.subhead}</p>
                <div className={styles.heroActions} data-cm-hero>
                  <a href={primaryHref} className={styles.primaryButton} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content.hero.primaryCta.label} ↗</a>
                  <a href="#results" className={styles.secondaryButton}>See verified proof</a>
                </div>
                <div className={styles.wordRail} data-cm-hero>
                  {content.hero.cyclingWords.slice(0, 4).map((word, index) => <span key={word}><b>0{index + 1}</b>{word}</span>)}
                </div>
              </div>

              <div className={styles.heroMedia} data-cm-media>
                {content.hero.image ? (
                  <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(max-width: 900px) 100vw, 44vw" />
                ) : (
                  <div className={styles.heroFallback}><span>Growth × Technology</span><strong>{content.industryLabel ?? 'Commercial growth'}</strong></div>
                )}
                <div className={styles.heroMediaShade} />
                <div className={styles.heroMediaTag}><span>01</span><strong>Find the constraint</strong><small>Then connect only the levers that matter.</small></div>
                <div className={styles.heroPulse} aria-hidden><i /><i /><i /></div>
              </div>
            </div>

            <div className={styles.proofRail}>
              {GLOBAL_PROOF.map((item) => <div key={item.label} data-cm-hero><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><span className={styles.kicker} data-cm-reveal>{content.painPointsTag ?? 'Where growth gets stuck'}</span><h2 data-cm-reveal>{content.painPointsHeadline ?? 'The constraint usually shows up before the channel.'}</h2></div>
              <p data-cm-reveal>Before adding more budget, more content or more technology, we identify the point where demand, conversion or delivery is breaking down.</p>
            </div>
            <div className={styles.constraintGrid}>
              {content.painPoints.slice(0, 4).map((item, index) => (
                <article key={item.title} className={styles.constraintCard} data-cm-card>
                  <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {showcase.length > 0 && (
          <section className={`${styles.section} ${styles.cream}`}>
            <div className={styles.shell}>
              <div className={styles.sectionHead}>
                <div><span className={styles.kicker} data-cm-reveal>{content.showcase?.tag ?? 'The opportunity'}</span><h2 data-cm-reveal>{content.showcase?.headline ?? 'What better looks like.'}</h2></div>
                <p data-cm-reveal>{content.showcase?.subhead ?? 'The commercial system should become clearer, faster and easier to scale.'}</p>
              </div>
              <div className={styles.showcaseGrid}>
                {showcase.slice(0, 3).map((item, index) => (
                  <figure key={`${item.src}-${index}`} className={`${styles.showcaseItem} ${index === 0 ? styles.showcasePrimary : ''}`} data-cm-media>
                    <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? '(max-width: 900px) 100vw, 62vw' : '(max-width: 900px) 100vw, 32vw'} />
                    <div className={styles.mediaShade} />
                    {item.caption && <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="services" className={`${styles.section} ${styles.lavender}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><span className={styles.kicker} data-cm-reveal>{content.servicesTag ?? 'Connected capabilities'}</span><h2 data-cm-reveal>{content.servicesHeadline ?? 'Every lever. One commercial objective.'}</h2></div>
              <p data-cm-reveal>{content.servicesSubhead ?? 'Hover or tap each capability to see how the lever fits into a measurable growth system.'}</p>
            </div>
            <CommercialCapabilities services={content.services} industryLabel={content.industryLabel} />
          </div>
        </section>

        {content.aiAdvantage && (
          <section className={`${styles.section} ${styles.dark}`}>
            <div className={styles.shell}>
              <div className={styles.sectionHead}>
                <div><span className={styles.kicker} data-cm-reveal>{content.aiAdvantage.tag}</span><h2 data-cm-reveal>{content.aiAdvantage.headline}</h2></div>
                <p data-cm-reveal>{content.aiAdvantage.subhead ?? 'AI matters when it removes friction, increases testing velocity or helps the team make better decisions faster.'}</p>
              </div>
              <div className={styles.aiGrid}>
                {content.aiAdvantage.cards.slice(0, 4).map((item, index) => (
                  <article className={styles.aiCard} key={item.title} data-cm-card><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><div className={styles.aiLine}><i /><i /><i /><i /></div></article>
                ))}
              </div>
            </div>
          </section>
        )}

        {content.builds && content.builds.items.length > 0 && (
          <section className={`${styles.section} ${styles.paper}`}>
            <div className={styles.shell}>
              <div className={styles.sectionHead}>
                <div><span className={styles.kicker} data-cm-reveal>{content.builds.tag ?? 'Selected builds'}</span><h2 data-cm-reveal>{content.builds.headline ?? 'Products and systems shipped into the real world.'}</h2></div>
                <p data-cm-reveal>{content.builds.subhead ?? 'Production work is where design, engineering and operations have to agree.'}</p>
              </div>
              <div className={styles.buildGrid}>
                {content.builds.items.map((item, index) => (
                  <article className={styles.buildCard} key={item.name} data-cm-card>
                    <span>0{index + 1}</span><h3>{item.name}</h3><p>{item.what}</p><small>{item.stack}</small>{item.href && <a href={item.href} target="_blank" rel="noopener noreferrer">View build ↗</a>}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="results" className={`${styles.section} ${styles.proofSection}`}>
          <div className={styles.shell}>
            <div className={styles.proofGrid}>
              <div className={styles.proofCopy}>
                <span className={styles.kicker} data-cm-reveal>{proof.eyebrow}</span>
                <h2 data-cm-reveal>{proof.title}</h2>
                <p data-cm-reveal>{proof.copy}</p>
                <Link href={proof.href} className={styles.lightButton} data-cm-reveal>{proof.cta} ↗</Link>
              </div>
              <div className={styles.proofMetrics}>
                {proof.metrics.map((item) => <div key={item.label} data-cm-card><strong>{item.value}</strong><span>{item.label}</span></div>)}
                <div className={styles.proofSystem} data-cm-card><span>Measure</span><i /><i /><i /><strong>Scale what holds.</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><span className={styles.kicker} data-cm-reveal>{content.processTag ?? 'How we work'}</span><h2 data-cm-reveal>{content.processHeadline ?? 'Diagnose. Build. Test. Scale.'}</h2></div>
              <p data-cm-reveal>The exact channel mix changes by business. The operating rhythm stays disciplined.</p>
            </div>
            <div className={styles.processGrid}>
              {content.process.map((item) => <article key={item.step} data-cm-card><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.cream}`}>
          <div className={styles.shell}>
            <div className={styles.whyGrid}>
              <div className={styles.whyIntro}><span className={styles.kicker} data-cm-reveal>{content.whyUsTag ?? 'Why Growth Escalators'}</span><h2 data-cm-reveal>{content.whyUsHeadline ?? 'One team accountable to the commercial outcome.'}</h2></div>
              <div className={styles.whyList}>
                {content.whyUs.map((item, index) => <article key={item.title} data-cm-card><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        {content.leadMagnet && (
          <section className={styles.toolChapter}>
            <LeadMagnetCalculator config={content.leadMagnet} />
          </section>
        )}

        {content.videoTestimonials.length > 0 && (
          <VideoTestimonialsShorts testimonials={content.videoTestimonials} tag={content.videoTestimonialsTag} headline={content.videoTestimonialsHeadline} subhead={content.videoTestimonialsSubhead} />
        )}

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.faqGrid}>
              <div><span className={styles.kicker} data-cm-reveal>{content.faqsTag ?? 'FAQ'}</span><h2 data-cm-reveal>{content.faqsHeadline ?? `Questions about ${content.industryLabel ?? 'working together'}`}</h2><p data-cm-reveal>Clear answers before the call. If something is still specific to your situation, send it with the audit request.</p></div>
              <div className={styles.faqList}>
                {content.faqs.map((item, index) => (
                  <details key={item.q} className={styles.faqItem} data-cm-card open={index === 0}><summary><span>0{index + 1}</span><strong>{item.q}</strong><b>+</b></summary><p>{item.a}</p></details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {content.relatedResources && content.relatedResources.links.length > 0 && (
          <section className={`${styles.section} ${styles.lavender}`}>
            <div className={styles.shell}>
              <div className={styles.sectionHead}>
                <div><span className={styles.kicker} data-cm-reveal>{content.relatedResources.tag ?? 'Explore next'}</span><h2 data-cm-reveal>{content.relatedResources.headline ?? 'Go deeper.'}</h2></div>
                <p data-cm-reveal>{content.relatedResources.subhead ?? 'Follow the route that best matches the problem you are trying to solve.'}</p>
              </div>
              <div className={styles.resourceList}>
                {content.relatedResources.links.map((item, index) => <Link href={item.href} key={item.href} data-cm-card><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.blurb}</small><b>↗</b></Link>)}
              </div>
            </div>
          </section>
        )}

        <CommercialLeadForm source={source} headline={content.leadForm.headline || content.finalCta.title} subhead={content.leadForm.subhead || content.finalCta.subhead} tag={content.leadForm.tag || 'Free growth audit'} industryLabel={content.industryLabel} />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
