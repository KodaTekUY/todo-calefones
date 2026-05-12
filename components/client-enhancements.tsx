"use client"

import { useEffect } from "react"
import { trackContactEvent, type ContactChannel } from "@/lib/analytics"

const gaId = process.env.NEXT_PUBLIC_GA_ID
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const gtagId = gaId || googleAdsId
const contactSelector = "[data-contact-channel][data-contact-location]"

function runWhenIdle(callback: () => void) {
  const schedule = () => {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(callback, { timeout: 3000 })
      return
    }

    setTimeout(callback, 1)
  }

  if (document.readyState === "complete") {
    schedule()
    return
  }

  window.addEventListener("load", schedule, { once: true })
}

function initializeGoogleTag() {
  if (!gtagId || window.gtag) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }

  window.gtag("js", new Date())

  if (gaId) {
    window.gtag("config", gaId)
  }

  if (googleAdsId) {
    window.gtag("config", googleAdsId)
  }

  runWhenIdle(() => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gtagId}"]`)) {
      return
    }

    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    document.head.appendChild(script)
  })
}

function initializeVercelAnalytics() {
  if (process.env.NODE_ENV !== "production") {
    return
  }

  runWhenIdle(() => {
    void import("@vercel/analytics").then(({ inject }) => {
      inject({ framework: "next" })
    })
  })
}

function isContactChannel(value: string | undefined): value is ContactChannel {
  return value === "phone" || value === "whatsapp"
}

export function ClientEnhancements() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll(".scroll-reveal"))

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    initializeGoogleTag()
    initializeVercelAnalytics()

    const handleContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const link = event.target.closest<HTMLElement>(contactSelector)
      const channel = link?.dataset.contactChannel
      const location = link?.dataset.contactLocation

      if (isContactChannel(channel) && location) {
        trackContactEvent(channel, location)
      }
    }

    document.addEventListener("click", handleContactClick, { capture: true })

    return () => document.removeEventListener("click", handleContactClick, { capture: true })
  }, [])

  return null
}
