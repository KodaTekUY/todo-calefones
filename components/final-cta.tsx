"use client"

import { MessageCircle, Phone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-6 scroll-reveal">— ¡Llámenos ya! —</div>
        <h2 className="headline text-4xl sm:text-6xl lg:text-7xl mb-6 scroll-reveal">
          ¡Vamos
          <br />
          <span className="display-italic text-amber-deep">hoy mismo</span>!
        </h2>
        <p className="text-lg text-ink/70 max-w-xl mx-auto mb-8 scroll-reveal">
          Comuníquese por WhatsApp o llamada convencional y le respondemos dentro de las 24 horas. Si es posible, vamos
          el mismo día.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center scroll-reveal">
          <a
            href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-[#1FB955] transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Envíenos un WhatsApp
          </a>
          <a
            href="tel:097074249"
            className="inline-flex items-center justify-center gap-2.5 bg-petrol text-cream px-7 py-4 rounded-full text-base font-semibold hover:bg-petrol-deep transition-all"
          >
            <Phone className="w-4 h-4" />
            Llamar 097 074 249
          </a>
        </div>
      </div>
    </section>
  )
}
