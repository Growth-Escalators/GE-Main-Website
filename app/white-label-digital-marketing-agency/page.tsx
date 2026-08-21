import WhiteLabelSeoLanding, { WHITE_LABEL_PAGES, getWhiteLabelMetadata } from '@/components/seo/WhiteLabelSeoLanding'

const baseMetadata = getWhiteLabelMetadata('digitalMarketing')
export const metadata = { ...baseMetadata, title: { absolute: WHITE_LABEL_PAGES.digitalMarketing.title } }

export default function WhiteLabelDigitalMarketingAgencyPage() {
  return <WhiteLabelSeoLanding pageKey="digitalMarketing" />
}
