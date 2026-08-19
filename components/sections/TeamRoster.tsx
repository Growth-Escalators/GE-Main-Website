import Image from 'next/image'
import styles from './TeamRoster.module.css'

type TeamMember = {
  name: string
  role: string
  index: string
  image?: string
  imagePosition?: string
}

const TEAM: TeamMember[] = [
  { name: 'Jatin', role: 'Founder & Performance Marketing Lead', index: '01' },
  { name: 'Sanskriti', role: 'Lead Graphic Designer', index: '02' },
  { name: 'Kanishk', role: 'Technology Lead & AI Architect', index: '03' },
  { name: 'Sakcham', role: 'CRO & Conversion Specialist', index: '04' },
  { name: 'Harsh', role: 'Creative Director', index: '05' },
  { name: 'Sagar', role: 'Creative Strategist', index: '06' },
  { name: 'Keshav', role: 'Senior Video Editor', index: '07' },
  { name: 'Mayank', role: 'Junior Video Editor', index: '08' },
  {
    name: 'Vishaka',
    role: 'Human Resource',
    index: '09',
    image: '/team/vishaka.webp',
    imagePosition: 'center 24%',
  },
]

export default function TeamRoster() {
  return (
    <section className={styles.section} aria-labelledby="people-heading" data-motion-section="people">
      <div className={styles.shell}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow} data-reveal>Who is behind the work</p>
            <h2 id="people-heading" data-reveal="headline">Small team.<br />Clear ownership.</h2>
          </div>
          <div className={styles.headingSide} data-reveal>
            <p>
              Strategy stays close to execution. Performance, design, conversion, technology, creative,
              video and people operations are owned by specialists who work against the same growth outcome.
            </p>
            <span>Jaipur / India · Growth × Technology</span>
          </div>
        </div>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article className={styles.card} key={member.name} data-card-reveal>
              <div className={`${styles.visual} ${member.image ? styles.visualPhoto : styles.visualPlaceholder}`}>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Growth Escalators`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 980px) 46vw, 30vw"
                    style={{ objectPosition: member.imagePosition }}
                  />
                ) : (
                  <>
                    <span className={styles.initials} aria-hidden>{member.name.slice(0, 2).toUpperCase()}</span>
                    <span className={styles.placeholderLabel} aria-hidden>GE / TEAM</span>
                  </>
                )}
                <span className={styles.index} aria-hidden>{member.index}</span>
              </div>
              <div className={styles.meta}>
                <h3><span className={styles.firstName}>{member.name}</span></h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
