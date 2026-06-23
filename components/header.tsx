import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ChevronDown } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"
import { whatsappUrl } from "@/lib/seo"
import { SERVICES } from "@/lib/services-content"

const navLinks = [
  { href: "/#que-hacemos", label: "¿Qué hacemos?" },
  { href: "/#presupuestos", label: "Presupuestos" },
  { href: "/#cobertura", label: "Zonas" },
  { href: "/#marcas", label: "Marcas" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-line/60">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="TodoCalefones, ir al inicio">
          <Image
            src="/logo.svg"
            alt="TodoCalefones"
            width={140}
            height={40}
            className="h-9 w-auto mr-1.5 transition-transform group-hover:scale-[1.02]"
            priority
          />
          <span className="font-bold text-petrol font-display pt-1">Todo</span>
          <span className="font-semibold text-amber display-italic pt-1">Calefones</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-ink/75">
          {/* Menú de servicios (dropdown CSS al pasar el mouse) */}
          <div className="relative group">
            <button
              type="button"
              className="quiet-link hover:text-ink transition-colors"
              aria-haspopup="true"
            >
              <div className="inline-flex items-center gap-1">
                Servicios
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </div>
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible transition-all">
              <div className="w-64 bg-cream border border-line rounded-xl shadow-xl p-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-3 py-2 rounded-lg text-ink/75 hover:bg-cream-2 hover:text-petrol transition-colors"
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="quiet-link hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <TrackedLink
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          channel="whatsapp"
          location="header"
          className="inline-flex items-center gap-2 bg-petrol text-cream px-4 py-2.5 rounded-full text-sm font-medium hover:bg-petrol-deep transition-colors"
        >
          <MessageCircle className="w-4 h-4" fill="currentColor" />
          WhatsApp
        </TrackedLink>
      </nav>
    </header>
  )
}
