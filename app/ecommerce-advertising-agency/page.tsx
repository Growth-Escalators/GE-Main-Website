import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { ECOMMERCE_ADVERTISING_AGENCY_CONTENT } from './_data/content'

export default function EcommerceAdvertisingAgencyPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(ECOMMERCE_ADVERTISING_AGENCY_CONTENT)} />
}
