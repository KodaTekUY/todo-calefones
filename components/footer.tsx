import Image from "next/image"
import Link from "next/link"
import { TrackedLink } from "@/components/tracked-link"
import { SERVICES } from "@/lib/services-content"

export function Footer() {
  return (
    <footer className="bg-petrol-deep text-cream pt-12 pb-12 sm:pb-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-cream/15">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <Image
                src="/logo.svg"
                alt="TodoCalefones"
                width={140}
                height={40}
                className="h-9 w-auto mr-1.5 brightness-0 invert"
                priority
              />
              <span className="font-bold text-white font-display pt-1">Todo</span>
              <span className="font-semibold text-white display-italic pt-1">Calefones</span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-md">
              Técnicos especializados en reparación, instalación, mantenimiento y service de calefones en Montevideo y
              Canelones.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-4">Contacto</div>
            <ul className="space-y-2 text-sm">
              <li>
                <TrackedLink
                  href="https://wa.me/59891622275"
                  className="quiet-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  channel="whatsapp"
                  location="footer"
                >
                  WhatsApp directo
                </TrackedLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-4">Servicios</div>
            <ul className="space-y-2 text-sm text-cream/75">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="quiet-link">
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-cream/45">
          <div>© {new Date().getFullYear() == 2026 ? "2026" : "2026 — " + new Date().getFullYear()} TodoCalefones.com.uy · Montevideo – Uruguay</div>
          <div>
            Sitio por{" "}
            <a href="https://kodatekuy.com" className="quiet-link text-amber/80" target="_blank" rel="noopener noreferrer">
              KodaTek
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
