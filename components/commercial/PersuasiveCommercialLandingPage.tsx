import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import VideoTestimonialsShorts from '@/components/landing/VideoTestimonialsShorts'
import type { LandingContent } from '@/components/landing/IndustryLandingPage'
import CommercialMotion from './CommercialMotion'
import CommercialCapabilities from './CommercialCapabilities'
import CommercialDecisionTool from './CommercialDecisionTool'
import CommercialLeadForm from './CommercialLeadForm'
import { CommercialEngagement, CommercialFitGate, CommercialNextSteps, CommercialTimeline } from './CommercialPersuasionBlocks'
import styles from './CommercialLandingPage.module.css'

type Metric = { value: string; label: string }
type Proof = { eyebrow: string; title: string; copy: string; metrics: Metric[]; cta: string }
type Positioning = { badge: string; subhead: string; cta: string; auditTitle: string; auditSubhead: string; proof: Proof }

const GLOBAL_PROOF: Metric[] = [
  { value: '187+', label: 'brands scaled' },
  { value: '97%', label: 'client retention' },
  { value: '₹10Cr+', label: 'ad spend managed' },
  { value: '4.9/5', label: 'Google rating' },
]

const broadProof: Proof = {
  eyebrow: 'Verified Growth Escalators proof',
  title: 'The work has to answer to the business.',
  copy: 'Growth Escalators has managed ₹10Cr+ in ad spend, worked across 187+ brands and built a 97% client-retention record. The point of the system is simple: make every major decision accountable to a commercial outcome.',
  metrics: [
    { value: '₹10Cr+', label: 'ad spend managed' },
    { value: '187+', label: 'brands scaled' },
    { value: '97%', label: 'client retention' },
  ],
  cta: 'Explore verified work',
}

function positioningFor(label = ''): Positioning {
  if (label === 'D2C Brand') return {
    badge: 'D2C GROWTH · MEDIA × CRO × RETENTION',
    subhead: 'We help D2C brands find the constraint that keeps profitable growth from scaling—then connect paid media, creative, Shopify conversion and retention around the same store economics.',
    cta: 'Find my D2C growth constraint',
    auditTitle: 'Find the constraint in your D2C growth system.',
    auditSubhead: 'Share your store, current spend and the number that stops holding when you try to scale. We will review the acquisition, conversion and retention journey before the call.',
    proof: {
      eyebrow: 'Verified D2C proof',
      title: 'Scale only counts when the economics hold.',
      copy: 'Paraiso moved from 1.9× to 3.2× ROAS while revenue grew 6× in 60 days. The lesson is not “spend more.” It is to fix the growth system before asking it to carry more demand.',
      metrics: [{ value: '3.2×', label: 'Paraiso ROAS' }, { value: '6×', label: 'revenue growth' }, { value: '60', label: 'days' }],
      cta: 'See the Paraiso work',
    },
  }
  if (label === 'Ecommerce Brand') return {
    badge: 'ECOMMERCE · META + GOOGLE · BLENDED ECONOMICS',
    subhead: 'We connect Meta, Google, tracking, ecommerce conversion and order data so scaling decisions are made on one commercial view—not competing platform dashboards.',
    cta: 'Show me where revenue is leaking',
    auditTitle: 'See where your ecommerce funnel is leaking revenue.',
    auditSubhead: 'Share your store and current channel mix. We will look at acquisition, attribution, conversion and retention as one system before recommending more spend.',
    proof: {
      eyebrow: 'Verified ecommerce proof',
      title: 'Full-funnel growth has to reconcile to revenue.',
      copy: 'Elixzor reached 10× ROAS and ₹3.2Cr+ in revenue by treating acquisition, funnel decisions and ecommerce performance as one connected system.',
      metrics: [{ value: '10×', label: 'ROAS' }, { value: '₹3.2Cr+', label: 'revenue' }, { value: 'Full funnel', label: 'growth system' }],
      cta: 'See the Elixzor work',
    },
  }
  if (label === 'Ecommerce Brand (Meta Ads)') return {
    badge: 'META ADS · CREATIVE × OFFER × CRO',
    subhead: 'For ecommerce brands that have already chosen Meta and need to understand whether the real constraint is creative supply, offer strength, landing-page conversion or account structure.',
    cta: 'Audit my Meta account + creative',
    auditTitle: 'Get your creative + Meta account audit.',
    auditSubhead: 'Share the store and ad account context. We will diagnose creative, offer, conversion and account-structure issues before recommending a targeting change.',
    proof: {
      eyebrow: 'Verified D2C proof',
      title: 'Creative and conversion have to earn the right to scale.',
      copy: 'Paraiso moved from 1.9× to 3.2× ROAS while revenue grew 6× in 60 days after the growth system was rebuilt. We use that same proof discipline here without pretending every Meta account has the same diagnosis.',
      metrics: [{ value: '3.2×', label: 'Paraiso ROAS' }, { value: '6×', label: 'revenue growth' }, { value: '60', label: 'days' }],
      cta: 'See verified D2C work',
    },
  }
  if (label === 'Ecommerce Brand (Scaling)') return {
    badge: 'FOR PROFITABLE ECOMMERCE BRANDS READY TO SCALE',
    subhead: 'For stores that already work at the current spend level but lose efficiency when budgets rise. We diagnose the scaling ceiling across contribution margin, creative supply, audience headroom, inventory and conversion.',
    cta: 'Find my scaling ceiling',
    auditTitle: 'Find the ceiling that keeps breaking when you scale.',
    auditSubhead: 'Share current spend, revenue and the point where economics deteriorate. We will map the constraint before recommending a bigger budget.',
    proof: {
      eyebrow: 'Verified scaling proof',
      title: 'Scale in a way the economics can carry.',
      copy: 'Paraiso grew revenue 6× in 60 days while ROAS improved from 1.9× to 3.2×. That is the type of scaling we care about: more revenue without ignoring the efficiency that makes it worth having.',
      metrics: [{ value: '6×', label: 'revenue growth' }, { value: '3.2×', label: 'ROAS' }, { value: '60', label: 'days' }],
      cta: 'See the Paraiso work',
    },
  }
  if (label === 'Doctor' || label === 'Jaipur Healthcare') return {
    badge: label === 'Jaipur Healthcare' ? 'JAIPUR · HEALTHCARE GROWTH · PATIENT JOURNEY' : 'HEALTHCARE GROWTH · PATIENT ACQUISITION × TRUST',
    subhead: 'We connect demand generation, local/search visibility, treatment pages, WhatsApp and front-desk follow-up around the patient journey—from first intent to booked and showed-up appointment.',
    cta: label === 'Jaipur Healthcare' ? 'Get my Jaipur clinic growth audit' : 'Get my patient acquisition audit',
    auditTitle: label === 'Jaipur Healthcare' ? 'Get your Jaipur clinic growth audit.' : 'Get your patient acquisition audit.',
    auditSubhead: 'Share the clinic, specialty, geography and where the calendar has capacity. We will review the patient journey from demand through booking and show-up before the call.',
    proof: {
      eyebrow: 'Verified healthcare proof',
      title: 'Patient acquisition starts with intent and trust.',
      copy: 'For Dr. Dheeraj Dubay, the growth journey generated 35,000+ leads by connecting demand generation with a clearer website and enquiry path.',
      metrics: [{ value: '35K+', label: 'leads' }, { value: 'High intent', label: 'journey' }, { value: 'Healthcare', label: 'growth system' }],
      cta: 'See the healthcare work',
    },
  }
  if (label === 'Website Development') return {
    badge: 'WEBSITE DEVELOPMENT IN JAIPUR · UX × SEO × CONVERSION',
    subhead: 'We design and build websites as commercial infrastructure: clear user journeys, fast responsive execution, SEO-safe migration, analytics and the integrations required to turn traffic into enquiries or sales.',
    cta: 'Get my website teardown + scope',
    auditTitle: 'Get your website teardown + scope.',
    auditSubhead: 'Share the current site or brief. We will review UX, conversion, SEO migration risk, integrations and the level of build actually required.',
    proof: {
      eyebrow: 'Production proof',
      title: 'A website is only useful when it survives the real world.',
      copy: 'Our web work includes live, production websites and growth systems where responsive UX, search visibility, forms, analytics and conversion paths have to work together—not just look good in a mockup.',
      metrics: [{ value: 'Live', label: 'production builds' }, { value: 'SEO-first', label: 'migration mindset' }, { value: 'Owned', label: 'handover + access' }],
      cta: 'Explore selected work',
    },
  }
  if (label === 'Software Development') return {
    badge: 'SOFTWARE DEVELOPMENT IN JAIPUR · PRODUCT × AI × SYSTEMS',
    subhead: 'We scope and build production software around real users, workflows and integrations—then make progress visible through working previews, QA and explicit code ownership.',
    cta: 'Scope my product',
    auditTitle: 'Scope the product before you commit to a build.',
    auditSubhead: 'Share the idea or current system. We will map users, workflows, integrations, architecture risk and the right engagement model before anyone promises a deadline.',
    proof: {
      eyebrow: 'Production engineering proof',
      title: 'The difference is whether the software actually ships.',
      copy: 'Our product work spans SaaS, internal systems, AI-enabled workflows and production integrations. The page focuses on inspectable delivery, ownership and architecture rather than inflated vanity metrics.',
      metrics: [{ value: 'Production', label: 'shipping mindset' }, { value: 'Multi-system', label: 'integration depth' }, { value: 'Owned', label: 'code + handover' }],
      cta: 'Explore selected builds',
    },
  }
  if (label === 'B2B Lead Generation') return {
    badge: 'B2B PIPELINE · ICP × DEMAND × SALES HANDOFF',
    subhead: 'We work backwards from revenue into the qualified pipeline required, then connect ICP targeting, content, paid/outbound demand, scoring and CRM handoff around one definition of a sales-ready opportunity.',
    cta: 'Audit my B2B pipeline',
    auditTitle: 'Audit the pipeline, not the lead count.',
    auditSubhead: 'Share your ICP, average deal value, sales cycle and current sources. We will work backwards from revenue into the SQL and opportunity volume the business actually needs.',
    proof: broadProof,
  }
  if (label === 'Real Estate' || label === 'Jaipur Real Estate') return {
    badge: label === 'Jaipur Real Estate' ? 'JAIPUR · REAL ESTATE DEMAND · PROJECT FUNNEL' : 'REAL ESTATE · QUALIFIED DEMAND × SITE VISITS × BOOKINGS',
    subhead: 'We build project demand around buyer fit, qualification, CRM nurture and the sales-gallery journey. The commercial target is not cheap lead volume—it is enough qualified demand to create site visits and bookings.',
    cta: label === 'Jaipur Real Estate' ? 'Get my Jaipur project demand plan' : 'Get my project demand audit',
    auditTitle: label === 'Jaipur Real Estate' ? 'Get your Jaipur project demand plan.' : 'Get your project demand audit.',
    auditSubhead: 'Share the project, ticket size, inventory, monthly booking target and current lead-to-site-visit journey. We will work backwards from the commercial target.',
    proof: broadProof,
  }
  return {
    badge: 'JAIPUR · PERFORMANCE MARKETING · ₹10CR+ AD SPEND MANAGED',
    subhead: 'A Jaipur-based performance marketing team connecting Meta Ads, Google Ads, creative, funnels, CRO and tracking around profitable acquisition—not isolated platform activity.',
    cta: 'Get my ad account diagnosis',
    auditTitle: 'Get your ad account diagnosis.',
    auditSubhead: 'Share current spend, lead/sales performance and where you think the funnel is leaking. We will identify the three biggest constraints before asking you to buy anything.',
    proof: broadProof,
  }
}

function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function PersuasiveCommercialLandingPage({ content }: { content: LandingContent }) {
  const positioning = positioningFor(content.industryLabel)
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
                <span className={styles.kicker} data-cm-hero>{positioning.badge}</span>
                <h1 data-cm-hero>{content.hero.headlineLines[0]}<br />{content.hero.headlineLines[1]}</h1>
                <p data-cm-hero>{positioning.subhead}</p>
                <div className={styles.heroActions} data-cm-hero>
                  <a href="#lead-form" className={styles.primaryButton}>{positioning.cta} ↗</a>
                  <a href="#results" className={styles.secondaryButton}>See verified proof</a>
                </div>
                <div className={styles.wordRail} data-cm-hero>
                  {content.hero.cyclingWords.slice(0, 4).map((word, index) => <span key={word}><b>0{index + 1}</b>{word}</span>)}
                </div>
              </div>
              <div className={styles.heroMedia} data-cm-media>
                {content.hero.image ? <Image src={content.hero.image.src} alt={content.hero.image.alt} fill priority sizes="(max-width: 900px) 100vw, 44vw" /> : <div className={styles.heroFallback}><span>Growth × Technology</span><strong>{content.industryLabel ?? 'Commercial growth'}</strong></div>}
                <div className={styles.heroMediaShade} />
                <div className={styles.heroMediaTag}><span>01</span><strong>Diagnose before we prescribe</strong><small>Find the commercial constraint before adding activity.</small></div>
                <div className={styles.heroPulse} aria-hidden><i /><i /><i /></div>
              </div>
            </div>
            <div className={styles.proofRail}>{GLOBAL_PROOF.map((item) => <div key={item.label} data-cm-hero><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.paper}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><span className={styles.kicker} data-cm-reveal>{content.painPointsTag ?? 'Where growth gets stuck'}</span><h2 data-cm-reveal>{content.painPointsHeadline ?? 'The constraint usually shows up before the channel.'}</h2></div>
              <p data-cm-reveal>Before adding more budget, content or technology, we identify the point where demand, conversion, follow-up or delivery is breaking down.</p>
            </div>
            <div className={styles.constraintGrid}>{content.painPoints.slice(0, 4).map((item, index) => <article key={item.title} className={styles.constraintCard} data-cm-card><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </div>
        </section>

        <section id="results" className={`${styles.section} ${styles.proofSection}`}>
          <div className={styles.shell}>
            <div className={styles.proofGrid}>
              <div className={styles.proofCopy}><span className={styles.kicker} data-cm-reveal>{positioning.proof.eyebrow}</span><h2 data-cm-reveal>{positioning.proof.title}</h2><p data-cm-reveal>{positioning.proof.copy}</p><Link href="/work" className={styles.lightButton} data-cm-reveal>{positioning.proof.cta} ↗</Link></div>
              <div className={styles.proofMetrics}>{positioning.proof.metrics.map((item) => <div key={item.label} data-cm-card><strong>{item.value}</strong><span>{item.label}</span></div>)}<div className={styles.proofSystem} data-cm-card><span>Evidence first</span><i /><i /><i /><strong>Trust what you can inspect.</strong></div></div>
            </div>
          </div>
        </section>

        <CommercialFitGate industryLabel={content.industryLabel} />

        {showcase.length > 0 && <section className={`${styles.section} ${styles.cream}`}><div className={styles.shell}><div className={styles.sectionHead}><div><span className={styles.kicker} data-cm-reveal>{content.showcase?.tag ?? 'The opportunity'}</span><h2 data-cm-reveal>{content.showcase?.headline ?? 'What better looks like.'}</h2></div><p data-cm-reveal>{content.showcase?.subhead ?? 'The commercial system should become clearer, faster and easier to scale.'}</p></div><div className={styles.showcaseGrid}>{showcase.slice(0, 3).map((item, index) => <figure key={`${item.src}-${index}`} className={`${styles.showcaseItem} ${index === 0 ? styles.showcasePrimary : ''}`} data-cm-media><Image src={item.src} alt={item.alt} fill sizes={index === 0 ? '(max-width: 900px) 100vw, 62vw' : '(max-width: 900px) 100vw, 32vw'} /><div className={styles.mediaShade} />{item.caption && <figcaption><span>0{index + 1}</span>{item.caption}</figcaption>}</figure>)}</div></div></section>}

        <section id="services" className={`${styles.section} ${styles.lavender}`}><div className={styles.shell}><div className={styles.sectionHead}><div><span className={styles.kicker} data-cm-reveal>{content.servicesTag ?? 'Connected capabilities'}</span><h2 data-cm-reveal>{content.servicesHeadline ?? 'Every lever. One commercial objective.'}</h2></div><p data-cm-reveal>{content.servicesSubhead ?? 'Hover or tap each capability to see how the lever fits into a measurable growth system.'}</p></div><CommercialCapabilities services={content.services} industryLabel={content.industryLabel} /></div></section>

        <section className={styles.paper}><CommercialDecisionTool industryLabel={content.industryLabel} /></section>

        {content.aiAdvantage && <section className={`${styles.section} ${styles.dark}`}><div className={styles.shell}><div className={styles.sectionHead}><div><span className={styles.kicker} data-cm-reveal>{content.aiAdvantage.tag}</span><h2 data-cm-reveal>{content.aiAdvantage.headline}</h2></div><p data-cm-reveal>{content.aiAdvantage.subhead ?? 'AI matters when it removes friction, increases testing velocity or helps the team make better decisions faster.'}</p></div><div className={styles.aiGrid}>{content.aiAdvantage.cards.slice(0, 4).map((item, index) => <article className={styles.aiCard} key={item.title} data-cm-card><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><div className={styles.aiLine}><i /><i /><i /><i /></div></article>)}</div></div></section>}

        {content.builds && content.builds.items.length > 0 && <section className={`${styles.section} ${styles.paper}`}><div className={styles.shell}><div className={styles.sectionHead}><div><span className={styles.kicker} data-cm-reveal>{content.builds.tag ?? 'Selected builds'}</span><h2 data-cm-reveal>{content.builds.headline ?? 'Products and systems shipped into the real world.'}</h2></div><p data-cm-reveal>{content.builds.subhead ?? 'Production work is where design, engineering and operations have to agree.'}</p></div><div className={styles.buildGrid}>{content.builds.items.map((item, index) => <article className={styles.buildCard} key={item.name} data-cm-card><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.what}</p><small>{item.stack}</small>{item.href && <a href={item.href} target="_blank" rel="noopener noreferrer">View build ↗</a>}</article>)}</div></div></section>}

        <CommercialTimeline industryLabel={content.industryLabel} process={content.process} />

        <section className={`${styles.section} ${styles.cream}`}><div className={styles.shell}><div className={styles.whyGrid}><div className={styles.whyIntro}><span className={styles.kicker} data-cm-reveal>{content.whyUsTag ?? 'Why Growth Escalators'}</span><h2 data-cm-reveal>{content.whyUsHeadline ?? 'One team accountable to the commercial outcome.'}</h2></div><div className={styles.whyList}>{content.whyUs.map((item, index) => <article key={item.title} data-cm-card><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></div></div></section>

        <CommercialEngagement industryLabel={content.industryLabel} />

        {content.videoTestimonials.length > 0 && <VideoTestimonialsShorts testimonials={content.videoTestimonials} tag={content.videoTestimonialsTag} headline={content.videoTestimonialsHeadline} subhead={content.videoTestimonialsSubhead} />}

        <section className={`${styles.section} ${styles.paper}`}><div className={styles.shell}><div className={styles.faqGrid}><div><span className={styles.kicker} data-cm-reveal>{content.faqsTag ?? 'FAQ'}</span><h2 data-cm-reveal>{content.faqsHeadline ?? `Questions about ${content.industryLabel ?? 'working together'}`}</h2><p data-cm-reveal>Clear answers before the call. If something is specific to your situation, send it with the audit request and we will review it before speaking.</p></div><div className={styles.faqList}>{content.faqs.map((item, index) => <details key={item.q} className={styles.faqItem} data-cm-card open={index === 0}><summary><span>0{index + 1}</span><strong>{item.q}</strong><b>+</b></summary><p>{item.a}</p></details>)}</div></div></div></section>

        <CommercialNextSteps industryLabel={content.industryLabel} />
        <CommercialLeadForm source={source} headline={positioning.auditTitle} subhead={positioning.auditSubhead} tag="Free diagnostic audit" industryLabel={content.industryLabel} />

        {content.relatedResources && content.relatedResources.links.length > 0 && <section className={`${styles.section} ${styles.lavender}`}><div className={styles.shell}><div className={styles.sectionHead}><div><span className={styles.kicker} data-cm-reveal>{content.relatedResources.tag ?? 'Not ready to talk yet?'}</span><h2 data-cm-reveal>{content.relatedResources.headline ?? 'Go deeper.'}</h2></div><p data-cm-reveal>{content.relatedResources.subhead ?? 'If you are still researching, use the route that best matches the problem you are trying to solve.'}</p></div><div className={styles.resourceList}>{content.relatedResources.links.map((item, index) => <Link href={item.href} key={item.href} data-cm-card><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.blurb}</small><b>↗</b></Link>)}</div></div></section>}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
