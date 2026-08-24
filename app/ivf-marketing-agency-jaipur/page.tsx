import PriorityVerticalLanding, { getPriorityVerticalMetadata } from '@/components/seo/PriorityVerticalLanding'

const baseMetadata = getPriorityVerticalMetadata('ivfJaipur')
export const metadata = { ...baseMetadata, title: { absolute: 'IVF Marketing Agency in Jaipur | Fertility Clinic Growth | Growth Escalators' } }

export default function IvfMarketingAgencyJaipurPage() {
  return <PriorityVerticalLanding pageKey="ivfJaipur" />
}
