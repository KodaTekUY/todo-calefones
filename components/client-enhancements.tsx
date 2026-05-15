"use client"

import { useEffect } from "react"

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
    initializeVercelAnalytics()
  }, [])

  return null
}
