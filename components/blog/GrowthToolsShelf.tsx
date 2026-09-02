import Link from 'next/link'
import { GROWTH_TOOL_IDS, GROWTH_TOOLS } from '@/lib/growthTools'
import styles from './GrowthToolsShelf.module.css'

export default function GrowthToolsShelf() {
  return (
    <section className={styles.section} id="growth-tools" aria-labelledby="growth-tools-title">
      <div className={styles.topline}>
        <div>
          <p className={styles.eyebrow}>Growth Tools / D2C V1</p>
          <h2 id="growth-tools-title">Don’t just read it.<br />Run the numbers.</h2>
        </div>
        <div className={styles.intro}>
          <p>
            Free calculators and scorecards for the decisions that usually sit underneath a growth question. Use the working result first; keep it by email only if it is useful.
          </p>
          <Link href="/tools">View all Growth Tools ↗</Link>
        </div>
      </div>

      <div className={styles.grid}>
        {GROWTH_TOOL_IDS.map((id, index) => {
          const tool = GROWTH_TOOLS[id]
          return (
            <Link href={`/tools/${id}`} className={styles.card} key={id}>
              <div className={styles.cardMeta}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{tool.intentCluster.replace(/-/g, ' ')}</span>
              </div>
              <h3>{tool.shortTitle}</h3>
              <p>{tool.description}</p>
              <strong>{tool.ctaLabel} ↗</strong>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
