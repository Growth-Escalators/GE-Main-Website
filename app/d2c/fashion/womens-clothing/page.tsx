import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('womensClothing')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.womensClothing.title } }
export default function Page(){ return <SeoClusterLanding pageKey="womensClothing" /> }
