import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { REAL_ESTATE_CONTENT } from './_data/content'

export default function RealEstatePage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(REAL_ESTATE_CONTENT)} />
}
