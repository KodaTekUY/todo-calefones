export const SITE_URL = "https://todocalefones.com.uy"
export const BUSINESS_NAME = "TodoCalefones"
export const WHATSAPP_NUMBER = "59891622275"

/** Construye un enlace de WhatsApp con el texto inicial prellenado. */
export function whatsappUrl(text = "Hola, vengo de TodoCalefones.com.uy: ") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const AREAS_SERVED = [
  { "@type": "City", name: "Montevideo" },
  { "@type": "AdministrativeArea", name: "Canelones" },
  { "@type": "City", name: "Ciudad de la Costa" },
  { "@type": "City", name: "Las Piedras" },
  { "@type": "City", name: "Pando" },
]

const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`

/** Datos estructurados del negocio (service-area business, sin dirección física). */
export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HVACBusiness"],
    "@id": LOCAL_BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: "TodoCalefones.com.uy",
    description:
      "Técnicos especializados en reparación, instalación, mantenimiento y service de calefones en Montevideo y Canelones.",
    image: `${SITE_URL}/open-graph.webp`,
    logo: `${SITE_URL}/logo.webp`,
    url: `${SITE_URL}/`,
    hasMap: "https://maps.app.goo.gl/Msp3RPPdyNbiSweK8",
    priceRange: "$$",
    // Negocio a domicilio: declaramos el área de servicio en vez de una dirección física.
    areaServed: AREAS_SERVED,
    // Google Business Profile; sumar redes sociales cuando el cliente las provea.
    sameAs: ["https://maps.app.goo.gl/Msp3RPPdyNbiSweK8"] as string[],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de calefones",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reparación de calefones",
            serviceType: "Reparación de calefones",
            areaServed: "Montevideo y Canelones",
            url: `${SITE_URL}/reparacion-calefones-montevideo`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de calefones",
            serviceType: "Instalación de calefones",
            areaServed: "Montevideo y Canelones",
            url: `${SITE_URL}/instalacion-calefon`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Service de calefones",
            serviceType: "Service de calefones",
            areaServed: "Montevideo y Canelones",
            url: `${SITE_URL}/service-calefones`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantenimiento de calefones",
            serviceType: "Mantenimiento de calefones",
            areaServed: "Montevideo y Canelones",
            url: `${SITE_URL}/mantenimiento-calefones`,
          },
        },
      ],
    },
  }
}

/** Datos estructurados del sitio web. */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "es-UY",
    publisher: { "@id": LOCAL_BUSINESS_ID },
  }
}

type ServiceJsonLdInput = {
  name: string
  description: string
  url: string
  serviceType: string
}

/** Datos estructurados de un servicio puntual, asociado al negocio. */
export function getServiceJsonLd({ name, description, url, serviceType }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: { "@id": LOCAL_BUSINESS_ID },
    areaServed: AREAS_SERVED,
  }
}

export type BreadcrumbItem = { name: string; url: string }

/** Migas de pan en formato BreadcrumbList. */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export type Faq = { q: string; a: string }

/** Preguntas frecuentes en formato FAQPage. */
export function getFaqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}
