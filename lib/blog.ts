/**
 * Blog data layer.
 *
 * Posts live as Markdown files in content/blog/<slug>.md with frontmatter.
 * This module is the single source of truth for reading them.
 */

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type BlogGradient = 'orange' | 'violet' | 'teal' | 'mixed'
export type BlogContentType =
  | 'playbook'
  | 'guide'
  | 'framework'
  | 'comparison'
  | 'case-study'
  | 'opinion'
  | 'list'
  | 'research'

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  updated?: string
  author: string
  reviewedBy?: string
  category?: string
  contentType?: BlogContentType
  tags: string[]
  keyTakeaways?: string[]
  featured?: boolean
  ctaHref?: string
  ctaLabel?: string
  gradient?: BlogGradient
  heroImage?: string
  primaryKeyword?: string
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTimeMins: number
  categoryLabel: string
  contentTypeLabel: string
}

export interface PostHeading {
  id: string
  text: string
}

export interface Post extends PostMeta {
  bodyHtml: string
  bodyMarkdown: string
  headings: PostHeading[]
}

function readPostFile(slug: string): { fm: PostFrontmatter; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)
  return { fm: parsed.data as PostFrontmatter, content: parsed.content }
}

function estimateReadingTime(markdown: string): number {
  const words = markdown.replace(/[#>*_`\-]/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 225))
}

function inferCategory(fm: PostFrontmatter): string {
  if (fm.category?.trim()) return fm.category.trim()
  const title = fm.title.toLowerCase()
  const tags = fm.tags.join(' ').toLowerCase()
  if (/(seo|search|google business|organic|local seo)/.test(title)) return 'SEO & Organic'
  if (/(creative|ugc|social content|ad creative|creative testing|hook)/.test(title)) return 'Creative'
  if (/(d2c|dtc|ecommerce|shopify|cro|ltv|cac|retention)/.test(title)) return 'Commerce & CRO'
  if (/(meta ads|google ads|performance marketing|roas|media buying|ad spend|lead generation)/.test(title)) return 'Performance'
  if (/(\bai\b|artificial intelligence|automation|agent|chatgpt)/.test(title)) return 'AI & Automation'
  if (/(agency|agencies|in-house|freelancer|growth strategy|marketing strategy)/.test(title)) return 'Growth Strategy'
  if (/(seo|search|google-business|organic|local-seo)/.test(tags)) return 'SEO & Organic'
  if (/(creative|ugc|social|content|ad-creative|hooks?)/.test(tags)) return 'Creative'
  if (/(d2c|dtc|ecommerce|shopify|cro|ltv|cac|retention)/.test(tags)) return 'Commerce & CRO'
  if (/(meta-ads|google-ads|performance-marketing|roas|media-buying|ad-spend|lead-generation)/.test(tags)) return 'Performance'
  if (/(\bai\b|ai-marketing|automation|agent|chatgpt)/.test(tags)) return 'AI & Automation'
  return 'Growth Strategy'
}

function inferContentType(fm: PostFrontmatter): BlogContentType {
  if (fm.contentType) return fm.contentType
  const title = fm.title.toLowerCase()
  if (/\bvs\.?\b|\bversus\b/.test(title)) return 'comparison'
  if (/case study|how we|from .* to /.test(title)) return 'case-study'
  if (/^\d+\b|\btools\b|\bideas\b|\bexamples\b/.test(title)) return 'list'
  if (/framework|system|model|method/.test(title)) return 'framework'
  if (/why |what .* gets wrong|prediction|opinion/.test(title)) return 'opinion'
  if (/how to|how much|step-by-step|playbook/.test(title)) return 'playbook'
  return 'guide'
}

function formatContentType(type: BlogContentType): string {
  const labels: Record<BlogContentType, string> = {
    playbook: 'Playbook', guide: 'Guide', framework: 'Framework', comparison: 'Comparison',
    'case-study': 'Case Study', opinion: 'Point of View', list: 'List', research: 'Research',
  }
  return labels[type]
}

function enrichMeta(slug: string, fm: PostFrontmatter, content: string): PostMeta {
  const type = inferContentType(fm)
  return { slug, ...fm, readingTimeMins: estimateReadingTime(content), categoryLabel: inferCategory(fm), contentTypeLabel: formatContentType(type), contentType: type }
}

function decodeBasicEntities(value: string): string {
  return value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

function slugifyHeading(value: string): string {
  return decodeBasicEntities(value).replace(/<[^>]+>/g, '').toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'section'
}

function renderBody(markdown: string): { html: string; headings: PostHeading[] } {
  const rawHtml = marked.parse(markdown, { async: false }) as string
  const headings: PostHeading[] = []
  const seen = new Map<string, number>()
  const html = rawHtml.replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, inner: string) => {
    const text = decodeBasicEntities(inner.replace(/<[^>]+>/g, '')).trim()
    const baseId = slugifyHeading(inner)
    const count = seen.get(baseId) ?? 0
    seen.set(baseId, count + 1)
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`
    headings.push({ id, text })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { html, headings }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs().map((slug) => {
    const file = readPostFile(slug)
    return file ? enrichMeta(slug, file.fm, file.content) : null
  }).filter((p): p is PostMeta => p !== null).sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getFeaturedPost(): PostMeta | null {
  const posts = getAllPosts()
  return posts.find((post) => post.featured) ?? posts[0] ?? null
}

export function getPost(slug: string): Post | null {
  const file = readPostFile(slug)
  if (!file) return null
  const { html, headings } = renderBody(file.content)
  return { ...enrichMeta(slug, file.fm, file.content), bodyHtml: html, bodyMarkdown: file.content, headings }
}

export function getRelatedPosts(current: PostMeta, n = 3): PostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== current.slug)
  const scored = all.map((p) => {
    const tagOverlap = p.tags.filter((t) => current.tags.includes(t)).length
    const categoryBonus = p.categoryLabel === current.categoryLabel ? 3 : 0
    return { post: p, score: tagOverlap + categoryBonus }
  })
  scored.sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
  return scored.slice(0, n).map((s) => s.post)
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
