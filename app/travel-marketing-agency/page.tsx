import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

const baseMetadata = getPriorityNationalMetadata('travelIndia')
export const metadata = { ...baseMetadata, title: { absolute: 'Travel Marketing Agency in India | Meta & Google Ads | Growth Escalators' } }

export default function TravelMarketingAgencyPage() {
  return <PriorityCommercialPage pageKey="travelIndia" />
}
