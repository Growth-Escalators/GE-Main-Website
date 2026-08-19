'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'
import EditorialVisual from './EditorialVisual'
import styles from './InsightsExplorer.module.css'

interface InsightsExplorerProps {
  posts: PostMeta[]
}

const ALL = 'All'

export default function InsightsExplorer({ posts }: InsightsExplorerProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL)
  const [format, setFormat] = useState(ALL)

  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    posts.forEach((post) => counts.set(post.categoryLabel, (counts.get(post.categoryLabel) ?? 0) + 1))
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])
  }, [posts])

  const formats = useMemo(() => {
    const counts = new Map<string, number>()
    posts.forEach((post) => counts.set(post.contentTypeLabel, (counts.get(post.contentTypeLabel) ?? 0) + 1))
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])
  }, [posts])

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return posts.filter((post) => {
      const categoryMatch = category === ALL || post.categoryLabel === category
      const formatMatch = format === ALL || post.contentTypeLabel === format
      const queryMatch = !needle || [
        post.title,
        post.description,
        post.categoryLabel,
        post.contentTypeLabel,
        post.author,
        ...post.tags,
      ].join(' ').toLowerCase().includes(needle)
      return categoryMatch && formatMatch && queryMatch
    })
  }, [posts, query, category, format])

  const clearFilters = () => {
    setQuery('')
    setCategory(ALL)
    setFormat(ALL)
  }

  const activeFilters = Boolean(query.trim()) || category !== ALL || format !== ALL

  return (
    <section className={styles.section} id="latest" aria-labelledby="latest-heading">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>Latest content</p>
          <h2 id="latest-heading">Find the useful answer faster.</h2>
        </div>
        <p>
          Search every Growth Escalators field note by topic or format. All articles remain rendered and linked on the
          page by default so discovery works for readers, search engines and answer engines alike.
        </p>
      </div>

      <div className={styles.explorer}>
        <aside className={styles.filters} aria-label="Filter insights">
          <div className={styles.searchBlock}>
            <label htmlFor="insights-search">Search insights</label>
            <input
              id="insights-search"
              type="search"
              placeholder="Search topics, channels, problems…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className={styles.filterGroup}>
            <p>Topics</p>
            <button
              type="button"
              className={category === ALL ? styles.active : undefined}
              onClick={() => setCategory(ALL)}
            >
              <span>All topics</span><small>{posts.length}</small>
            </button>
            {categories.map(([name, count]) => (
              <button
                type="button"
                key={name}
                className={category === name ? styles.active : undefined}
                onClick={() => setCategory(name)}
              >
                <span>{name}</span><small>{count}</small>
              </button>
            ))}
          </div>

          <div className={styles.filterGroup}>
            <p>Resources</p>
            <button
              type="button"
              className={format === ALL ? styles.active : undefined}
              onClick={() => setFormat(ALL)}
            >
              <span>All formats</span><small>{posts.length}</small>
            </button>
            {formats.map(([name, count]) => (
              <button
                type="button"
                key={name}
                className={format === name ? styles.active : undefined}
                onClick={() => setFormat(name)}
              >
                <span>{name}</span><small>{count}</small>
              </button>
            ))}
          </div>

          {activeFilters && (
            <button type="button" className={styles.clear} onClick={clearFilters}>Clear filters ↺</button>
          )}
        </aside>

        <div className={styles.results}>
          <div className={styles.resultsTop} aria-live="polite">
            <span>{filtered.length} insight{filtered.length === 1 ? '' : 's'}</span>
            {activeFilters && <button type="button" onClick={clearFilters}>Reset</button>}
          </div>

          <div className={styles.grid}>
            {filtered.map((post, index) => (
              <article className={styles.card} key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={styles.visualLink} aria-label={`Read ${post.title}`}>
                  <EditorialVisual
                    title={post.title}
                    category={post.categoryLabel}
                    typeLabel={post.contentTypeLabel}
                    tone={post.gradient}
                    compact
                  />
                </Link>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{post.categoryLabel}</span>
                    <span>{post.contentTypeLabel}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.description}</p>
                  <div className={styles.cardFooter}>
                    <div>
                      <strong>{post.author}</strong>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</span>
                    </div>
                    <div className={styles.readMeta}>
                      <span>{post.readingTimeMins} min read</span>
                      <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>↗</Link>
                    </div>
                  </div>
                  <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.noResults}>
              <strong>No matching insight.</strong>
              <p>Try a broader topic or reset the filters.</p>
              <button type="button" onClick={clearFilters}>Show all insights</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
