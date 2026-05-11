"use client"

import { MessageCircle } from "lucide-react"

const allBrands = [
  "James",
  "Junkers",
  "Bosch",
  "Orbis",
  "Rheem",
  "Sherman",
  "Ariston",
  "AEG",
  "Atlantic",
  "Thompson",
  "Bronx",
  "Enxuta",
  "Peabody",
  "Sirium",
  "Punktal",
  "Delne",
  "Zero Watt",
  "Queen",
  "Orion",
  "Warner",
  "Midea",
  "Thermor",
  "Fagor",
  "Ufesa",
  "Smartlife",
  "Ideal",
  "Joya",
  "Eldom",
  "Steigleder",
  "Rotel",
  "Brillant",
  "Panavox",
  "Xion",
  "Hyundai",
  "Telefunken",
  "Geloso",
  "Tem",
  "Pacific",
  "Kroser",
  "Ganim",
]

export function Brands() {
  return (
    <section id="marcas" className="py-16 sm:py-24 lg:py-28 bg-cream-2/40 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-7 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              06 — Marcas
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              Trabajamos con <span className="display-italic text-amber-deep">todas</span> las marcas.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4 scroll-reveal">
            <p className="text-lg text-ink/70 leading-relaxed">
              Nos encargamos de la reparación e instalación de termotanques de todas las marcas que se comercializan en
              Uruguay.
            </p>
          </div>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-line border border-line rounded-xl overflow-hidden scroll-reveal">
          {allBrands.map((brand, i) => (
            <div key={i} className="brand-cell">
              {brand}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center scroll-reveal">
          <p className="text-sm text-ink/60 mb-3">¿No encuentra la suya?</p>
          <a
            href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20mi%20calefón%20es%20marca%20___"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-deep font-medium hover:text-petrol transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Consulte por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
