import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, getAllPosts } from '@/lib/blog'
import styles from './HomepageReference.module.css'

const PROOF = [
  { value: '187+', label: 'brands scaled' },
  { value: '97%', label: 'client retention' },
  { value: '₹10Cr+', label: 'ad spend managed' },
  { value: '4.9/5', label: 'Google rating' },
]

const BRANDS = [
  'Paraiso Comfortwears',
  'Elixzor',
  'Dr. Dheeraj Dubay',
  'SN Herbals',
  'Credo World',
  'Yellow Diaries',
]

const CAPABILITIES = [
  {
    number: '01',
    kicker: 'Performance Marketing',
    title: 'Demand that is accountable to revenue.',
    copy:
      'Media buying, funnel strategy and conversion work operate as one system — so spend is judged by business outcomes, not platform vanity metrics.',
    links: ['Meta Ads', 'Google Ads', 'YouTube', 'CRO & Funnels'],
    href: '/services',
    visual: 'performance',
  },
  {
    number: '02',
    kicker: 'Web & Commerce',
    title: 'The experience after the click matters just as much.',
    copy:
      'Shopify, Next.js and landing experiences engineered for speed, clarity and conversion — built to make paid acquisition work harder.',
    links: ['Shopify', 'Next.js', 'Landing Pages', 'Conversion UX'],
    href: '/portfolio',
    visual: 'commerce',
  },
  {
    number: '03',
    kicker: 'Creative & Organic',
    title: 'Turn customer insight into compounding demand.',
    copy:
      'Creative systems, social content and search-led authority that keep the brand recognizable while giving performance channels more to work with.',
    links: ['Creative Systems', 'Social', 'SEO', 'Content'],
    href: '/services',
    visual: 'creative',
  },
  {
    number: '04',
    kicker: 'Technology & Talent',
    title: 'Build the tools — and the team — behind the growth.',
    copy:
      'AI automation, software delivery and India-based technology staffing connect execution capacity directly to the growth roadmap.',
    links: ['AI & Automation', 'Software', 'GrowthBot', 'Technology Staffing'],
    href: '/staffing',
    visual: 'technology',
  },
] as const

const CASES = [
  {
    client: 'Paraiso Comfortwears',
    category: 'D2C · Performance Marketing',
    metric: '1.9× → 3.2×',
    metricLabel: 'ROAS',
    result: '6× revenue in 60 days',
    description:
      'A connected paid-media and conversion programme focused on profitable acquisition, not isolated campaign activity.',
    className: styles.caseParaiso,
    mediaLabel: 'Paraiso campaign media',
  },
  {
    client: 'Elixzor',
    category: 'Performance · Full Funnel',
    metric: '10×',
    metricLabel: 'ROAS',
    result: '₹3.2Cr+ revenue',
    description:
      'Full-funnel acquisition built around a clear offer, stronger lead quality and disciplined media scaling.',
    className: styles.caseElixzor,
    mediaLabel: 'Elixzor performance media',
  },
  {
    client: 'Dr. Dheeraj Dubay',
    category: 'Healthcare · Lead Generation',
    metric: '35,000+',
    metricLabel: 'leads',
    result: 'Patient acquisition at scale',
    description:
      'Healthcare growth combining demand generation, reputation and a conversion path built around patient intent.',
    className: styles.caseDubay,
    mediaLabel: 'Dr. Dheeraj Dubay campaign media',
  },
]

function Arrow() {
  return <span aria-hidden>↗</span>
}

export default function HomepageReference() {
  const posts = getAllPosts().slice(0, 4)
  const featuredPost = posts[0]
  const supportingPosts = posts.slice(1)

  return (
    <div className={styles.homepage}>
      <section className={styles.hero} aria-labelledby="home-hero-heading">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Growth × Technology × Talent</p>
            <h1 id="home-hero-heading" className={styles.heroTitle}>
              <span>GROWTH,</span>
              <span className={styles.heroAccent}>ENGINEERED.</span>
            </h1>
            <p className={styles.heroLead}>
              We plan the media, build the technology behind it, and staff the people to run it —
              one connected team accountable to the growth you can measure.
            </p>
            <div className={styles.heroActions}>
              <Link href="/#book" className={styles.primaryCta}>
                Get Free Audit <Arrow />
              </Link>
              <Link href="/work" className={styles.textLink}>
                See the work <Arrow />
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Growth Escalators work and capability montage">
            <div className={styles.heroImage}>
              <Image
                src="/portfolio/hero.png"
                alt="Growth Escalators portfolio work"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div className={styles.heroVisualCopy}>
              <span>One connected growth system</span>
              <strong>Media / Commerce / AI / Talent</strong>
            </div>
            <div className={styles.heroSignal} aria-hidden>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className={styles.proofRail} aria-label="Growth Escalators proof points">
          {PROOF.map((item) => (
            <div className={styles.proofItem} key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.brands} aria-labelledby="trusted-brands-heading">
        <div className={styles.sectionShell}>
          <div className={styles.brandHeading}>
            <p className={styles.eyebrow} id="trusted-brands-heading">Trusted by growing brands</p>
            <span>Across D2C, healthcare, services and technology</span>
          </div>
        </div>
        <div className={styles.brandMarquee} aria-label={BRANDS.join(', ')}>
          <div className={styles.brandTrack}>
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <span aria-hidden={index >= BRANDS.length} key={`${brand}-${index}`}>{brand}</span>
            ))}
          </div>
        </div>
        <div className={styles.missingLogos}>
          <span>CLIENT LOGO REQUIRED — Odra Organics</span>
          <span>CLIENT LOGO REQUIRED — Cklakart</span>
        </div>
      </section>

      <section id="industries" className={styles.capabilities} aria-labelledby="capabilities-heading">
        <div className={styles.sectionShell}>
          <div className={styles.chapterIntro}>
            <p className={styles.eyebrow}>Connected capabilities</p>
            <h2 id="capabilities-heading">One growth system. Multiple levers.</h2>
            <p>
              Strategy does not stop at the ad account. We move across acquisition, experience,
              technology and execution capacity depending on what is constraining growth.
            </p>
          </div>

          <div className={styles.capabilityList}>
            {CAPABILITIES.map((capability) => (
              <article className={styles.capability} key={capability.number}>
                <div className={styles.capabilityIndex}>{capability.number}</div>
                <div className={styles.capabilityCopy}>
                  <p className={styles.capabilityKicker}>{capability.kicker}</p>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <ul aria-label={`${capability.kicker} capabilities`}>
                    {capability.links.map((link) => <li key={link}>{link}</li>)}
                  </ul>
                  <Link href={capability.href} className={styles.textLink}>
                    Explore capability <Arrow />
                  </Link>
                </div>
                <CapabilityVisual type={capability.visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="work-heading">
        <div className={styles.sectionShell}>
          <div className={styles.workHeading}>
            <div>
              <p className={styles.eyebrow}>Featured work</p>
              <h2 id="work-heading">Proof should be impossible to miss.</h2>
            </div>
            <Link href="/work" className={styles.lightLink}>
              View all work <Arrow />
            </Link>
          </div>

          <div className={styles.caseList}>
            {CASES.map((item, index) => (
              <article className={`${styles.caseStudy} ${item.className}`} key={item.client}>
                <div className={styles.caseTopline}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.category}</span>
                </div>
                <div className={styles.caseGrid}>
                  <div className={styles.caseCopy}>
                    <p className={styles.caseClient}>{item.client}</p>
                    <div className={styles.caseMetric}>
                      <strong>{item.metric}</strong>
                      <span>{item.metricLabel}</span>
                    </div>
                    <p className={styles.caseResult}>{item.result}</p>
                    <p className={styles.caseDescription}>{item.description}</p>
                    <Link href="/work" className={styles.caseLink}>
                      Read the work <Arrow />
                    </Link>
                  </div>
                  <div className={styles.caseMedia} aria-label={`${item.client}: ${item.mediaLabel}`}>
                    <div className={styles.caseMediaFrame}>
                      <span>REAL CASE-STUDY MEDIA SLOT</span>
                      <strong>{item.mediaLabel}</strong>
                      <small>Reserved for verified GE project asset</small>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-heading">
        <div className={styles.sectionShell}>
          <div className={styles.technologyGrid}>
            <div className={styles.technologyCopy}>
              <p className={styles.eyebrow}>Technology · GrowthBot</p>
              <h2 id="technology-heading">Technology that keeps working after the click.</h2>
              <p>
                GrowthBot is the clearest example of how we connect technology to acquisition:
                understand intent, recommend the right service, qualify the opportunity and hand a
                cleaner lead to the team.
              </p>
              <Link href="/services" className={styles.lightLink}>
                Explore technology <Arrow />
              </Link>
            </div>
            <div className={styles.workflow} aria-label="GrowthBot qualification workflow">
              {['Visitor intent', 'Service recommendation', 'Budget & timeline', 'Lead handoff'].map((step, index) => (
                <div className={styles.workflowStep} key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
              <div className={styles.workflowStatus}>
                <span className={styles.statusDot} />
                GrowthBot · Always on
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.people} aria-labelledby="people-heading">
        <div className={styles.sectionShell}>
          <div className={styles.peopleGrid}>
            <div className={styles.peopleCopy}>
              <p className={styles.eyebrow}>The people behind the system</p>
              <h2 id="people-heading">Human-led. AI-enabled. Accountable to outcomes.</h2>
              <p>
                Every account stays close to real operators. Strategy, creative, performance and
                technology work together around the same commercial goal instead of disappearing
                into separate queues.
              </p>
              <div className={styles.peoplePrinciples}>
                <span>Direct strategist access</span>
                <span>Transparent reporting</span>
                <span>Cross-functional execution</span>
              </div>
              <Link href="/about" className={styles.textLink}>
                Meet Growth Escalators <Arrow />
              </Link>
            </div>
            <div className={styles.photoCollage} aria-label="Growth Escalators team">
              <div className={`${styles.photo} ${styles.photoA}`}>
                <Image src="/photos/photo-1.png" alt="Growth Escalators team" fill sizes="(max-width: 900px) 55vw, 28vw" />
              </div>
              <div className={`${styles.photo} ${styles.photoB}`}>
                <Image src="/photos/photo-2.jpeg" alt="Growth Escalators team at work" fill sizes="(max-width: 900px) 45vw, 22vw" />
              </div>
              <div className={`${styles.photo} ${styles.photoC}`}>
                <Image src="/photos/photo-3.jpeg" alt="Growth Escalators people" fill sizes="(max-width: 900px) 45vw, 22vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className={styles.insights} aria-labelledby="insights-heading">
          <div className={styles.sectionShell}>
            <div className={styles.insightsHeading}>
              <div>
                <p className={styles.eyebrow}>Insights & intelligence</p>
                <h2 id="insights-heading">What we are learning from the work.</h2>
              </div>
              <Link href="/blog" className={styles.textLink}>
                All insights <Arrow />
              </Link>
            </div>

            <div className={styles.insightsGrid}>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredInsight}>
                <div className={styles.insightMeta}>
                  <span>{featuredPost.tags[0] ?? 'Growth'}</span>
                  <span>{formatPostDate(featuredPost.date)}</span>
                </div>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.description}</p>
                <span className={styles.insightRead}>Read article <Arrow /></span>
              </Link>
              <div className={styles.supportingInsights}>
                {supportingPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} className={styles.supportingInsight} key={post.slug}>
                    <div className={styles.insightMeta}>
                      <span>{post.tags[0] ?? 'Growth'}</span>
                      <span>{formatPostDate(post.date)}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <span className={styles.insightRead}>Read <Arrow /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={styles.auditLeadIn} aria-label="Free growth audit">
        <div className={styles.sectionShell}>
          <p className={styles.eyebrow}>Your next move</p>
          <h2>Find the constraint. Fix what matters. Scale from there.</h2>
          <p>
            The free audit is the fastest way to see where acquisition, conversion or execution is
            leaking growth before you spend more.
          </p>
          <Link href="/#book" className={styles.primaryCta}>
            Get Free Audit <Arrow />
          </Link>
        </div>
      </section>
    </div>
  )
}

function CapabilityVisual({ type }: { type: (typeof CAPABILITIES)[number]['visual'] }) {
  if (type === 'performance') {
    return (
      <div className={`${styles.capabilityVisual} ${styles.performanceVisual}`} aria-label="Paraiso performance outcome">
        <span className={styles.visualLabel}>Verified outcome · Paraiso</span>
        <strong>3.2×</strong>
        <p>ROAS · up from 1.9×</p>
        <div className={styles.performanceBars} aria-hidden>
          <span /><span /><span /><span /><span />
        </div>
      </div>
    )
  }

  if (type === 'commerce') {
    return (
      <div className={`${styles.capabilityVisual} ${styles.commerceVisual}`}>
        <Image
          src="/portfolio/hero.png"
          alt="Growth Escalators web and commerce portfolio"
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
        />
        <div className={styles.visualCaption}>Web / Commerce / Conversion</div>
      </div>
    )
  }

  if (type === 'creative') {
    return (
      <div className={`${styles.capabilityVisual} ${styles.creativeVisual}`} aria-label="Creative demand system">
        <span>INSIGHT</span>
        <span>→</span>
        <span>CREATIVE</span>
        <span>→</span>
        <span>DEMAND</span>
        <p>One message system across paid, social and search.</p>
      </div>
    )
  }

  return (
    <div className={`${styles.capabilityVisual} ${styles.techVisual}`} aria-label="Technology and staffing system">
      <div>
        <span>BUILD</span>
        <strong>AI + SOFTWARE</strong>
      </div>
      <div>
        <span>STAFF</span>
        <strong>VETTED TECH TALENT</strong>
      </div>
      <div className={styles.techConnector} aria-hidden />
    </div>
  )
}
