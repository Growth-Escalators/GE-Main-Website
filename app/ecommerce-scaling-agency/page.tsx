import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { ECOMMERCE_SCALING_AGENCY_CONTENT } from './_data/content'

export default function EcommerceScalingAgencyPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(ECOMMERCE_SCALING_AGENCY_CONTENT)} />
}
