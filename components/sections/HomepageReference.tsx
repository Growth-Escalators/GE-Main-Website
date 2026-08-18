import Image from 'next/image'
import Link from 'next/link'
import { formatPostDate, getAllPosts } from '@/lib/blog'
import HomepageMotion from './HomepageMotion'
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
  'Odra Organics',
]

const SERVICES = [
  {
    title: 'Performance',
    copy: 'Meta, Google and full-funnel media engineered around revenue — not vanity metrics.',
    href: '/services',
    cta: 'Discover performance',
    visual: 'performance',
  },
  {
    title: 'Web & Commerce',
    copy: 'Shopify, Next.js and conversion experiences that make every click work harder.',
    href: '/portfolio',
    cta: 'Discover commerce',
    visual: 'commerce',
  },
  {
    title: 'Creative & Social',
    copy: 'Creative systems and social execution built to turn customer insight into demand.',
    href: '/services',
    cta: 'Discover creative',
    visual: 'creative',
  },
  {
    title: 'Search & Organic',
    copy: 'Search-led authority for the questions, categories and moments your buyers already care about.',
    href: '/services',
    cta: 'Discover search',
    visual: 'search',
  },
  {
    title: 'AI & Automation',
    copy: 'Practical AI workflows, software and GrowthBot experiences connected directly to growth.',
    href: '/services',
    cta: 'Discover AI',
    visual: 'ai',
  },
  {
    eyebrow: 'For ambitious growth teams',
    title: 'Growth Foundation',
    copy: 'Strategy, acquisition, conversion, creative and technology connected into one operating system.',
    href: '/#book',
    cta: 'Build your foundation',
    visual: 'foundation',
    featured: true,
  },
] as const

const CASES = [
  {
    client: 'Paraiso Comfortwears',
    category: 'D2C · Performance',
    title: 'Scaling Paraiso to 6× revenue in 60 days.',
    visual: 'paraiso',
    metrics: [
      ['3.2×', 'ROAS'],
      ['6×', 'revenue growth'],
      ['60', 'days'],
    ],
  },
  {
    client: 'Elixzor',
    category: 'Performance · Full Funnel',
    title: 'Building a profitable acquisition engine around full-funnel performance.',
    visual: 'elixzor',
    metrics: [
      ['10×', 'ROAS'],
      ['₹3.2Cr+', 'revenue'],
      ['Full funnel', 'growth system'],
    ],
  },
  {
    client: 'Dr. Dheeraj Dubay',
    category: 'Healthcare · Lead Generation',
    title: 'Turning paid media into patient acquisition at meaningful scale.',
    visual: 'dheeraj',
    metrics: [
      ['35K+', 'leads'],
      ['Healthcare', 'growth'],
      ['High intent', 'lead journey'],
    ],
  },
] as const

function Arrow() {
  return <span aria-hidden>↗</span>
}

export default function HomepageReference() {
  const posts = getAllPosts().slice(0, 5)
  const featuredPost = posts[0]
  const supportingPosts = posts.slice(1)

  return (
    <div className={styles.homepage}>
      <HomepageMotion />

      <section className={styles.hero} aria-labelledby="home-hero-heading">
        <div className={styles.heroBackdrop} aria-hidden />
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow} data-hero-reveal>Performance marketing · Technology · Talent</p>
            <h1 id="home-hero-heading" className={styles.heroTitle}>
              <span className={styles.heroLine}><i data-hero-line>GROWTH,</i></span>
              <span className={styles.heroLine}><i data-hero-line>ENGINEERED.</i></span>
            </h1>
            <div className={styles.heroBottom} data-hero-reveal>
              <p className={styles.heroLead}>
                One connected team plans the media, builds the technology and brings the execution
                capacity needed to turn growth into something measurable.
              </p>
              <div className={styles.heroActions}>
                <Link href="/#book" className={styles.primaryCta}>Get Free Audit <Arrow /></Link>
                <Link href="/work" className={styles.textLink}>See client results <Arrow /></Link>
              </div>
            </div>
          </div>

          <div className={styles.heroStage} data-hero-reveal>
            <div className={styles.heroStageRail} aria-hidden>
              <span>01 / ACQUISITION</span><span>02 / EXPERIENCE</span><span>03 / TECHNOLOGY</span>
            </div>
            <div className={styles.heroMedia} data-parallax="3">
              <Image src="/portfolio/hero.png" alt="Growth Escalators work montage" fill priority sizes="(max-width: 900px) 92vw, 46vw" />
            </div>
            <div className={styles.heroTeam} data-parallax="5">
              <Image src="/photos/photo-1.png" alt="Growth Escalators team" fill sizes="(max-width: 900px) 45vw, 20vw" />
            </div>
            <div className={styles.heroMetric}>
              <span>PROOF / 01</span>
              <strong>3.2×</strong>
              <small>Paraiso ROAS</small>
            </div>
            <div className={styles.heroTag}>GROWTH × TECH</div>
          </div>
        </div>

        <div className={styles.proofRail} aria-label="Growth Escalators proof points">
          {PROOF.map((item) => (
            <div className={styles.proofItem} key={item.label} data-hero-reveal>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.brands} aria-labelledby="trusted-brands-heading">
        <div className={styles.sectionShell}>
          <div className={styles.brandHeading} data-reveal>
            <p className={styles.eyebrow} id="trusted-brands-heading">Trusted by 187+ growing brands</p>
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
      </section>

      <section id="industries" className={styles.services} aria-labelledby="services-heading">
        <div className={styles.sectionShell}>
          <div className={styles.servicesIntro}>
            <p className={styles.eyebrow} data-reveal>Our connected capabilities</p>
            <h2 id="services-heading" data-reveal="headline">Every growth lever.<br />One connected system.</h2>
            <p data-reveal>
              Acquisition, experience, creative, search and technology work better when they share
              one commercial goal. We connect the pieces so growth compounds instead of fragmenting.
            </p>
            <Link href="/services" className={styles.pillCta} data-reveal>Discover our services</Link>
          </div>

          <div className={styles.serviceGrid}>
            {SERVICES.map((service) => (
              <article
                className={`${styles.serviceCard} ${'featured' in service && service.featured ? styles.serviceFeatured : ''}`}
                key={service.title}
                data-card-reveal
              >
                <div className={styles.serviceContent}>
                  {'eyebrow' in service && service.eyebrow ? <p className={styles.serviceEyebrow}>{service.eyebrow}</p> : null}
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Link href={service.href} className={styles.cardCta}>{service.cta}</Link>
                </div>
                <ServiceVisual type={service.visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="work-heading">
        <div className={styles.sectionShell}>
          <div className={styles.workIntro}>
            <div>
              <p className={styles.eyebrow} data-reveal>Our work</p>
              <h2 id="work-heading" data-reveal="headline">Growth you can see.<br />Proof you can measure.</h2>
            </div>
            <div className={styles.workIntroSide} data-reveal>
              <p>Real business outcomes, surfaced before the process deck.</p>
              <Link href="/work" className={styles.lightPill}>See all work</Link>
            </div>
          </div>

          <div className={styles.caseList}>
            {CASES.map((item) => (
              <article className={styles.caseCard} key={item.client} data-card-reveal>
                <div className={styles.caseMedia} data-media-reveal>
                  <div data-media-inner className={styles.caseMediaInner}>
                    <CaseVisual type={item.visual} client={item.client} />
                  </div>
                </div>
                <div className={styles.caseBody}>
                  <div className={styles.caseCategory}>{item.category}</div>
                  <h3>{item.title}</h3>
                  <Link href="/work" className={styles.caseCta}>Learn more</Link>
                  <div className={styles.caseMetrics}>
                    {item.metrics.map(([value, label]) => (
                      <div className={styles.caseMetric} key={`${item.client}-${value}`}>
                        <span aria-hidden>↗</span>
                        <strong>{value}</strong>
                        <small>{label}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <article className={`${styles.caseCard} ${styles.caseCardFeature}`} data-card-reveal>
              <div className={styles.caseMedia} data-media-reveal>
                <div className={`${styles.caseMediaInner} ${styles.moreWorkMedia}`} data-media-inner>
                  <Image src="/portfolio/hero.png" alt="Growth Escalators selected work" fill sizes="(max-width: 900px) 100vw, 46vw" />
                  <span>GROWTH ESCALATORS / SELECTED WORK</span>
                </div>
              </div>
              <div className={styles.caseBody}>
                <div className={styles.caseCategory}>More proof · More categories</div>
                <h3>See how growth, technology and creative connect across the wider portfolio.</h3>
                <Link href="/work" className={styles.caseCtaAlt}>Explore all case studies</Link>
                <div className={styles.caseFeatureFooter}>
                  <span>D2C</span><span>Healthcare</span><span>Commerce</span><span>Technology</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="technology-heading">
        <div className={styles.sectionShell}>
          <div className={styles.techTop}>
            <div className={styles.techCopy}>
              <p className={styles.eyebrow} data-reveal>Built by Growth Escalators</p>
              <h2 id="technology-heading" data-reveal="headline">Meet your AI growth advantage.</h2>
              <p data-reveal>
                GrowthBot turns website intent into a cleaner commercial conversation — guiding the
                visitor, recommending the right service, qualifying the opportunity and handing it to the team.
              </p>
              <Link href="/services" className={styles.darkPill} data-reveal>Explore technology</Link>
            </div>
            <div className={styles.techBenefits} data-reveal>
              <span>Understand visitor intent</span>
              <span>Recommend relevant services</span>
              <span>Qualify budget & timeline</span>
              <span>Hand off a cleaner lead</span>
            </div>
          </div>

          <div className={styles.botStage} data-media-reveal>
            <div className={styles.botGlow} aria-hidden />
            <div className={styles.botWindow} data-media-inner>
              <div className={styles.botHeader}>
                <div><b>GrowthBot</b><span>AI Growth Consultant</span></div>
                <span className={styles.online}><i /> Online</span>
              </div>
              <div className={styles.botConversation}>
                <div className={styles.botBubble}>Hey 👋 I&apos;m GrowthBot. Are you looking to grow your brand, or just exploring?</div>
                <div className={styles.botChips}><span>I want to grow my brand 🚀</span><span>Just browsing 👀</span></div>
                <div className={styles.botBubble}>Great. What would make the biggest difference right now?</div>
                <div className={styles.botChips}><span>Better ROAS</span><span>More qualified leads</span><span>A better website</span></div>
              </div>
              <div className={styles.botInput}>Ask GrowthBot anything <b>↗</b></div>
            </div>
            <div className={styles.botSignalCard} data-parallax="5"><span>QUALIFICATION</span><strong>Intent → fit → handoff</strong></div>
            <div className={styles.botResultCard} data-parallax="3"><span>ALWAYS ON</span><strong>24 / 7</strong><small>website qualification</small></div>
          </div>
        </div>
      </section>

      <section className={styles.people} aria-labelledby="people-heading">
        <div className={styles.sectionShell}>
          <div className={styles.peopleGrid}>
            <div className={styles.peopleCopy}>
              <p className={styles.eyebrow} data-reveal>The people behind the system</p>
              <h2 id="people-heading" data-reveal="headline">Human-led.<br />AI-enabled.<br />Accountable.</h2>
              <p data-reveal>
                Strategy stays close to the people doing the work. Performance, creative and technology
                operators share the same outcomes instead of disappearing into separate queues.
              </p>
              <Link href="/about" className={styles.pillOutline} data-reveal>Meet the team</Link>
            </div>
            <div className={styles.peopleMedia} data-media-reveal>
              <div className={styles.peopleMain} data-media-inner>
                <Image src="/photos/photo-1.png" alt="Growth Escalators team" fill sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
              <div className={styles.peopleInset} data-parallax="4">
                <Image src="/photos/photo-2.jpeg" alt="Growth Escalators team at work" fill sizes="(max-width: 900px) 45vw, 20vw" />
              </div>
              <div className={styles.peopleLabel}>JAIPUR / INDIA<br />GROWTH × TECHNOLOGY</div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className={styles.insights} aria-labelledby="insights-heading">
          <div className={styles.sectionShell}>
            <div className={styles.insightsHeading}>
              <div>
                <p className={styles.eyebrow} data-reveal>Insights & intelligence</p>
                <h2 id="insights-heading" data-reveal="headline">Thinking built<br />to move the work.</h2>
              </div>
              <Link href="/blog" className={styles.pillOutline} data-reveal>View all insights</Link>
            </div>

            <div className={styles.insightsGrid}>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredInsight} data-card-reveal>
                <div className={styles.insightNumber}>01</div>
                <div className={styles.insightMeta}><span>{featuredPost.tags[0] ?? 'Growth'}</span><span>{formatPostDate(featuredPost.date)}</span></div>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.description}</p>
                <span className={styles.insightRead}>Read article <Arrow /></span>
              </Link>
              <div className={styles.supportingInsights}>
                {supportingPosts.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} className={styles.supportingInsight} key={post.slug} data-card-reveal>
                    <span className={styles.supportingNumber}>{String(index + 2).padStart(2, '0')}</span>
                    <div>
                      <div className={styles.insightMeta}><span>{post.tags[0] ?? 'Growth'}</span><span>{formatPostDate(post.date)}</span></div>
                      <h3>{post.title}</h3>
                    </div>
                    <span className={styles.articleArrow}>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function ServiceVisual({ type }: { type: typeof SERVICES[number]['visual'] }) {
  if (type === 'performance') {
    return (
      <div className={`${styles.serviceVisual} ${styles.performanceVisual}`} aria-hidden>
        <div className={styles.visualRing} />
        <div className={styles.performanceCard}><span>ROAS</span><strong>3.2×</strong><i>↗</i></div>
        <div className={styles.performanceBars}><i /><i /><i /><i /><i /></div>
        <div className={styles.visualCursor}>↗</div>
        <div className={styles.visualWord}>MEDIA</div>
      </div>
    )
  }

  if (type === 'commerce') {
    return (
      <div className={`${styles.serviceVisual} ${styles.commerceVisual}`} aria-hidden>
        <div className={styles.browserMini}>
          <div className={styles.browserDots}><i /><i /><i /></div>
          <div className={styles.browserImage}><Image src="/portfolio/hero.png" alt="" fill sizes="260px" /></div>
        </div>
        <div className={styles.phoneMini}><span>SHOP</span><strong>→</strong></div>
        <div className={styles.commerceTag}>CRO + COMMERCE</div>
      </div>
    )
  }

  if (type === 'creative') {
    return (
      <div className={`${styles.serviceVisual} ${styles.creativeVisual}`} aria-hidden>
        <div className={styles.creativePoster}><span>STOP</span><strong>THE<br />SCROLL.</strong></div>
        <div className={styles.creativeTile}>AD<br />01</div>
        <div className={styles.creativeTileAlt}>SOCIAL</div>
        <div className={styles.visualCursor}>↗</div>
      </div>
    )
  }

  if (type === 'search') {
    return (
      <div className={`${styles.serviceVisual} ${styles.searchVisual}`} aria-hidden>
        <div className={styles.searchBox}><span>growth that compounds</span><b>⌕</b></div>
        <div className={styles.searchResult}><i /><span><b>Growth Escalators</b><small>Performance · Commerce · AI</small></span></div>
        <div className={styles.searchResult}><i /><span><b>High-intent discovery</b><small>Search + content + authority</small></span></div>
        <div className={styles.searchPulse}>SEO</div>
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className={`${styles.serviceVisual} ${styles.aiVisual}`} aria-hidden>
        <div className={styles.aiWindow}>
          <span>GrowthBot</span>
          <div className={styles.aiMessage}>What are you trying to grow?</div>
          <div className={styles.aiChips}><i>ROAS</i><i>Leads</i><i>Website</i></div>
        </div>
        <div className={styles.aiNode}>AI</div>
        <div className={styles.aiLine} />
      </div>
    )
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.foundationVisual}`} aria-hidden>
      <div className={styles.foundationOrbit}><i /><i /><i /></div>
      <div className={styles.foundationPerson}>GE</div>
      <div className={`${styles.foundationBubble} ${styles.foundationBubbleA}`}>Acquisition</div>
      <div className={`${styles.foundationBubble} ${styles.foundationBubbleB}`}>Technology</div>
      <div className={styles.foundationSpark}>✦</div>
    </div>
  )
}

function CaseVisual({ type, client }: { type: typeof CASES[number]['visual']; client: string }) {
  return (
    <div className={`${styles.caseArtwork} ${styles[`caseArtwork_${type}`]}`}>
      <div className={styles.caseArtworkGrid} aria-hidden />
      <span className={styles.caseArtworkLabel}>{client}</span>
      {type === 'paraiso' && (
        <>
          <div className={styles.artPhone}><span>PA</span><strong>3.2×</strong><small>ROAS</small></div>
          <div className={styles.artChart}><i /><i /><i /><i /><i /></div>
          <div className={styles.artBadge}>6× REVENUE</div>
        </>
      )}
      {type === 'elixzor' && (
        <>
          <div className={styles.artMetricHuge}>10×</div>
          <div className={styles.artRibbon}>FULL FUNNEL / PERFORMANCE</div>
          <div className={styles.artDotMatrix}>{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
        </>
      )}
      {type === 'dheeraj' && (
        <>
          <div className={styles.artMedicalRing}><span>35K+</span><small>LEADS</small></div>
          <div className={styles.artJourney}><i /><b /><i /><b /><i /></div>
          <div className={styles.artHealthcare}>PATIENT<br />INTENT</div>
        </>
      )}
    </div>
  )
}
