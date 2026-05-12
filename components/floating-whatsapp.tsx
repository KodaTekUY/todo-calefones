import { MessageCircle } from "lucide-react"
import { trackContactEvent } from "@/lib/analytics"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/59891622275?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      onClick={() => trackContactEvent("whatsapp", "floating-button")}
      className="hidden sm:fixed sm:flex bottom-20 sm:bottom-7 right-5 sm:right-7 z-50 bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform floating-wa-pulse"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  )
}
