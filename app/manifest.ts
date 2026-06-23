import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TodoCalefones — Reparación de calefones en Montevideo y Canelones",
    short_name: "TodoCalefones",
    description:
      "Reparación, instalación, mantenimiento y service de calefones en Montevideo y Canelones. Atención por WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F0",
    theme_color: "#0F3D3E",
    lang: "es-UY",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  }
}
