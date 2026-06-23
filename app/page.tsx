import { Hero } from "@/components/hero"
import { BrandsMarquee } from "@/components/brands-marquee"
import { WhatWeDo } from "@/components/what-we-do"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyUs } from "@/components/why-us"
import { Coverage } from "@/components/coverage"
import { Brands } from "@/components/brands"
import { FinalCTA } from "@/components/final-cta"
import { SiteShell } from "@/components/site-shell"
import { FaqSection } from "@/components/faq"
import type { Faq } from "@/lib/seo"

const homeFaqs: Faq[] = [
  {
    q: "¿Atienden por teléfono o solo por WhatsApp?",
    a: "Atendemos exclusivamente por WhatsApp. Escribinos con la marca, el modelo de tu calefón y la falla, y coordinamos el diagnóstico y la visita.",
  },
  {
    q: "¿En qué zonas reparan calefones?",
    a: "Trabajamos en todo Montevideo y la zona metropolitana de Canelones, incluyendo Ciudad de la Costa, Las Piedras, Pando y alrededores. Si tu barrio no aparece, consultanos igual.",
  },
  {
    q: "¿Cuánto cuesta el presupuesto?",
    a: "El presupuesto es sin compromiso. Enviando por WhatsApp la marca, el modelo y la falla del calefón te damos una orientación estimada antes de la visita.",
  },
  {
    q: "¿Trabajan con todas las marcas de calefones?",
    a: "Sí. Reparamos e instalamos calefones de todas las marcas que se comercializan en Uruguay: James, Junkers, Bosch, Orbis, Rheem, Sherman, Ariston y muchas más.",
  },
  {
    q: "¿Pueden ir el mismo día?",
    a: "Cuando es posible coordinamos la visita el mismo día, especialmente en urgencias como pérdidas de agua o falta total de agua caliente.",
  },
]

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <BrandsMarquee />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Coverage />
      <Brands />
      <FaqSection faqs={homeFaqs} jsonLdId="faq-jsonld-home" />
      <FinalCTA />
    </SiteShell>
  )
}
