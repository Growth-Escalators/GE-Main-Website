import PriorityNationalLanding, { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

export const metadata = getPriorityNationalMetadata('realEstateLaunch')

export default function RealEstateProjectLaunchMarketingPage() {
  return <PriorityNationalLanding pageKey="realEstateLaunch" />
}
