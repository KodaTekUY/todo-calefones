"use client"

const montevideoAreas = [
  "Centro",
  "Cordón",
  "Pocitos",
  "Punta Carretas",
  "Buceo",
  "Malvín",
  "Carrasco",
  "La Blanqueada",
  "Tres Cruces",
  "Parque Rodó",
  "Prado",
  "Aguada",
  "Atahualpa",
  "Sayago",
  "Colón",
  "Pueblo Nuevo",
  "Cerro",
  "La Teja",
]

const canelonesAreas = [
  "Ciudad de la Costa",
  "Lagomar",
  "Solymar",
  "El Pinar",
  "Shangrilá",
  "Las Piedras",
  "La Paz",
  "Pando",
  "Barros Blancos",
  "Sauce",
  "Joaquín Suárez",
  "Toledo",
]

export function Coverage() {
  return (
    <section id="cobertura" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              05 — Zona de cobertura
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              Brindamos servicio en <span className="display-italic text-amber-deep">todo Montevideo</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 scroll-reveal">
            <p className="text-lg text-ink/70 leading-relaxed mt-2">
              Atendemos toda Montevideo y la zona metropolitana de Canelones. Si su barrio no aparece, igual contáctenos
              —seguramente llegamos.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-cream-2/60 border border-line p-6 sm:p-8 rounded-xl scroll-reveal">
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-line">
              <h3 className="font-display text-2xl sm:text-3xl">Montevideo</h3>
              <span className="text-xs uppercase tracking-widest text-ink/50">Capital</span>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-ink/80">
              {montevideoAreas.map((area, i) => (
                <li key={i}>· {area}</li>
              ))}
            </ul>
          </div>

          <div className="bg-cream-2/60 border border-line p-6 sm:p-8 rounded-xl scroll-reveal">
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-line">
              <h3 className="font-display text-2xl sm:text-3xl">Canelones</h3>
              <span className="text-xs uppercase tracking-widest text-ink/50">Zona metropolitana</span>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-ink/80">
              {canelonesAreas.map((area, i) => (
                <li key={i}>· {area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
