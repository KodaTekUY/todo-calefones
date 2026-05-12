import { MessageCircle, Phone } from "lucide-react"
import { trackContactEvent } from "@/lib/analytics"

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-6 scroll-reveal">— ¡Llámenos ya! —</div>
        <h2 className="headline text-4xl sm:text-6xl lg:text-7xl mb-6 scroll-reveal">
          ¿Calefón roto?
          <br />
          <span className="display-italic text-amber-deep">Vamos hoy</span>
        </h2>
        <p className="text-lg text-ink/70 max-w-xl mx-auto mb-8 scroll-reveal">
          Comuníquese por WhatsApp o llamada telefónica para reparación, instalación, mantenimiento o service de
          calefones. Si es posible, vamos el mismo día.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center scroll-reveal">
          <a
            href="https://wa.me/59891622275?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent("whatsapp", "final-cta")}
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-[#1FB955] transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Envíenos un WhatsApp
          </a>
          <a
            href="tel:091622275"
            onClick={() => trackContactEvent("phone", "final-cta")}
            className="inline-flex items-center justify-center gap-2.5 bg-petrol text-cream px-7 py-4 rounded-full text-base font-semibold hover:bg-petrol-deep transition-all"
          >
            <Phone className="w-4 h-4" />
            Llamar 091 622 275
          </a>
        </div>
      </div>
    </section>
  )
}
