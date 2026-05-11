"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

const navLinks = [
  { href: "#que-hacemos", label: "¿Qué hacemos?" },
  { href: "#servicios", label: "Servicios" },
  { href: "#presupuestos", label: "Presupuestos" },
  { href: "#cobertura", label: "Zonas" },
  { href: "#marcas", label: "Marcas" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-line/60">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center group" aria-label="TodoCalefones, ir al inicio">
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="quiet-link hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-petrol text-cream px-4 py-2.5 rounded-full text-sm font-medium hover:bg-petrol-deep transition-colors"
        >
          <MessageCircle className="w-4 h-4" fill="currentColor" />
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
