import WhiteLabelSeoLanding, { WHITE_LABEL_PAGES, getWhiteLabelMetadata } from '@/components/seo/WhiteLabelSeoLanding'

const baseMetadata = getWhiteLabelMetadata('webDevelopment')
export const metadata = { ...baseMetadata, title: { absolute: WHITE_LABEL_PAGES.webDevelopment.title } }

export default function WhiteLabelWebDevelopmentAgencyPage() {
  return <WhiteLabelSeoLanding pageKey="webDevelopment" />
}
