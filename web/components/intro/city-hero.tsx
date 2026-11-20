import {
  ArrowDownIcon,
  DownloadIcon,
  ExternalLinkIcon,
  MapIcon,
} from "lucide-react"

import { T } from "@/components/i18n-provider"
import { ParallaxImage } from "@/components/parallax-image"
import { buttonVariants } from "@/components/ui/button"
import { DYNMAP_URL, type City, type CityHeroInfo } from "@/lib/site"

const outlineOnDark = "border-white/30 bg-white/5 backdrop-blur-sm"

export function CityHero({ city, hero }: { city: City; hero: CityHeroInfo }) {
  return (
    <section className="dark relative isolate flex min-h-[calc(85svh-4rem)] items-end overflow-hidden bg-neutral-950 text-foreground">
      <ParallaxImage src={hero.image} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/55 to-background/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-background/85 via-background/25 to-transparent"
      />

      <div className="container mx-auto px-4 pt-28 pb-10 sm:pb-14">
        <h1 className="font-heading text-6xl leading-none font-black tracking-tight sm:text-8xl">
          <T text={city.name} />
        </h1>
        <p className="mt-3 font-heading text-xl font-semibold text-foreground/60 sm:text-2xl">
          <T text={{ ko: city.name.en, en: city.name.ko }} />
        </p>
        {hero.summary && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            <T text={hero.summary} />
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.liveMap && (
            <a href={DYNMAP_URL} className={buttonVariants({ size: "lg" })}>
              <MapIcon data-icon="inline-start" />
              <T k="home.hero.cta.dynmap" />
            </a>
          )}
          <a
            href={city.download.url}
            className={buttonVariants({
              size: "lg",
              variant: hero.liveMap ? "outline" : "default",
              className: hero.liveMap && outlineOnDark,
            })}
          >
            <DownloadIcon data-icon="inline-start" />
            <T k="city.cta.download" />
          </a>
          {!hero.liveMap && (
            <a
              href={city.postsUrl}
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: outlineOnDark,
              })}
            >
              <T k="city.cta.posts" />
              <ExternalLinkIcon data-icon="inline-end" />
            </a>
          )}
        </div>

        <div className="mt-14 flex items-end justify-between gap-8 border-t border-white/15 pt-8">
          <dl className="grid flex-1 grid-cols-3 items-start gap-4 sm:max-w-3xl sm:gap-10">
            {hero.facts.map((fact, i) => (
              <div key={i} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-foreground/60 sm:text-sm">
                  <T text={fact.label} />
                </dt>
                <dd className="font-heading text-2xl font-extrabold tabular-nums sm:text-4xl">
                  <T text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
          <a
            href="#content"
            aria-label="Scroll down"
            className="hidden size-12 shrink-0 items-center justify-center border border-white/20 text-foreground/70 transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <ArrowDownIcon className="size-5 motion-safe:animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
