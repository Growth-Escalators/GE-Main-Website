import IndustryLandingPage from '@/components/landing/IndustryLandingPage'
import D2CRevenueSystem from '@/components/landing/D2CRevenueSystem'
import { D2C_CONTENT } from './_data/content'

export default function D2CPage() {
  return <IndustryLandingPage content={D2C_CONTENT} growthSystem={<D2CRevenueSystem />} />
}
