"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export function ParallaxImage({
  src,
  speed = 0.5,
  className,
}: {
  src: string
  speed?: number
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      const parent = el?.parentElement
      if (!el || !parent) return
      const scrolled = Math.min(window.scrollY, parent.offsetHeight)
      el.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 -z-10 will-change-transform", className)}
    >
      <Image
        src={src}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
    </div>
  )
}
