import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

const baseMetadata = getWhiteLabelMoneyMetadata('digitalMarketing')
export const metadata = { ...baseMetadata, title: { absolute: 'White Label Digital Marketing Agency for US Agencies | Growth Escalators' } }

export default function WhiteLabelDigitalMarketingAgencyPage() {
  return <PriorityCommercialPage pageKey="whiteLabelDigital" />
}
