import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import EditorialVisual from '@/components/blog/EditorialVisual'
import { formatPostDate, getAllPosts, getFeaturedPost } from '@/lib/blog'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Insights — Growth, Performance, Commerce & AI',
  description:
    'Field notes, playbooks and points of view on performance marketing, ecommerce growth, creative, SEO, AI automation and building better growth systems.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Insights — Growth Escalators',
    description:
      'Growth thinking built from the work: performance, commerce, creative, search, AI and scalable acquisition systems.',
    url: '/blog',
    type: 'website',
  },
}

const CATEGORY_ORDER = [
  'Performance',
  'Commerce & CRO',
  'Creative',
  'AI & Automation',
  'SEO & Organic',
  'Growth Strategy',
] as const

export default function BlogIndex() {
  const posts = getAllPosts()
  const featured = getFeaturedPost()
  const latest = posts.filter((post) => post.slug !== featured?.slug).slice(0, 8)
  const categories = CATEGORY_ORDER
    .map((name) => ({ name, count: posts.filter((post) => post.categoryLabel === name).length }))
    .filter((item) => item.count > 0)

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="insights-title">
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Insights / Growth intelligence</p>
                <h1 id="insights-title">Ideas for finding<br />and compounding growth.</h1>
              </div>
              <div className={styles.heroAside}>
                <p>
                  Performance, commerce, creative, search and AI — written from the work, not from the sidelines.
                  Practical thinking for teams that need better decisions, not more marketing noise.
                </p>
                <div className={styles.heroRule}>
                  <span>{posts.length} field notes</span>
                  <span>Built in Jaipur · applied globally</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {featured && (
          <section className={styles.featuredSection} aria-labelledby="featured-insight">
            <div className={styles.shell}>
              <div className={styles.sectionTop}>
                <p className={styles.eyebrow}>Featured intelligence</p>
                <Link href="#latest" className={styles.textLink}>Browse latest ↓</Link>
              </div>
              <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
                <EditorialVisual
                  title={featured.title}
                  category={featured.categoryLabel}
                  typeLabel={featured.contentTypeLabel}
                  tone={featured.gradient}
                />
                <div className={styles.featuredCopy}>
                  <div className={styles.meta}>
                    <span>{featured.categoryLabel}</span>
                    <span>{featured.contentTypeLabel}</span>
                    <span>{featured.readingTimeMins} min</span>
                  </div>
                  <h2 id="featured-insight">{featured.title}</h2>
                  <p>{featured.description}</p>
                  <div className={styles.featuredFooter}>
                    <span>{formatPostDate(featured.date)}</span>
                    <strong>Read insight ↗</strong>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {categories.length > 0 && (
          <section className={styles.categoryBand} aria-label="Insight categories">
            <div className={styles.shell}>
              <div className={styles.categoryGrid}>
                {categories.map((category, index) => (
                  <div className={styles.categoryItem} key={category.name}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{category.name}</strong>
                    <small>{category.count} article{category.count === 1 ? '' : 's'}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="latest" className={styles.latest} aria-labelledby="latest-heading">
          <div className={styles.shell}>
            <div className={styles.latestHeading}>
              <div>
                <p className={styles.eyebrow}>Latest intelligence</p>
                <h2 id="latest-heading">Useful enough<br />to change the work.</h2>
              </div>
              <p>
                Each article is built around a decision, system or growth problem. No filler posts written just to
                occupy a keyword.
              </p>
            </div>

            <div className={styles.grid}>
              {latest.map((post, index) => (
                <Link href={`/blog/${post.slug}`} className={styles.card} key={post.slug}>
                  <EditorialVisual
                    title={post.title}
                    category={post.categoryLabel}
                    typeLabel={post.contentTypeLabel}
                    tone={post.gradient}
                    compact
                  />
                  <div className={styles.cardBody}>
                    <div className={styles.cardIndex}>{String(index + 2).padStart(2, '0')}</div>
                    <div className={styles.meta}>
                      <span>{post.categoryLabel}</span>
                      <span>{post.contentTypeLabel}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className={styles.cardFooter}>
                      <span>{formatPostDate(post.date)} · {post.readingTimeMins} min</span>
                      <strong>↗</strong>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {posts.length === 0 && (
              <p className={styles.empty}>The first field notes are being prepared.</p>
            )}
          </div>
        </section>

        <section className={styles.editorialPromise}>
          <div className={styles.shell}>
            <div className={styles.promiseGrid}>
              <p className={styles.eyebrow}>Our editorial rule</p>
              <h2>Write from evidence.<br />Explain the decision.<br />Give the reader a next move.</h2>
              <p>
                That structure now powers every Growth Escalators article — whether it is a playbook, comparison,
                case study, framework, point of view or research note.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
