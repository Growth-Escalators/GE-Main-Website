import PriorityNationalLanding, { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

const baseMetadata = getPriorityNationalMetadata('travelIndia')
export const metadata = { ...baseMetadata, title: { absolute: 'Travel Marketing Agency in India | Meta & Google Ads | Growth Escalators' } }

export default function TravelMarketingAgencyPage() {
  return <PriorityNationalLanding pageKey="travelIndia" />
}
