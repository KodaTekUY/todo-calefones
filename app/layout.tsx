import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import { ClientEnhancements } from "@/components/client-enhancements"
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
  metadataBase: new URL("https://todocalefones.com.uy"),
  title: {
    default: "Reparación de Calefones en Montevideo y Canelones | TodoCalefones",
    template: "%s | TodoCalefones",
  },
  description:
    "Reparación, instalación, mantenimiento y service de calefones en Montevideo y Canelones. Técnicos especializados, presupuesto por WhatsApp y atención rápida.",
  keywords:
    "reparación de calefones, reparación calefones Montevideo, instalación calefón, calefón roto, service calefones, mantenimiento calefones, técnico calefones, TodoCalefones",
  applicationName: "TodoCalefones",
  authors: [{ name: "KodaTek" }],
  creator: "KodaTek",
  publisher: "KodaTek",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://todocalefones.com.uy/",
    title: "TodoCalefones — Reparación de Calefones en Montevideo y Canelones",
    description:
      "Técnicos especializados en reparación, instalación, mantenimiento y service de calefones. Presupuesto por WhatsApp y visita rápida.",
    siteName: "TodoCalefones",
    images: [
      {
        url: "/open-graph.webp",
        width: 1731,
        height: 909,
        alt: "TodoCalefones - reparación de calefones en Montevideo y Canelones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TodoCalefones — Reparación de Calefones",
    description: "Reparación, instalación y service de calefones en Montevideo y Canelones.",
    images: ["/open-graph.webp"],
  },
  alternates: {
    canonical: "https://todocalefones.com.uy/",
  },
}

export const viewport: Viewport = {
  themeColor: "#0F3D3E",
}

const gaId = process.env.NEXT_PUBLIC_GA_ID
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const gtagId = gaId || googleAdsId

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HVACBusiness"],
  name: "TodoCalefones",
  alternateName: "TodoCalefones.com.uy",
  description:
    "Técnicos especializados en reparación, instalación, mantenimiento y service de calefones en Montevideo y Canelones.",
  image: "https://todocalefones.com.uy/open-graph.webp",
  logo: "https://todocalefones.com.uy/logo.webp",
  "@id": "https://todocalefones.com.uy/#localbusiness",
  url: "https://todocalefones.com.uy/",
  telephone: "+59891622275",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Montevideo" },
    { "@type": "AdministrativeArea", name: "Canelones" },
    { "@type": "City", name: "Ciudad de la Costa" },
    { "@type": "City", name: "Las Piedras" },
    { "@type": "City", name: "Pando" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+59891622275",
    contactType: "customer service",
    availableLanguage: "Spanish",
    areaServed: "UY",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de calefones",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparación de calefones",
          serviceType: "Reparación de calefones",
          areaServed: "Montevideo y Canelones",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalación de calefones",
          serviceType: "Instalación de calefones",
          areaServed: "Montevideo y Canelones",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento y service de calefones",
          serviceType: "Mantenimiento de calefones",
          areaServed: "Montevideo y Canelones",
        },
      },
    ],
  },
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
          id="todo-calefones-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <ClientEnhancements />
      </body>
    </html>
  )
}
