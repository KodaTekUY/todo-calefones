import { MessageCircle } from "lucide-react"
import { TrackedLink } from "@/components/tracked-link"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-petrol border-t border-petrol-deep/50 p-3 safe-area-pb">
      <TrackedLink
        href="https://wa.me/59891622275?text=Hola,%20vengo%20de%20TodoCalefones.com.uy:%20"
        target="_blank"
        rel="noopener noreferrer"
        channel="whatsapp"
        location="mobile-bottom-bar"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm font-semibold"
      >
        <MessageCircle className="w-5 h-5" fill="currentColor" />
        WhatsApp
      </TrackedLink>
    </div>
  )
}
