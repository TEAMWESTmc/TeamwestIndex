import Link from "next/link"
import { ArrowDownIcon, ArrowRightIcon, MapIcon } from "lucide-react"

import { LogoTypeA1 } from "@/components/brand/logos"
import { T } from "@/components/i18n-provider"
import { ParallaxImage } from "@/components/parallax-image"
import { buttonVariants } from "@/components/ui/button"
import type { Localized } from "@/lib/i18n"
import {
  cities,
  DYNMAP_URL,
  firstProjectYear,
  totalViewCount,
} from "@/lib/site"
import { cn } from "@/lib/utils"

const stats: { value: Localized; label: Parameters<typeof T>[0] }[] = [
  {
    value: { ko: String(firstProjectYear), en: String(firstProjectYear) },
    label: { k: "home.stats.since" },
  },
  {
    value: { ko: String(cities.length), en: String(cities.length) },
    label: { k: "home.stats.projects" },
  },
  {
    value: {
      ko: `${totalViewCount.toLocaleString("ko-KR")}만+`,
      en: `${(totalViewCount / 100).toFixed(1)}M+`,
    },
    label: { k: "home.stats.views" },
  },
]

export function HomeHero() {
  return (
    <section className="dark relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-neutral-950 text-foreground">
      <ParallaxImage src="/images/background_index.png" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/60 to-background/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-background/80 via-background/20 to-transparent"
      />

      <div className="container mx-auto px-4 pt-28 pb-10 sm:pb-14">
        <p className="text-xs font-semibold tracking-[0.12em] text-primary uppercase sm:text-sm">
          <T k="home.hero.eyebrow" />
        </p>
        <h1 className="mt-5">
          <span className="sr-only">TEAMWEST</span>
          <LogoTypeA1
            className="w-full max-w-[min(100%,34rem)] drop-shadow-xl"
            parts={{ mark: "text-primary", text: "text-white" }}
          />
        </h1>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/intro/slc/" className={buttonVariants({ size: "lg" })}>
            <T k="home.hero.cta.explore" />
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
          <a
            href={DYNMAP_URL}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/30 bg-white/5 backdrop-blur-sm"
            )}
          >
            <MapIcon data-icon="inline-start" />
            <T k="home.hero.cta.dynmap" />
          </a>
        </div>

        <div className="mt-14 flex items-end justify-between gap-8 border-t border-white/15 pt-8">
          <dl className="grid flex-1 grid-cols-3 items-start gap-4 sm:max-w-3xl sm:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-foreground/60 sm:text-sm">
                  <T {...stat.label} />
                </dt>
                <dd className="font-heading text-2xl font-extrabold tabular-nums sm:text-4xl">
                  <T text={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
          <a
            href="#latest"
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
