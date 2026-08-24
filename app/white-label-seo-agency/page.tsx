import WhiteLabelMoneyLanding, { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

const baseMetadata = getWhiteLabelMoneyMetadata('seo')
export const metadata = { ...baseMetadata, title: { absolute: 'White Label SEO Agency for US Agencies | Growth Escalators' } }

export default function WhiteLabelSeoAgencyPage() {
  return <WhiteLabelMoneyLanding pageKey="seo" />
}
