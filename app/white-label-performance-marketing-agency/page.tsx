import WhiteLabelSeoLanding, { WHITE_LABEL_PAGES, getWhiteLabelMetadata } from '@/components/seo/WhiteLabelSeoLanding'

const baseMetadata = getWhiteLabelMetadata('performanceMarketing')
export const metadata = { ...baseMetadata, title: { absolute: WHITE_LABEL_PAGES.performanceMarketing.title } }

export default function WhiteLabelPerformanceMarketingAgencyPage() {
  return <WhiteLabelSeoLanding pageKey="performanceMarketing" />
}
