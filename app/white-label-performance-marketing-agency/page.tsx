import WhiteLabelMoneyLanding, { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

const baseMetadata = getWhiteLabelMoneyMetadata('performanceMarketing')
export const metadata = { ...baseMetadata, title: { absolute: 'White Label Performance Marketing Agency | Meta & Google Fulfilment | Growth Escalators' } }

export default function WhiteLabelPerformanceMarketingAgencyPage() {
  return <WhiteLabelMoneyLanding pageKey="performanceMarketing" />
}
