"use client"

import { MessageCircle, Phone } from "lucide-react"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-petrol border-t border-petrol-deep/50 p-3 safe-area-pb">
      <div className="flex gap-2">
        <a
          href="https://wa.me/59897074249?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm font-semibold"
        >
          <MessageCircle className="w-5 h-5" fill="currentColor" />
          WhatsApp
        </a>
        <a
          href="tel:091622275"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-amber text-petrol-deep py-3 rounded-full text-sm font-semibold"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
      </div>
    </div>
  )
}
