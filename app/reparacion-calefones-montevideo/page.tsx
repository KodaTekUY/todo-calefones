import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { buildServiceMetadata, getServiceBySlug } from "@/lib/services-content"

const item = getServiceBySlug("reparacion-calefones-montevideo")!

export const metadata: Metadata = buildServiceMetadata(item)

export default function Page() {
  return <ServicePage item={item} />
}
