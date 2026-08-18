import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import BlogLeadCapture from '@/components/blog/BlogLeadCapture'
import { getAllPostSlugs, getPost, getRelatedPosts, formatPostDate, type Post } from '@/lib/blog'
import styles from './post.module.css'
import indexStyles from '../page.module.css'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} — Growth Escalators`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, url: `/blog/${post.slug}`, type: 'article', publishedTime: post.date, authors: [post.author], tags: post.tags },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  }
}

function ArticleJsonLd({ post }: { post: Post }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Growth Escalators', logo: { '@type': 'ImageObject', url: 'https://www.growthescalators.com/logo.webp' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.growthescalators.com/blog/${post.slug}` },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function inferCommercialRoute(post: Post) {
  const haystack = `${post.slug} ${post.tags.join(' ')}`.toLowerCase()
  if (/(doctor|clinic|patient|healthcare)/.test(haystack)) return { href: '/doctors', label: 'Explore healthcare growth' }
  if (/(b2b|linkedin|saas|pipeline)/.test(haystack)) return { href: '/b2b-lead-generation-agency', label: 'Explore B2B pipeline' }
  if (/(d2c|ecommerce|meta|roas|cac|ltv|creative)/.test(haystack)) return { href: '/d2c', label: 'Explore D2C growth' }
  if (/(jaipur|performance)/.test(haystack)) return { href: '/performance-marketing-agency-jaipur', label: 'Explore performance marketing' }
  return { href: '/services', label: 'Explore our growth system' }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const related = getRelatedPosts(post, 3)
  const inferred = inferCommercialRoute(post)
  const commercial = post.ctaHref && post.ctaHref !== '/contact' ? { href: post.ctaHref, label: post.ctaLabel ?? inferred.label } : inferred

  return (
    <>
      <ArticleJsonLd post={post} />
      <Navbar />
      <main className={styles.page}>
        <section className={`${styles.hero} ${indexStyles[`grad_${post.gradient ?? 'mixed'}`]}`}>
          <div className={styles.shell}>
            <Link href="/blog" className={styles.back}>← All field notes</Link>
            <div className={styles.tags}>{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <h1>{post.title}</h1>
            <p className={styles.deck}>{post.description}</p>
            <div className={styles.meta}><span>{post.author}</span><span>{formatPostDate(post.date)}</span><span>{post.readingTimeMins} min read</span></div>
          </div>
        </section>

        <article className={styles.article}>
          <div className={styles.articleGrid}>
            <aside className={styles.rail}>
              <span>APPLY THE IDEA</span>
              <strong>Turn the field note into a business decision.</strong>
              <p>If this is the problem you are actively trying to solve, the relevant commercial page shows the system, proof and audit path.</p>
              <Link href={commercial.href}>{commercial.label} ↗</Link>
              <div className={styles.railMeta}><small>Published</small><b>{formatPostDate(post.date)}</b><small>Reading time</small><b>{post.readingTimeMins} minutes</b></div>
            </aside>

            <div className={styles.content}>
              <div className={styles.prose} dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

              <section className={styles.appliedCta}>
                <span>FROM PLAYBOOK TO EXECUTION</span>
                <h2>Want to know what this means for your numbers?</h2>
                <p>We’ll diagnose the current constraint before recommending another channel, tool or campaign.</p>
                <div><Link href={commercial.href}>{commercial.label} ↗</Link><Link href="/contact">Book a free audit</Link></div>
              </section>

              <BlogLeadCapture postSlug={post.slug} postTitle={post.title} contactHref={commercial.href} />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.shell}>
              <span className={styles.sectionKicker}>KEEP READING</span>
              <h2>Related field notes.</h2>
              <div className={styles.relatedGrid}>
                {related.map((item, index) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className={styles.relatedCard}>
                    <div className={`${styles.relatedVisual} ${indexStyles[`grad_${item.gradient ?? 'mixed'}`]}`}><span>0{index + 1}</span><strong>{item.title}</strong></div>
                    <div><h3>{item.title}</h3><p>{item.description}</p><small>{item.readingTimeMins} min read ↗</small></div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
