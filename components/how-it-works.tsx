"use client"

import { MessageCircle, Camera, Send, CalendarCheck, MoveRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escribinos",
    description: "Vía WhatsApp o llamada telefónica al",
    cta: "091 622 275",
    ctaHref: "tel:091622275",
    highlight: false,
  },
  {
    number: "02",
    icon: Camera,
    title: "Mandá foto y datos",
    description: "La marca, modelo de su calefón y la falla ocurrida. Si podés, agregá una foto del equipo.",
    highlight: false,
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Coordinamos visita",
    description: "Te damos orientación/presupuesto y coordinamos la visita. Cuando sea posible, vamos el mismo día.",
    highlight: true,
  },
]

export function HowItWorks() {
  return (
    <section id="presupuestos" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-7 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              03 — Cómo funciona
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              ¡Consulte <span className="display-italic text-amber-deep">sin compromiso</span>!
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 scroll-reveal">
            <p className="text-lg text-ink/70 leading-relaxed">
              En tres pasos sencillos obtienes tu presupuesto y coordinamos la visita.
            </p>
          </div>
        </div>

        {/* Steps - Card based layout */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 scroll-reveal">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative p-6 sm:p-8 rounded-2xl border transition-all ${
                step.highlight
                  ? "bg-petrol text-cream border-petrol"
                  : "bg-cream-2/60 border-line hover:border-petrol/30"
              }`}
            >
              
              <div className="flex items-center gap-4">
                {/* Step number badge */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 ${
                    step.highlight ? "bg-amber text-petrol-deep" : "bg-petrol/10 text-petrol"
                  }`}
                >
                  <span className="number-display text-lg">{step.number}</span>
                </div>
                {/* Icon */}
                <step.icon
                  className={`w-8 h-8 mb-4 ${step.highlight ? "text-amber" : "text-amber-deep"}`}
                  strokeWidth={1.5}
                />
              </div>



              <h3 className={`font-display text-xl sm:text-2xl mb-2 ${step.highlight ? "text-cream" : "text-ink"}`}>
                {step.title}
              </h3>

              <p className={`text-sm leading-relaxed ${step.highlight ? "text-cream/70" : "text-ink/70"}`}>
                {step.description}
                {step.cta && (
                  <a
                    href={step.ctaHref}
                    className={`font-medium quiet-link ml-1 ${step.highlight ? "text-amber" : "text-petrol"}`}
                  >
                    {step.cta}
                  </a>
                )}
              </p>

              {/* Arrow connector for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 transform -translate-y-1/2 z-10">
                  <MoveRight className="w-6 h-6 text-petrol" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/55 max-w-3xl scroll-reveal leading-relaxed">
          <strong className="text-ink/75 font-medium">Aclaración:</strong> el cliente entiende que estos presupuestos
          son cálculos estimativos y realizados teniendo presente la información que proporciona en cuanto a la marca,
          modelo del Calefón y la falla ocurrida.
        </p>

        <div className="mt-8 scroll-reveal">
          <a
            href="https://wa.me/59891622275?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-petrol text-cream px-6 py-3.5 rounded-full text-base font-semibold hover:bg-petrol-deep transition-all hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            Solicitar presupuesto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
