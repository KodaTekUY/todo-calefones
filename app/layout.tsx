import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import Script from "next/script"
import { ClientEnhancements } from "@/components/client-enhancements"
import { JsonLd } from "@/components/json-ld"
import { getBusinessJsonLd, getWebSiteJsonLd } from "@/lib/seo"
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
const gtagId = googleAdsId || gaId

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-UY" className={`${plusJakarta.variable} ${fraunces.variable} bg-cream`}>
      <head>
        <JsonLd id="todo-calefones-jsonld" data={getBusinessJsonLd()} />
        <JsonLd id="todo-calefones-website-jsonld" data={getWebSiteJsonLd()} />
        {gtagId && (
          <>
            <Script
              id="google-tag-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-tag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = window.gtag || gtag;
                  gtag('js', new Date());
                  ${gaId ? `gtag('config', ${JSON.stringify(gaId)});` : ""}
                  ${googleAdsId ? `gtag('config', ${JSON.stringify(googleAdsId)});` : ""}
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
        <ClientEnhancements />
      </body>
    </html>
  )
}
