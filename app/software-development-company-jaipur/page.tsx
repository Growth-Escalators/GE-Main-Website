import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { SOFTWARE_JAIPUR_CONTENT } from './_data/content'

export default function SoftwareDevelopmentJaipurPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(SOFTWARE_JAIPUR_CONTENT)} />
}
