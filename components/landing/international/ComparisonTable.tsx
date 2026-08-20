'use client'

import ui from './InternationalPhase2.module.css'
import type { ComparisonSectionContent } from '@/lib/content/international-landing/types'

export type ComparisonTableProps = { content: ComparisonSectionContent; id?: string }

export default function ComparisonTable({ content, id }: ComparisonTableProps) {
  return (
    <section id={id} aria-label="Comparison" className={ui.section}>
      <div className={ui.shell}>
        <div className={ui.sectionHead}><div><p className={ui.eyebrow}>{content.tag}</p><h2>{content.headline}</h2></div><p>Compare the operating model across the criteria that usually affect speed, control and delivery quality.</p></div>
        <div className={ui.tableWrap}>
          <table className={ui.table}>
            <caption className="sr-only">{content.caption}</caption>
            <thead><tr><th scope="col">Criterion</th>{content.columns.map((column)=><th key={column.key} scope="col" className={column.highlight ? ui.highlight : undefined}>{column.label}</th>)}</tr></thead>
            <tbody>{content.rows.map((row)=><tr key={row.criterion}><th scope="row">{row.criterion}</th>{content.columns.map((column)=><td key={column.key} className={column.key===content.highlightColumnKey ? ui.highlight : undefined}>{row.values[column.key] ?? ''}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
