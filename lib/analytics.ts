export type ContactChannel = "whatsapp"

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const googleAdsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type TrackContactOptions = {
  eventCallback?: () => void
}

function runOnce(callback?: () => void) {
  if (!callback) {
    return undefined
  }

  let hasRun = false

  return () => {
    if (hasRun) {
      return
    }

    hasRun = true
    callback()
  }
}

export function trackContactEvent(channel: ContactChannel, location: string, options: TrackContactOptions = {}) {
  const eventCallback = runOnce(options.eventCallback)

  if (typeof window === "undefined" || !window.gtag) {
    eventCallback?.()
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
      event_callback: eventCallback,
      event_timeout: 1000,
    })
    return
  }

  eventCallback?.()
}
