import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Reparación de Calefones en Montevideo y Canelones | TodoCalefones — ¡Vamos hoy!",
  description:
    "Somos la primer empresa con técnicos especializados en reparación, mantenimiento y service de calefones en Montevideo. Atención el mismo día. Presupuesto sin compromiso vía WhatsApp o llamada.",
  keywords:
    "reparación calefones Montevideo, reparación calefones Canelones, service calefones Montevideo, instalación calefones, mantenimiento calefones, técnico calefones, TodoCalefones",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://todocalefones.com.uy/",
    title: "TodoCalefones — Reparación de Calefones en Montevideo. ¡Vamos hoy!",
    description:
      "La primer empresa con técnicos especializados en reparación, mantenimiento y service de calefones en Montevideo. Atención el mismo día.",
    siteName: "TodoCalefones",
  },
  twitter: {
    card: "summary_large_image",
    title: "TodoCalefones — Reparación de Calefones en Montevideo",
    description: "Más de 4.700 reparaciones realizadas. Presupuesto sin compromiso.",
  },
  alternates: {
    canonical: "https://todocalefones.com.uy/",
  },
}

export const viewport: Viewport = {
  themeColor: "#0F3D3E",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-UY" className={`${plusJakarta.variable} ${fraunces.variable} bg-cream`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "TodoCalefones",
              alternateName: "TodoCalefones.com.uy",
              image: "https://todocalefones.com.uy/og-image.jpg",
              "@id": "https://todocalefones.com.uy/",
              url: "https://todocalefones.com.uy/",
              telephone: "+59897074249",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Montevideo",
                addressRegion: "Montevideo",
                addressCountry: "UY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.9011,
                longitude: -56.1645,
              },
              areaServed: [
                { "@type": "City", name: "Montevideo" },
                { "@type": "City", name: "Ciudad de la Costa" },
                { "@type": "City", name: "Las Piedras" },
                { "@type": "City", name: "Pando" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "20:00",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
