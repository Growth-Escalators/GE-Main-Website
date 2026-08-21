import WhiteLabelSeoLanding, { WHITE_LABEL_PAGES, getWhiteLabelMetadata } from '@/components/seo/WhiteLabelSeoLanding'

const baseMetadata = getWhiteLabelMetadata('shopifyDevelopment')
export const metadata = { ...baseMetadata, title: { absolute: WHITE_LABEL_PAGES.shopifyDevelopment.title } }

export default function WhiteLabelShopifyDevelopmentAgencyPage() {
  return <WhiteLabelSeoLanding pageKey="shopifyDevelopment" />
}
