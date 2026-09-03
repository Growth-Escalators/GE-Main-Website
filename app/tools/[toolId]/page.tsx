import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import BlogGrowthTool from '@/components/blog/BlogGrowthTool'
import { GROWTH_TOOL_IDS, getGrowthTool } from '@/lib/growthTools'
import styles from '../tools.module.css'

const SITE = 'https://www.growthescalators.com'

export function generateStaticParams() {
  return GROWTH_TOOL_IDS.map((toolId) => ({ toolId }))
}

export function generateMetadata({ params }: { params: { toolId: string } }): Metadata {
  const tool = getGrowthTool(params.toolId)
  if (!tool) return { title: 'Growth Tool not found' }

  return {
    title: `${tool.shortTitle} — Free Growth Tool`,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.id}` },
    openGraph: {
      title: `${tool.shortTitle} — Growth Escalators`,
      description: tool.description,
      url: `/tools/${tool.id}`,
      type: 'website',
    },
  }
}

export default function GrowthToolPage({ params }: { params: { toolId: string } }) {
  const tool = getGrowthTool(params.toolId)
  if (!tool) notFound()

  const toolJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.shortTitle,
    url: `${SITE}/tools/${tool.id}`,
    description: tool.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    provider: {
      '@type': 'Organization',
      name: 'Growth Escalators',
      url: SITE,
    },
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
        />
        <section className={styles.detailHero}>
          <div className={styles.shell}>
            <Link href="/tools" className={styles.back}>← All Growth Tools</Link>
            <div className={styles.detailHeroGrid}>
              <div>
                <p className={styles.eyebrow}>{tool.eyebrow}</p>
                <h1>{tool.shortTitle}</h1>
              </div>
              <p className={styles.detailIntro}>{tool.description}</p>
            </div>
          </div>
        </section>

        <section className={styles.toolSection}>
          <div className={styles.shell}>
            <BlogGrowthTool
              tool={tool}
              sourcePath={`/tools/${tool.id}`}
              sourceTitle={tool.shortTitle}
              defaultOpen
            />
          </div>
        </section>

        <section className={styles.detailNotes}>
          <div className={styles.shell}>
            <div className={styles.notesGrid}>
              <div className={styles.detailNote}>
                <span>What this is</span>
                <strong>A decision aid</strong>
                <p>The output is generated from your inputs and transparent scoring or arithmetic. It is designed to help you ask better questions before changing spend, a store or an agency relationship.</p>
              </div>
              <div className={styles.detailNote}>
                <span>What this is not</span>
                <strong>Not a GE quote</strong>
                <p>Growth Escalators service pricing is intentionally not built into these V1 tools. The result is also not a financial forecast or performance guarantee.</p>
              </div>
              <div className={styles.detailNote}>
                <span>If you want help</span>
                <strong>Ask for a second opinion</strong>
                <p>You can reply to the result email with the relevant store, account or business context. We can then tell you what we would investigate first before discussing any engagement.</p>
              </div>
            </div>
            <Link href="/blog" className={styles.footerAction}>Read the Growth Library ↗</Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
