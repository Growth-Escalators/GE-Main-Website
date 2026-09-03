import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import BlogGrowthTool from '@/components/blog/BlogGrowthTool'
import EditorialVisual from '@/components/blog/EditorialVisual'
import { resolveGrowthTool } from '@/lib/growthTools'
import {
  getAllPostSlugs,
  getPost,
  getRelatedPosts,
  formatPostDate,
  type Post,
} from '@/lib/blog'
import styles from './post.module.css'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return { title: 'Not found' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
      ...(post.heroImage ? { images: [{ url: post.heroImage, alt: post.title }] } : {}),
    },
    twitter: {
      card: post.heroImage ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.description,
      ...(post.heroImage ? { images: [post.heroImage] } : {}),
    },
  }
}

function ArticleJsonLd({ post }: { post: Post }) {
  const isTeamAuthor = /growth escalators|\bteam\b/i.test(post.author)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      '@type': isTeamAuthor ? 'Organization' : 'Person',
      name: post.author,
      ...(isTeamAuthor ? { '@id': 'https://www.growthescalators.com/#organization' } : {}),
    },
    ...(post.reviewedBy
      ? { reviewedBy: { '@type': 'Person', name: post.reviewedBy } }
      : {}),
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.growthescalators.com/#organization',
      name: 'Growth Escalators',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.growthescalators.com/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.growthescalators.com/blog/${post.slug}`,
    },
    about: post.categoryLabel,
    keywords: post.tags.join(', '),
    ...(post.heroImage ? { image: `https://www.growthescalators.com${post.heroImage}` } : {}),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.growthescalators.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.growthescalators.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.growthescalators.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post, 3)
  const growthTool = resolveGrowthTool(post)

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <ArticleJsonLd post={post} />

        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link href="/blog" className={styles.backLink}>← All insights</Link>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.heroMeta}>
                  <span>{post.categoryLabel}</span>
                  <span>{post.contentTypeLabel}</span>
                  <span>{post.readingTimeMins} min read</span>
                </div>
                <h1>{post.title}</h1>
                <p className={styles.dek}>{post.description}</p>
                <div className={styles.byline}>
                  <div>
                    <strong>{post.author}</strong>
                    {post.reviewedBy && <span>Reviewed by {post.reviewedBy}</span>}
                  </div>
                  <div>
                    <strong>{formatPostDate(post.date)}</strong>
                    {post.updated && <span>Updated {formatPostDate(post.updated)}</span>}
                  </div>
                </div>
              </div>
              {post.heroImage ? (
                <figure className={styles.heroMedia}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.heroImage} alt={post.title} />
                  <figcaption>{post.categoryLabel} / {post.contentTypeLabel}</figcaption>
                </figure>
              ) : (
                <EditorialVisual
                  title={post.title}
                  category={post.categoryLabel}
                  typeLabel={post.contentTypeLabel}
                  tone={post.gradient}
                />
              )}
            </div>
          </div>
        </section>

        <section className={styles.articleSection}>
          <div className={styles.shell}>
            <div className={styles.articleGrid}>
              <aside className={styles.rail}>
                <div className={styles.railSticky}>
                  <p className={styles.railLabel}>In this article</p>
                  {post.headings.length > 0 ? (
                    <nav aria-label="Article sections">
                      {post.headings.map((heading) => (
                        <a key={heading.id} href={`#${heading.id}`}>{heading.text}</a>
                      ))}
                    </nav>
                  ) : (
                    <span className={styles.railEmpty}>A focused field note with no detours.</span>
                  )}
                  <div className={styles.railRule} />
                  <span>{post.categoryLabel}</span>
                  <span>{post.readingTimeMins} min read</span>
                  {growthTool && (
                    <>
                      <div className={styles.railRule} />
                      <span>Free tool: {growthTool.shortTitle}</span>
                      <a href={`#${growthTool.id}-${post.slug}`}>Use the tool ↓</a>
                    </>
                  )}
                </div>
              </aside>

              <article className={styles.article}>
                <div className={styles.takeaways}>
                  <div>
                    <span>Quick read</span>
                    <strong>The useful part, first.</strong>
                  </div>
                  {post.keyTakeaways && post.keyTakeaways.length > 0 ? (
                    <ul>
                      {post.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
                    </ul>
                  ) : (
                    <p className={styles.quickSummary}>{post.description}</p>
                  )}
                </div>

                <div className={styles.prose} dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

                {growthTool && (
                  <BlogGrowthTool
                    tool={growthTool}
                    postSlug={post.slug}
                    postTitle={post.title}
                  />
                )}

                <div className={styles.endCta}>
                  <p>{growthTool ? 'Need a second opinion?' : 'Turn the insight into an operating decision.'}</p>
                  <h2>{growthTool ? 'Want us to sanity-check the result against the real business?' : 'Want help applying this to your growth system?'}</h2>
                  <span>
                    {growthTool
                      ? 'Share the relevant store, account or funnel context and we’ll tell you what we would investigate first. No public GE service pricing is baked into the tool.'
                      : 'We can review the relevant acquisition, website, conversion or delivery context and point out the highest-leverage next checks before discussing an engagement.'}
                  </span>
                  <Link href={post.ctaHref ?? '/contact'} className={styles.ctaButton}>
                    {post.ctaLabel ?? 'Ask for a second opinion'} ↗
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.shell}>
              <div className={styles.relatedHeading}>
                <div>
                  <p>Keep exploring</p>
                  <h2>Adjacent ideas.<br />Same growth system.</h2>
                </div>
                <Link href="/blog">View all insights ↗</Link>
              </div>
              <div className={styles.relatedGrid}>
                {related.map((item, index) => (
                  <Link href={`/blog/${item.slug}`} className={styles.relatedCard} key={item.slug}>
                    <EditorialVisual
                      title={item.title}
                      category={item.categoryLabel}
                      typeLabel={item.contentTypeLabel}
                      tone={item.gradient}
                      compact
                    />
                    <div className={styles.relatedBody}>
                      <span>{String(index + 1).padStart(2, '0')} / {item.categoryLabel}</span>
                      <h3>{item.title}</h3>
                      <p>{formatPostDate(item.date)} · {item.readingTimeMins} min</p>
                    </div>
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
