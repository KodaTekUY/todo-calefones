export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 scroll-reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-ink/55 mb-5">
              <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
              01 — ¿Qué hacemos?
            </div>
            <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">
              Servicio técnico especializado en <span className="display-italic text-amber-deep">calefones</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 scroll-reveal">
            <div className="space-y-4 text-ink/75 leading-relaxed text-[17px]">
              <p>
                Realizamos reparación, instalación, mantenimiento y service de calefones a domicilio. Solicite su
                presupuesto vía llamada telefónica o WhatsApp.
              </p>
              <p>
                En TodoCalefones nos especializamos exclusivamente en calefones, desde fallas por falta de agua caliente
                hasta pérdidas, problemas eléctricos y sustitución de equipos.
              </p>
              <p>
                El calefón es un equipo que requiere manipulación técnica responsable: la seguridad de usted y su familia
                queda al cuidado de profesionales con experiencia. Trabajamos con todas las marcas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
