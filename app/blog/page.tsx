import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import { getAllPosts, formatPostDate } from '@/lib/blog'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Marketing Blog — AI-First Playbooks & Field Notes',
  description: 'AI-first marketing playbooks for doctors, roofers & growing brands — lessons from ₹10Cr+ in ad spend. No fluff, no theory.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Marketing Blog — Growth Escalators',
    description: 'AI-first marketing playbooks for doctors, roofers & growing brands. Lessons from ₹10Cr+ in ad spend.',
    url: '/blog',
    type: 'website',
  },
}

const START_HERE = [
  { label: 'D2C & Ecommerce', href: '/d2c', copy: 'Paid media, creative, CRO, retention and ecommerce economics.' },
  { label: 'Healthcare', href: '/doctors', copy: 'Patient acquisition, local search, trust and booking journeys.' },
  { label: 'B2B Pipeline', href: '/b2b-lead-generation-agency', copy: 'ICP, qualified pipeline, long-cycle nurture and sales handoff.' },
  { label: 'Jaipur Growth', href: '/performance-marketing-agency-jaipur', copy: 'Performance marketing and local commercial search intent.' },
]

export default function BlogIndex() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <span className={styles.kicker}>PLAYBOOKS · FIELD NOTES · COMMERCIAL THINKING</span>
            <h1>INSIGHTS FOR<br />GROWTH OPERATORS.</h1>
            <div className={styles.heroBottom}>
              <p>Practical writing on performance marketing, D2C economics, healthcare growth, B2B pipeline and the systems behind websites and AI-enabled delivery.</p>
              <div><strong>{posts.length}</strong><span>published field notes</span></div>
            </div>
          </div>
        </section>

        {featured && (
          <section className={styles.featured}>
            <div className={styles.shell}>
              <Link href={`/blog/${featured.slug}`} className={styles.featuredGrid}>
                <div className={`${styles.featuredVisual} ${styles[`grad_${featured.gradient ?? 'mixed'}`]}`}>
                  <span>FEATURED NOTE</span>
                  <strong>{featured.title}</strong>
                  <small>{featured.tags.slice(0, 3).join(' · ')}</small>
                </div>
                <div className={styles.featuredCopy}>
                  <span className={styles.kicker}>LATEST / SELECTED</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <div className={styles.metaLine}><span>{formatPostDate(featured.date)}</span><span>{featured.readingTimeMins} min read</span></div>
                  <b>Read the field note ↗</b>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className={styles.startHere}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}><span className={styles.kicker}>START BY PROBLEM</span><h2>Go deeper where the commercial question is.</h2></div>
            <div className={styles.startGrid}>{START_HERE.map((item, index) => <Link href={item.href} key={item.href}><span>0{index + 1}</span><strong>{item.label}</strong><p>{item.copy}</p><b>Explore ↗</b></Link>)}</div>
          </div>
        </section>

        <section className={styles.library}>
          <div className={styles.shell}>
            <div className={styles.sectionHead}><span className={styles.kicker}>THE LIBRARY</span><h2>Ideas that should survive contact with the numbers.</h2></div>
            {rest.length === 0 ? <p>No additional posts yet.</p> : (
              <div className={styles.grid}>
                {rest.map((post, index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                    <div className={`${styles.thumb} ${styles[`grad_${post.gradient ?? 'mixed'}`]}`}><span>0{String(index + 2).padStart(2, '0')}</span><strong>{post.title}</strong></div>
                    <div className={styles.cardCopy}>
                      <div className={styles.tags}>{post.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <div className={styles.metaLine}><span>{formatPostDate(post.date)}</span><span>{post.readingTimeMins} min</span></div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className={styles.close}>
          <div className={styles.shell}><span className={styles.kicker}>FROM READING TO ACTION</span><h2>Know the theory already?<br />Let’s diagnose the business.</h2><Link href="/contact">Get a free audit ↗</Link></div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
