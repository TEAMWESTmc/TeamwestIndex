"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { MapPinIcon } from "lucide-react"

import { T } from "@/components/i18n-provider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { Localized } from "@/lib/i18n"
import { getCity } from "@/lib/site"
import { cn } from "@/lib/utils"

const AUTOPLAY_DELAY = 4000

type Slide = { src: string; alt: string; name: Localized; address?: Localized }

const PICKS = ["cityhall", "yeseok", "sehee", "citycouncil", "seongsu"]
const slides: Slide[] = [
  {
    src: "/images/slc.png",
    alt: "Song Lim City",
    name: { ko: "송림시 전경", en: "Song Lim City Overview" },
    address: { ko: "송림시 송산구 송림동", en: "Songlim-dong, Songsan-gu" },
  },
  ...getCity("slc")!
    .gallery.filter((item) =>
      PICKS.some((pick) => item.src.includes(`/${pick}.`))
    )
    .map((item) => ({
      src: item.src,
      alt: item.alt,
      name: item.name!,
      address: item.address,
    })),
]

export function SlcCarousel({ badge }: { badge?: React.ReactNode }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [autoplay] = React.useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect).on("reInit", onSelect)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      api.plugins().autoplay?.stop()
    }
    return () => {
      api.off("select", onSelect).off("reInit", onSelect)
    }
  }, [api])

  return (
    <div className="flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[autoplay]}
        className="group/carousel shadow-xl"
        aria-label="Song Lim City"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={slide.src} className="pl-0">
              <figure className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-linear-to-t from-black/75 to-transparent px-5 pt-12 pb-4 text-white">
                  <span className="font-heading text-lg font-bold">
                    <T text={slide.name} />
                  </span>
                  {slide.address && (
                    <span className="flex items-center gap-1 text-xs text-white/75">
                      <MapPinIcon className="size-3.5" aria-hidden />
                      <T text={slide.address} />
                    </span>
                  )}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        {badge}

        <CarouselPrevious
          variant="secondary"
          className="top-auto right-14 bottom-4 left-auto my-0 opacity-0 transition-opacity group-hover/carousel:opacity-100 focus-visible:opacity-100 max-md:hidden"
        />
        <CarouselNext
          variant="secondary"
          className="top-auto right-4 bottom-4 my-0 opacity-0 transition-opacity group-hover/carousel:opacity-100 focus-visible:opacity-100 max-md:hidden"
        />
      </Carousel>

      <div className="flex gap-1.5" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={current === i}
            aria-label={`${i + 1} / ${slides.length}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-1 transition-all duration-300",
              current === i
                ? "w-10 bg-primary"
                : "w-5 bg-foreground/15 hover:bg-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  )
}
