import WhiteLabelSeoLanding, { WHITE_LABEL_PAGES, getWhiteLabelMetadata } from '@/components/seo/WhiteLabelSeoLanding'

const baseMetadata = getWhiteLabelMetadata('softwareDevelopment')
export const metadata = { ...baseMetadata, title: { absolute: WHITE_LABEL_PAGES.softwareDevelopment.title } }

export default function WhiteLabelSoftwareDevelopmentPage() {
  return <WhiteLabelSeoLanding pageKey="softwareDevelopment" />
}
