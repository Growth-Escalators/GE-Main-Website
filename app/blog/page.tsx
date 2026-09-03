import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import EditorialVisual from '@/components/blog/EditorialVisual'
import GrowthToolsShelf from '@/components/blog/GrowthToolsShelf'
import InsightsExplorer from '@/components/blog/InsightsExplorer'
import { formatPostDate, getAllPosts, getFeaturedPost } from '@/lib/blog'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Growth Library — Insights, Calculators & Playbooks',
  description:
    'Practical growth field notes, calculators, scorecards and playbooks for D2C performance, ecommerce, creative, SEO, AI automation and better operating decisions.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Growth Library — Growth Escalators',
    description:
      'Useful growth thinking and tools built from the work: performance, commerce, creative, search, AI and scalable acquisition systems.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Growth Library — Growth Escalators',
    description:
      'Field notes, calculators and playbooks for performance, commerce, creative, search, AI and scalable growth systems.',
  },
}

function InsightsCollectionJsonLd({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.growthescalators.com/blog#collection',
    url: 'https://www.growthescalators.com/blog',
    name: 'Growth Escalators Growth Library',
    description:
      'Practical field notes, calculators, scorecards and playbooks on performance marketing, ecommerce growth, creative, SEO, AI automation and scalable growth systems.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.growthescalators.com/#website',
      name: 'Growth Escalators',
      url: 'https://www.growthescalators.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.growthescalators.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const featured = getFeaturedPost()
  const archivePosts = posts.filter((post) => post.slug !== featured?.slug)

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <InsightsCollectionJsonLd posts={posts} />

        <section className={styles.hero} aria-labelledby="insights-title">
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Growth Library / Insights + tools</p>
                <h1 id="insights-title">Useful enough<br />to act on.</h1>
              </div>
              <div className={styles.heroAside}>
                <p>
                  Practical systems, calculators and field notes for teams trying to make better growth decisions — before they buy another tool, increase spend or hire an agency.
                </p>
                <div className={styles.heroRule}>
                  <span>{posts.length} field notes + 4 live tools</span>
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
                <Link href="#latest" className={styles.textLink}>Browse all insights ↓</Link>
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
                    <span>
                      {featured.author} · {formatPostDate(featured.date)}
                    </span>
                    <strong>Read insight ↗</strong>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <div className={styles.shell}>
          <GrowthToolsShelf />
          <InsightsExplorer posts={archivePosts} />
        </div>

        <section className={styles.closingBand}>
          <div className={styles.shell}>
            <div className={styles.closingGrid}>
              <p className={styles.eyebrow}>From reading to deciding</p>
              <h2>Run the tool.<br />Then ask the better question.</h2>
              <div>
                <p>
                  Our V1 tools intentionally avoid public Growth Escalators pricing. They help you understand the economics, risks or gaps first. If you want context on the result, reply to the analysis or ask us for a second opinion.
                </p>
                <Link href="/tools" className={styles.closingCta}>Explore Growth Tools ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
