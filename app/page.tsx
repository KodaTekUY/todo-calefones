import { AnnounceBar } from "@/components/announce-bar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BrandsMarquee } from "@/components/brands-marquee"
import { WhatWeDo } from "@/components/what-we-do"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyUs } from "@/components/why-us"
import { Coverage } from "@/components/coverage"
import { Brands } from "@/components/brands"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider"

export default function Home() {
  return (
    <>
      <div className="grain pb-15 sm:pb-0">
        <AnnounceBar />
        <Header />
        <main>
          <Hero />
          <BrandsMarquee />
          <ScrollRevealProvider>
            <WhatWeDo />
            <Services />
            <HowItWorks />
            <WhyUs />
            <Coverage />
            <Brands />
            <FinalCTA />
          </ScrollRevealProvider>
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  )
}
