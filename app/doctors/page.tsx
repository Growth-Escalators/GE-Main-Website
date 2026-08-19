import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { DOCTORS_CONTENT } from './_data/content'

export default function DoctorsPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(DOCTORS_CONTENT)} />
}
