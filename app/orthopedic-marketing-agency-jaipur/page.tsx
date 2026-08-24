import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getPriorityVerticalMetadata } from '@/components/seo/PriorityVerticalLanding'

const baseMetadata = getPriorityVerticalMetadata('orthopedicJaipur')
export const metadata = { ...baseMetadata, title: { absolute: 'Orthopaedic Marketing Agency in Jaipur | Growth Escalators' } }

export default function OrthopedicMarketingAgencyJaipurPage() {
  return <PriorityCommercialPage pageKey="orthopedicJaipur" />
}
