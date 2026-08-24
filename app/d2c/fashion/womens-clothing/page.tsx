import PriorityCommercialPage from '@/components/commercial/PriorityCommercialPage'
import { getPriorityVerticalMetadata } from '@/components/seo/PriorityVerticalLanding'

const baseMetadata = getPriorityVerticalMetadata('womensClothing')
export const metadata = { ...baseMetadata, title: { absolute: "Performance Marketing for Women's Clothing Brands | Growth Escalators" } }

export default function WomensClothingPerformanceMarketingPage() {
  return <PriorityCommercialPage pageKey="womensClothing" />
}
