import WhiteLabelMoneyLanding, { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

export const metadata = getWhiteLabelMoneyMetadata('shopifyDevelopment')

export default function WhiteLabelShopifyDevelopmentAgencyPage() {
  return <WhiteLabelMoneyLanding pageKey="shopifyDevelopment" />
}
