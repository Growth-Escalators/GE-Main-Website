import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('customSoftwareJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.customSoftwareJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="customSoftwareJaipur" /> }
