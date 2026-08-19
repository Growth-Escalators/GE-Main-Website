import styles from './EditorialVisual.module.css'
import type { BlogGradient } from '@/lib/blog'

export default function EditorialVisual({
  title,
  category,
  typeLabel,
  tone = 'mixed',
  compact = false,
}: {
  title: string
  category: string
  typeLabel: string
  tone?: BlogGradient
  compact?: boolean
}) {
  const signal = category.split(/[\s&]+/).filter(Boolean).slice(0, 2).join(' / ').toUpperCase()

  return (
    <div
      className={`${styles.visual} ${styles[`tone_${tone}`]} ${compact ? styles.compact : ''}`}
      aria-hidden
    >
      <div className={styles.grid} />
      <div className={styles.topline}>
        <span>GE / INSIGHT</span>
        <span>{typeLabel}</span>
      </div>
      <div className={styles.orbit} />
      <div className={styles.signal}>{signal || 'GROWTH'}</div>
      <div className={styles.poster}>
        <span>{category}</span>
        <strong>{title}</strong>
      </div>
      <div className={styles.dotMatrix}>
        {Array.from({ length: 20 }).map((_, index) => <i key={index} />)}
      </div>
      <div className={styles.mark}>↗</div>
    </div>
  )
}
