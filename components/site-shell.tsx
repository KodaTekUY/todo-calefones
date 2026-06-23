import { AnnounceBar } from "@/components/announce-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"

/** Envoltorio común a todas las páginas: barra de anuncio, header, footer y CTAs flotantes. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grain pb-15 sm:pb-0">
        <AnnounceBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  )
}
