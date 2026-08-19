import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { JAIPUR_REAL_ESTATE_CONTENT } from './_data/content'

export default function JaipurRealEstatePage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(JAIPUR_REAL_ESTATE_CONTENT)} />
}
