"use client"

import { Phone } from "lucide-react"

export function AnnounceBar() {
  return (
    <div className="bg-petrol text-cream text-center text-xs sm:text-sm py-2.5 px-4 tracking-wide">
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-amber/20 text-amber px-2 py-0.5 rounded-full text-xs font-medium">
          <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
          Disponible hoy
        </span>
        <span className="hidden sm:inline text-cream/70">·</span>
        <span className="hidden sm:inline">Servicio en Montevideo y Canelones</span>
        <span className="text-cream/50 mx-1 sm:mx-2">·</span>
        <a href="tel:097074249" className="quiet-link font-medium">
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>097 074 249</span>
          </div>
        </a>
      </span>
    </div>
  )
}
