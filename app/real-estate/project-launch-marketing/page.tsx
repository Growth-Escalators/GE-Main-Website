import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

const baseMetadata = getPriorityNationalMetadata('realEstateLaunch')
export const metadata = { ...baseMetadata, title: { absolute: 'Real Estate Project Launch Marketing Agency | Growth Escalators' } }

export default function RealEstateProjectLaunchMarketingPage() {
  return <PriorityCommercialPage pageKey="realEstateLaunch" />
}
