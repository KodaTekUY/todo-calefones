type ContactChannel = "whatsapp" | "phone"

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const googleAdsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackContactEvent(channel: ContactChannel, location: string) {
  if (typeof window === "undefined" || !window.gtag) {
    return
  }

  window.gtag("event", "contact_click", {
    event_category: "lead",
    event_label: `${channel}:${location}`,
    contact_channel: channel,
    page_location: window.location.href,
  })

  if (googleAdsId && googleAdsConversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
    })
  }
}
