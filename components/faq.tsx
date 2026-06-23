import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { JsonLd } from "@/components/json-ld"
import { getFaqJsonLd, type Faq } from "@/lib/seo"

type FaqSectionProps = {
  faqs: Faq[]
  /** Eyebrow opcional encima del título. */
  eyebrow?: string
  title?: string
  /** id único para el bloque JSON-LD de esta instancia. */
  jsonLdId: string
}

export function FaqSection({ faqs, eyebrow = "Preguntas frecuentes", title = "Preguntas frecuentes", jsonLdId }: FaqSectionProps) {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-28 bg-cream-2/40 border-y border-line">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5 scroll-reveal">
          <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
          {eyebrow}
        </div>
        <h2 className="headline text-3xl sm:text-4xl lg:text-5xl mb-8 scroll-reveal">{title}</h2>

        <Accordion type="single" collapsible className="scroll-reveal">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-line">
              <AccordionTrigger className="text-base sm:text-lg text-ink hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/70 text-sm sm:text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <JsonLd id={jsonLdId} data={getFaqJsonLd(faqs)} />
    </section>
  )
}
