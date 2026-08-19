import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { B2B_LEAD_GEN_CONTENT } from './_data/content'

export default function B2BLeadGenerationAgencyPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(B2B_LEAD_GEN_CONTENT)} />
}
