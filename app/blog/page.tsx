import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import EditorialVisual from '@/components/blog/EditorialVisual'
import InsightsExplorer from '@/components/blog/InsightsExplorer'
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
  twitter: {
    card: 'summary',
    title: 'Insights — Growth Escalators',
    description: 'Field notes on performance, commerce, creative, search, AI and scalable growth systems.',
  },
}

function InsightsCollectionJsonLd({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.growthescalators.com/blog#collection',
    url: 'https://www.growthescalators.com/blog',
    name: 'Growth Escalators Insights',
    description:
      'Field notes, playbooks and points of view on performance marketing, ecommerce growth, creative, SEO, AI automation and scalable growth systems.',
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
                <p className={styles.eyebrow}>Insights / Growth intelligence</p>
                <h1 id="insights-title">Ideas for finding<br />and compounding growth.</h1>
              </div>
              <div className={styles.heroAside}>
                <p>Performance, commerce, creative, search and AI — written from the work, not from the sidelines. Practical thinking for teams that need better decisions, not more marketing noise.</p>
                <div className={styles.heroRule}><span>{posts.length} field notes</span><span>Built in Jaipur · applied globally</span></div>
              </div>
            </div>
          </div>
        </section>

        {featured && (
          <section className={styles.featuredSection} aria-labelledby="featured-insight">
            <div className={styles.shell}>
              <div className={styles.sectionTop}><p className={styles.eyebrow}>Featured intelligence</p><Link href="#latest" className={styles.textLink}>Browse all insights ↓</Link></div>
              <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
                <EditorialVisual title={featured.title} category={featured.categoryLabel} typeLabel={featured.contentTypeLabel} tone={featured.gradient} />
                <div className={styles.featuredCopy}>
                  <div className={styles.meta}><span>{featured.categoryLabel}</span><span>{featured.contentTypeLabel}</span><span>{featured.readingTimeMins} min</span></div>
                  <h2 id="featured-insight">{featured.title}</h2>
                  <p>{featured.description}</p>
                  <div className={styles.featuredFooter}><span>{featured.author} · {formatPostDate(featured.date)}</span><strong>Read insight ↗</strong></div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <div className={styles.shell}><InsightsExplorer posts={archivePosts} /></div>

        <section className={styles.closingBand}>
          <div className={styles.shell}>
            <div className={styles.closingGrid}>
              <p className={styles.eyebrow}>From insight to action</p>
              <h2>Found the problem?<br />Now fix the system.</h2>
              <div><p>If an article exposed a leak in acquisition, conversion, technology or delivery, we can audit the system and show you the highest-leverage next moves.</p><Link href="/#book" className={styles.closingCta}>Get a free growth audit ↗</Link></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
