import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getPriorityVerticalMetadata } from '@/components/seo/PriorityVerticalLanding'

const baseMetadata = getPriorityVerticalMetadata('ivfJaipur')
export const metadata = { ...baseMetadata, title: { absolute: 'IVF Marketing Agency in Jaipur | Fertility Clinic Growth | Growth Escalators' } }

export default function IvfMarketingAgencyJaipurPage() {
  return <PriorityCommercialPage pageKey="ivfJaipur" />
}
