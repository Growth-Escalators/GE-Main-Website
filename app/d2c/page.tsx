import IndustryLandingPage from '@/components/landing/IndustryLandingPage'
import D2CRevenueSystem from '@/components/landing/D2CRevenueSystem'
import { D2C_CONTENT } from './_data/content'
import styles from './D2CPageDensity.module.css'

export default function D2CPage() {
  const content = {
    ...D2C_CONTENT,
    hero: {
      ...D2C_CONTENT.hero,
      image: undefined,
    },
    showcase: undefined,
    relatedResources: D2C_CONTENT.relatedResources
      ? {
          ...D2C_CONTENT.relatedResources,
          headline: 'D2C growth playbooks',
          subhead: 'Category pages and practical playbooks on acquisition, creative, unit economics and channel sequencing — deeper proof of how we think before you speak with us.',
        }
      : undefined,
  }

  return (
    <div className={styles.page}>
      <IndustryLandingPage content={content} growthSystem={<D2CRevenueSystem />} />
    </div>
  )
}
