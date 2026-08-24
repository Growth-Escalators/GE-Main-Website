import PriorityNationalLanding, { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

export const metadata = getPriorityNationalMetadata('travelIndia')

export default function TravelMarketingAgencyPage() {
  return <PriorityNationalLanding pageKey="travelIndia" />
}
