import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('fashionMeta')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.fashionMeta.title } }
export default function Page(){ return <SeoClusterLanding pageKey="fashionMeta" /> }
