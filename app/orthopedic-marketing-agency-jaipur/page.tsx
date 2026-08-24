import PriorityVerticalLanding, { getPriorityVerticalMetadata } from '@/components/seo/PriorityVerticalLanding'

const baseMetadata = getPriorityVerticalMetadata('orthopedicJaipur')
export const metadata = { ...baseMetadata, title: { absolute: 'Orthopaedic Marketing Agency in Jaipur | Growth Escalators' } }

export default function OrthopedicMarketingAgencyJaipurPage() {
  return <PriorityVerticalLanding pageKey="orthopedicJaipur" />
}
