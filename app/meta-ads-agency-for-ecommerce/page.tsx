import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { META_ADS_ECOMMERCE_CONTENT } from './_data/content'

export default function MetaAdsEcommercePage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(META_ADS_ECOMMERCE_CONTENT)} />
}
