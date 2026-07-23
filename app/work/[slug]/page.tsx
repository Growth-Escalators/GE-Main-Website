import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/sections/Footer'
import { CASE_STUDIES } from '@/lib/constants'
import type { CaseStudy } from '@/lib/types'
import styles from './case.module.css'

/* Base URL + logo kept inline (this checkout has no lib/business.ts /
   lib/schema.ts yet) — mirrors the same hardcoded constants already used
   by app/blog/[slug]/page.tsx's ArticleJsonLd. */
const BASE_URL = 'https://www.growthescalators.com'
const LOGO_URL = `${BASE_URL}/logo.webp`

/* ── Static params: prerender every case study at build time ─────────── */
export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

/* ── Per-case metadata: title, description, OG, canonical ────────────── */
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug)
  if (!cs) return { title: 'Not found' }

  const title = `${cs.name} — ${cs.industry} Case Study`
  const description = `${cs.challenge} ${cs.solution}`

  return {
    title: `${title} — Growth Escalators`,
    description,
    alternates: { canonical: `/work/${cs.slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${cs.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/* ── JSON-LD: CreativeWork (case study) + BreadcrumbList ──────────────── */
function CaseStudyJsonLd({ cs }: { cs: CaseStudy }) {
  const url = `${BASE_URL}/work/${cs.slug}`

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#creativework`,
        name: `${cs.name} — ${cs.industry} Case Study`,
        headline: `${cs.name} — ${cs.industry} Case Study`,
        description: cs.challenge,
        about: cs.industry,
        keywords: cs.tags.join(', '),
        url,
        author: {
          '@type': 'Organization',
          name: 'Growth Escalators',
          url: BASE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Growth Escalators',
          logo: {
            '@type': 'ImageObject',
            url: LOGO_URL,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${BASE_URL}/work` },
          { '@type': 'ListItem', position: 3, name: cs.name, item: url },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/* ── Up to N other case studies sharing at least one tag ──────────────── */
function getRelatedCaseStudies(current: CaseStudy, n = 2): CaseStudy[] {
  const others = CASE_STUDIES.filter((c) => c.slug !== current.slug)
  const scored = others.map((c) => ({
    cs: c,
    score: c.tags.filter((t) => current.tags.includes(t)).length,
  }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, n).map((s) => s.cs)
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug)
  if (!cs) notFound()
  const related = getRelatedCaseStudies(cs, 2)

  return (
    <div className={styles.page}>
      <CaseStudyJsonLd cs={cs} />

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={`${styles.headerInner} container-x`}>
          <Link href="/" className={styles.logo} aria-label="Growth Escalators home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.webp"
              alt="Growth Escalators"
              loading="eager"
            />
          </Link>
          <Link href="/contact" className={`btn-primary ${styles.headerCta}`}>
            Book a Free Call
          </Link>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className={styles.hero} style={{ background: cs.gradient }}>
        <div className={`${styles.heroInner} container-x`}>
          <Link href="/work" className={styles.backLink}>
            ← All case studies
          </Link>
          <span className={styles.heroBadge}>Case Study</span>
          <h1 className={styles.heroTitle}>{cs.name}</h1>
          <p className={styles.heroIndustry}>{cs.industry}</p>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────────────────────────── */}
      <section className={styles.body}>
        <div className={`${styles.bodyInner} container-x`}>
          {/* Challenge / Solution narrative */}
          <div className={styles.narrative}>
            <div className={`${styles.narrativeCard} glass`}>
              <span className={styles.narrativeLabel}>The Challenge</span>
              <p className={styles.narrativeText}>{cs.challenge}</p>
            </div>
            <div className={`${styles.narrativeCard} glass`}>
              <span className={styles.narrativeLabel}>The Solution</span>
              <p className={styles.narrativeText}>{cs.solution}</p>
            </div>
          </div>

          {/* Results */}
          <h2 className={styles.resultsHeadline}>The Results</h2>
          <div className={styles.resultsGrid}>
            {cs.results.map((r, i) => {
              const displayVal = r.from ? `${r.from} → ${r.to}` : (r.value ?? r.metric)
              return (
                <div key={i} className={`${styles.resultCard} glass`}>
                  <div className={styles.resultIcon} aria-hidden>{r.icon}</div>
                  <div className={styles.resultValue}>{displayVal}</div>
                  <div className={styles.resultMetric}>{r.metric}</div>
                </div>
              )
            })}
          </div>

          {/* Tags */}
          <div className={styles.tagsRow}>
            {cs.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          {/* Inline CTA */}
          <div className={`${styles.cta} glass`}>
            <h3 className={styles.ctaTitle}>Want results like {cs.name}&apos;s?</h3>
            <p className={styles.ctaSub}>
              Book a free, no-obligation strategy call. We&apos;ll review what you&apos;re doing today
              and tell you the three highest-ROI fixes — whether you hire us or not.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a free strategy call
            </Link>
          </div>
        </div>
      </section>

      {/* ── MORE CASE STUDIES ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className={styles.more}>
          <div className="container-x">
            <h2 className={styles.moreHeadline}>More case studies</h2>
            <div className={styles.moreGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className={`${styles.moreCard} glass`}>
                  <span className={styles.moreCardIndustry}>{r.industry}</span>
                  <h3 className={styles.moreCardTitle}>{r.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
