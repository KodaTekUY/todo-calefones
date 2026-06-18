import { MessageCircle } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"

export function AnnounceBar() {
  return (
    <div className="bg-petrol text-cream text-center text-xs sm:text-sm py-2.5 px-4 tracking-wide">
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-amber/20 text-amber px-2 py-0.5 rounded-full text-xs font-medium">
          <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
          Disponible hoy
        </span>
        <span className="hidden sm:inline text-cream/70">·</span>
        <span className="hidden sm:inline">Reparación de calefones en Montevideo y Canelones</span>
        <span className="text-cream/50 mx-1 sm:mx-2">·</span>
        <TrackedLink
          href="https://wa.me/59891622275?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
          target="_blank"
          rel="noopener noreferrer"
          channel="whatsapp"
          location="announce-bar"
          className="quiet-link font-medium"
        >
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            <span>Atendemos solo por WhatsApp</span>
          </div>
        </TrackedLink>
      </span>
    </div>
  )
}
