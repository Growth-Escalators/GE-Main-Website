import TrackedLink from '@/components/analytics/TrackedLink'
import styles from './LegalDocument.module.css'

type Section = {
  title: string
  body: React.ReactNode
}

type LegalDocumentProps = {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  sections: Section[]
}

export default function LegalDocument({ eyebrow, title, intro, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h1>{title}</h1>
            </div>
            <div className={styles.heroAside}>
              <p>{intro}</p>
              <div className={styles.updated}>
                <span>Last updated</span>
                <strong>{lastUpdated}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.documentSection}>
        <div className={styles.shell}>
          <div className={styles.documentGrid}>
            <aside className={styles.rail}>
              <div className={styles.railInner}>
                <p>On this page</p>
                <nav aria-label={`${title} sections`}>
                  {sections.map((section, index) => (
                    <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>
                  ))}
                </nav>
                <div className={styles.contactNote}>
                  <span>Questions?</span>
                  <TrackedLink method="email" href="mailto:jatin@growthescalators.com">
                    jatin@growthescalators.com
                  </TrackedLink>
                </div>
              </div>
            </aside>

            <article className={styles.document}>
              {sections.map((section, index) => (
                <section id={`section-${index + 1}`} className={styles.documentBlock} key={section.title}>
                  <span>0{String(index + 1).padStart(2, '0')}</span>
                  <h2>{section.title}</h2>
                  <div>{section.body}</div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
