import PriorityNationalLanding, { getPriorityNationalMetadata } from '@/components/seo/PriorityNationalLanding'

const baseMetadata = getPriorityNationalMetadata('realEstateLaunch')
export const metadata = { ...baseMetadata, title: { absolute: 'Real Estate Project Launch Marketing Agency | Growth Escalators' } }

export default function RealEstateProjectLaunchMarketingPage() {
  return <PriorityNationalLanding pageKey="realEstateLaunch" />
}
