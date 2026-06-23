import Link from "next/link"
import { MessageCircle, CheckCircle, MapPin, ArrowRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SiteShell } from "@/components/site-shell"
import { FaqSection } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { BrandsMarquee } from "@/components/brands-marquee"
import { TrackedLink } from "@/components/tracked-link"
import { JsonLd } from "@/components/json-ld"
import { SERVICES, type ServiceContent } from "@/lib/services-content"
import { SITE_URL, getServiceJsonLd, getBreadcrumbJsonLd, whatsappUrl } from "@/lib/seo"

function renderH1(item: ServiceContent) {
  const idx = item.h1.indexOf(item.h1Accent)
  if (idx === -1) return item.h1
  const before = item.h1.slice(0, idx)
  const after = item.h1.slice(idx + item.h1Accent.length)
  return (
    <>
      {before}
      <span className="display-italic text-amber-deep">{item.h1Accent}</span>
      {after}
    </>
  )
}

export function ServicePage({ item }: { item: ServiceContent }) {
  const pageUrl = `${SITE_URL}/${item.slug}`
  const otherServices = SERVICES.filter((service) => service.slug !== item.slug)

  return (
    <SiteShell>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-ink/60">
                <Link href="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-ink">{item.navLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-4">
            <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
            {item.eyebrow}
          </div>
          <h1 className="lh-1 headline text-[36px] sm:text-5xl lg:text-6xl max-w-3xl">{renderH1(item)}</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink/70 leading-relaxed">{item.heroSubtitle}</p>
          <div className="mt-6">
            <TrackedLink
              href={whatsappUrl(item.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              channel="whatsapp"
              location={`svc-${item.slug}-hero`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#1FB955] transition-all hover:-translate-y-0.5 wa-pulse"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              Consultar por WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Contenido único + lista */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream-2/40 border-y border-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-4 text-ink/75 leading-relaxed text-[17px]">
            {item.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="bg-cream border border-line rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl sm:text-2xl mb-5">{item.list.title}</h2>
              <ul className="space-y-3">
                {item.list.items.map((listItem, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink/75 text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 text-amber-deep shrink-0 mt-0.5" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-start gap-3 max-w-3xl">
            <MapPin className="w-6 h-6 text-amber-deep shrink-0 mt-1" />
            <p className="text-lg text-ink/70 leading-relaxed">
              Atendemos en todo <strong className="text-ink/85 font-medium">Montevideo</strong> y la zona metropolitana de{" "}
              <strong className="text-ink/85 font-medium">Canelones</strong> (Ciudad de la Costa, Las Piedras, Pando y
              alrededores).{" "}
              <Link href="/#cobertura" className="quiet-link text-petrol font-medium">
                Ver zonas de cobertura
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <BrandsMarquee />

      {/* FAQ específica */}
      <FaqSection
        faqs={item.faqs}
        eyebrow="Preguntas frecuentes"
        title={`Preguntas sobre ${item.navLabel.toLowerCase()}`}
        jsonLdId={`faq-jsonld-${item.slug}`}
      />

      {/* Otros servicios (cross-linking interno) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="headline text-2xl sm:text-3xl mb-8">Otros servicios de calefones</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-cream-2/60 border border-line rounded-xl p-5 hover:border-petrol/30 transition-colors"
              >
                <span className="font-display text-lg text-ink group-hover:text-petrol transition-colors">
                  {service.navLabel}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-amber-deep font-medium">
                  Ver más
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <JsonLd
        id={`service-jsonld-${item.slug}`}
        data={getServiceJsonLd({
          name: item.serviceType,
          description: item.description,
          url: pageUrl,
          serviceType: item.serviceType,
        })}
      />
      <JsonLd
        id={`breadcrumb-jsonld-${item.slug}`}
        data={getBreadcrumbJsonLd([
          { name: "Inicio", url: `${SITE_URL}/` },
          { name: item.navLabel, url: pageUrl },
        ])}
      />
    </SiteShell>
  )
}
