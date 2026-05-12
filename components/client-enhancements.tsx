"use client"

import { useEffect } from "react"

const gaId = process.env.NEXT_PUBLIC_GA_ID
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const gtagId = gaId || googleAdsId

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
  }, [])

  return null
}
