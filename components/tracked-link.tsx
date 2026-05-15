"use client"

import type { ComponentProps } from "react"
import { trackContactEvent, type ContactChannel } from "@/lib/analytics"

type TrackedLinkProps = Omit<ComponentProps<"a">, "onClick"> & {
  channel: ContactChannel
  location: string
}

export function TrackedLink({ channel, location, children, ...props }: TrackedLinkProps) {
  const handleClick: ComponentProps<"a">["onClick"] = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      trackContactEvent(channel, location)
      return
    }

    const href = props.href
    const opensNewContext = props.target && props.target !== "_self"

    if (!href || opensNewContext) {
      trackContactEvent(channel, location)
      return
    }

    event.preventDefault()

    let hasNavigated = false
    const navigate = () => {
      if (hasNavigated) {
        return
      }

      hasNavigated = true
      window.location.href = href
    }
    const timeout = window.setTimeout(navigate, 1100)

    trackContactEvent(channel, location, {
      eventCallback: () => {
        window.clearTimeout(timeout)
        navigate()
      },
    })
  }

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
