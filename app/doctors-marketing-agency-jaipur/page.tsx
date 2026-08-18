import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { DOCTORS_JAIPUR_CONTENT } from './_data/content'

export default function DoctorsMarketingAgencyJaipurPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(DOCTORS_JAIPUR_CONTENT)} />
}
