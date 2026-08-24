import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

const baseMetadata = getWhiteLabelMoneyMetadata('seo')
export const metadata = { ...baseMetadata, title: { absolute: 'White Label SEO Agency for US Agencies | Growth Escalators' } }

export default function WhiteLabelSeoAgencyPage() {
  return <PriorityCommercialPage pageKey="whiteLabelSeo" />
}
