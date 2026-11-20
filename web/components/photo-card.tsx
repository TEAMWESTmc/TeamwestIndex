import Image from "next/image"
import { MapPinIcon } from "lucide-react"

import { T } from "@/components/i18n-provider"
import type { Localized } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function PhotoCard({
  src,
  alt,
  name,
  address,
  href,
  className,
  imageClassName,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string
  alt: string
  name?: Localized
  address?: Localized
  href?: string
  className?: string
  imageClassName?: string
  sizes?: string
}) {
  return (
    <figure className={cn("group relative flex flex-col gap-3", className)}>
      <div
        className={cn(
          "relative aspect-video overflow-hidden bg-muted shadow-lg ring-1 ring-foreground/5",
          imageClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      {name && (
        <figcaption className="flex flex-col gap-1 px-1">
          <h2 className="font-heading text-xl font-bold">
            {href ? (
              <a
                href={href}
                className="transition-colors group-hover:text-primary after:absolute after:inset-0"
              >
                <T text={name} />
              </a>
            ) : (
              <T text={name} />
            )}
          </h2>
          {address && (
            <p className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
              <MapPinIcon className="size-4" aria-hidden />
              <T text={address} />
            </p>
          )}
        </figcaption>
      )}
    </figure>
  )
}
