import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { D2C_CONTENT } from './_data/content'

export default function D2CPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(D2C_CONTENT)} />
}
