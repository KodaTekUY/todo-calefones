"use client"

import type { ComponentProps } from "react"
import { trackContactEvent, type ContactChannel } from "@/lib/analytics"

type TrackedLinkProps = Omit<ComponentProps<"a">, "onClick"> & {
  channel: ContactChannel
  location: string
}

export function TrackedLink({ channel, location, children, ...props }: TrackedLinkProps) {
  return (
    <a onClick={() => trackContactEvent(channel, location)} {...props}>
      {children}
    </a>
  )
}
