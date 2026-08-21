import SeoClusterLanding, { getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
export const metadata = getSeoClusterMetadata('fashionMeta')
export default function Page(){ return <SeoClusterLanding pageKey="fashionMeta" /> }
