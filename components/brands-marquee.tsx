"use client"

const brands = [
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
]

export function BrandsMarquee() {
  return (
    <section className="bg-petrol text-cream py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-cream/55 mb-4 text-center">
          Reparación e instalación de termotanques de todas las marcas
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track font-display text-2xl sm:text-3xl">
          {brands.map((brand, i) => (
            <span key={`brand-${i}`}>
              <span className={i % 2 === 1 ? "display-italic" : ""}>{brand}</span>
            </span>
          ))}
        </div>
        <div className="marquee-track font-display text-2xl sm:text-3xl">
          {brands.map((brand, i) => (
            <span key={`brand-${i}-duplicate`}>
              <span className={i % 2 === 1 ? "display-italic" : ""}>{brand}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
