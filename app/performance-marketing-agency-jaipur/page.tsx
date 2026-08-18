import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { JAIPUR_CONTENT } from './_data/content'

export default function JaipurPerformanceMarketingPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(JAIPUR_CONTENT)} />
}
