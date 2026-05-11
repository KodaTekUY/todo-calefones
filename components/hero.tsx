"use client"

import { MessageCircle, Phone, Clock, MapPin, Wrench, CheckCircle } from "lucide-react"

const badges = [
  { icon: Clock, label: "Atención hoy", highlight: true },
  { icon: MapPin, label: "Montevideo y Canelones" },
  { icon: MessageCircle, label: "Presupuesto por WhatsApp" },
  { icon: Wrench, label: "Técnicos especializados" },
]

const stats = [
  { value: "4.900", suffix: "+", label: "Reparaciones" },
  { value: "1.400", suffix: "+", label: "Instalaciones" },
  { value: "1100", suffix: "+", label: "Mantenimientos" },
  { value: "300", suffix: "+", label: "Asesoramientos" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background logo decoration */}
      <div
        className="flame-orbit hidden lg:block opacity-[0.16]"
        style={{ top: "36px", right: "-220px", width: "620px", height: "620px" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 sm:pt-14 lg:pt-16 pb-12 sm:pb-20 lg:pb-24 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column - Main content */}
          <div className="lg:col-span-7">
            {/* Location badge */}
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-4 reveal delay-1">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              Montevideo · Canelones
            </div>

            {/* Main headline */}
            <h1 className="lh-1 headline text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl max-w-2xl reveal delay-2">
              Reparamos tu Calefón.
              <br />
              <span className="display-italic text-amber-deep">¡Hoy mismo!</span>
            </h1>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2 reveal delay-3">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                    badge.highlight
                      ? "bg-amber/15 text-amber-deep font-medium border border-amber/30"
                      : "bg-cream-2 text-ink/70 border border-line"
                  }`}
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/70 leading-relaxed reveal delay-3">
              Solicite su presupuesto por WhatsApp o llamada. Respuesta rápida y visita el mismo día cuando sea
              posible.
            </p>

            {/* CTA Buttons - More prominent on mobile */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 reveal delay-4">
              <a
                href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-base font-semibold hover:bg-[#1FB955] transition-all hover:-translate-y-0.5 wa-pulse"
              >
                <MessageCircle className="w-5 h-5" fill="currentColor" />
                Envíenos un WhatsApp
              </a>
              <a
                href="tel:097074249"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent text-ink border border-ink/25 px-6 py-3.5 rounded-full text-base font-semibold hover:bg-ink hover:text-cream transition-all"
              >
                <Phone className="w-4 h-4" />
                097 074 249
              </a>
            </div>
          </div>

          {/* Right column - Service Card */}
          <div className="lg:col-span-5 reveal delay-4">
            <div className="bg-petrol text-cream rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              
              <div
                className="flame-orbit hidden lg:block opacity-[0.16]"
                style={{ top: "10px", right: "-0px", width: "120px", height: "120px" }}
                aria-hidden="true"
              />

              <div className="relative">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 bg-amber/20 text-amber px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                  Servicio disponible
                </div>

                <h3 className="font-display text-2xl sm:text-3xl mb-2">Coordiná desde tu celular</h3>

                <p className="text-cream/70 text-sm mb-6">Mandanos foto del calefón y te damos una orientación rápida</p>

                {/* Contact options */}
                <div className="bg-petrol-deep/50 rounded-xl p-4 mb-4">
                  <div className="text-xs uppercase tracking-wider text-cream/50 mb-3">Opciones de contacto</div>
                  <div className="grid gap-2">
                    <a
                      href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1FB955] hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" fill="currentColor" />
                      Enviar WhatsApp
                    </a>
                    <a
                      href="tel:097074249"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/20 bg-cream/5 px-4 py-3 text-sm font-semibold text-cream transition-all hover:bg-cream hover:text-petrol"
                    >
                      <Phone className="w-4 h-4" />
                      Llamar 097 074 249
                    </a>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2">
                  {["Respuesta rápida", "Presupuesto sin compromiso", "Visita el mismo día"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-cream/80">
                      <CheckCircle className="w-4 h-4 text-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 border-t border-line pt-8 reveal delay-5">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="number-display text-3xl sm:text-4xl lg:text-5xl text-petrol">
                {stat.value}
                <span className="text-amber-deep">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm text-ink/65 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
