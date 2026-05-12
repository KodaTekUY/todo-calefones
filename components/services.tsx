const services = [
  {
    number: "01",
    title: "Instalación de calefones",
    description:
      "Instalamos calefones nuevos y sustituimos termotanques antiguos, cuidando conexiones, seguridad y puesta en funcionamiento.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0F3D3E" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 32h24M12 32V12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v20" />
        <path d="M16 16h8M20 8v-3" />
        <path d="M14 22c2-1 4-1 6 0s4 1 6 0" stroke="#E8A33D" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Reparación de calefones",
    description:
      "Reparamos calefones que no calientan, pierden agua, cortan la térmica o presentan fallas de termostato, resistencia o válvula.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0F3D3E" strokeWidth="1.5" aria-hidden="true">
        <rect x="11" y="6" width="18" height="28" rx="2" />
        <path d="M16 13h8M16 18h8M16 23h5" />
        <circle cx="20" cy="29" r="1.5" fill="#E8A33D" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Mantenimiento y service",
    description:
      "Realizamos service preventivo, revisión de componentes y mantenimiento para prolongar la vida útil del calefón.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0F3D3E" strokeWidth="1.5" aria-hidden="true">
        <circle cx="20" cy="20" r="11" />
        <path d="M20 13v7l5 3" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1.5" fill="#E8A33D" stroke="none" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Calefón roto",
    description:
      "Te orientamos por WhatsApp cuando el calefón deja de calentar, gotea, hace ruido o muestra señales de falla eléctrica.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0F3D3E" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 28V16a8 8 0 0 1 16 0v12" />
        <circle cx="20" cy="20" r="3" fill="#E8A33D" stroke="none" />
        <path d="M8 28h24" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 lg:py-28 bg-cream-2/40 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              02 — Servicios
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              Reparación, instalación y <span className="display-italic text-amber-deep">service</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 scroll-reveal">
            <p className="text-lg text-ink/70 leading-relaxed mt-2">
              Cubrimos las consultas más frecuentes: calefón roto, pérdida de agua, falta de agua caliente,
              instalación, mantenimiento y cambio de repuestos.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-cream p-6 sm:p-8 group hover:bg-cream-2 transition-colors scroll-reveal"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="number-display text-petrol/40 text-xl">{service.number}</span>
                {service.icon}
              </div>
              <h3 className="font-display text-xl sm:text-2xl mb-3">{service.title}</h3>
              <p className="text-ink/70 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
