import { T } from "@/components/i18n-provider"
import { ParallaxImage } from "@/components/parallax-image"
import type { Localized, MessageKey } from "@/lib/i18n"

export function PageHero({
  image,
  ...text
}: { image: string } & ({ k: MessageKey } | { text: Localized })) {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900 py-14 sm:py-24">
      <ParallaxImage src={image} />
      <div className="absolute inset-0 -z-10 bg-neutral-950/50" aria-hidden />
      <p className="container mx-auto px-4 text-center font-heading text-2xl leading-snug font-extrabold text-balance text-white sm:text-3xl">
        <T {...text} />
      </p>
    </section>
  )
}
