"use client"

import { Wrench, Clock, FileText, Wallet, Zap } from "lucide-react"

const reasons = [
  {
    icon: Wrench,
    title: "Técnicos especializados",
    description:
      "Nuestra empresa se enfoca exclusivamente en el servicio de reparación, mantenimiento y service de Calefones.",
    highlighted: false,
  },
  {
    icon: Clock,
    title: "Vamos hoy",
    description: "Atendemos su consulta dentro de las 24 horas. En la mayoría de los casos vamos el mismo día.",
    highlighted: true,
  },
  {
    icon: FileText,
    title: "Presupuesto sin compromiso",
    description: "Expedimos presupuestos vía WhatsApp o llamada convencional. Consulte sin obligación de contratar.",
    highlighted: false,
  },
  {
    icon: Wallet,
    title: "Precio justo",
    description: "Tenemos el precio más acorde de Montevideo. Trabajamos con repuestos originales y transparencia.",
    highlighted: false,
  },
]

export function WhyUs() {
  return (
    <section id="por-que" className="bg-petrol text-cream py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Decorative logo */}
      <div
        className="flame-orbit hidden lg:block opacity-[0.14]"
        style={{ bottom: "-170px", left: "-190px", width: "640px", height: "640px" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-cream/55 mb-5">
              <span className="inline-block w-8 h-px bg-cream/40 align-middle mr-3" />
              04 — Por qué nosotros
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              La <span className="display-italic text-amber">confianza</span> de elegirnos.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 scroll-reveal">
            <p className="text-lg text-cream/75 leading-relaxed mt-2">
              Equipo de expertos altamente calificados, especialización exclusiva en calefones y respuesta dentro de las
              24 horas.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 transition-all scroll-reveal ${
                reason.highlighted
                  ? "bg-amber text-petrol-deep"
                  : "bg-petrol-deep/50 hover:bg-petrol-deep"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  reason.highlighted ? "bg-petrol-deep/20" : "bg-amber/10"
                }`}
              >
                <reason.icon
                  className={`w-6 h-6 ${reason.highlighted ? "text-petrol-deep" : "text-amber"}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className={`font-display text-xl mb-2 ${
                  reason.highlighted ? "text-petrol-deep" : "text-cream"
                }`}
              >
                {reason.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  reason.highlighted ? "text-petrol-deep/80" : "text-cream/70"
                }`}
              >
                {reason.description}
              </p>

              {reason.highlighted && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-petrol-deep font-medium text-sm">
                  <Zap className="w-4 h-4" />
                  Atención inmediata
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
