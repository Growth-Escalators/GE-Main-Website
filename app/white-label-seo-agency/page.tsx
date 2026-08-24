import WhiteLabelMoneyLanding, { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

export const metadata = getWhiteLabelMoneyMetadata('seo')

export default function WhiteLabelSeoAgencyPage() {
  return <WhiteLabelMoneyLanding pageKey="seo" />
}
