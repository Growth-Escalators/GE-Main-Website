import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'
import { WEBSITE_JAIPUR_CONTENT } from './_data/content'

export default function WebsiteDevelopmentJaipurPage() {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(WEBSITE_JAIPUR_CONTENT)} />
}
