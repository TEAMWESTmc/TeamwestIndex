import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  DownloadIcon,
  FileTextIcon,
  MapIcon,
  MapPinIcon,
  PackageIcon,
  PlayIcon,
} from "lucide-react"

import { LogoMark } from "@/components/brand/logos"
import { SlcCarousel } from "@/components/home/slc-carousel"
import { T } from "@/components/i18n-provider"
import { buttonVariants } from "@/components/ui/button"
import type { MessageKey } from "@/lib/i18n"
import {
  cities,
  cityName,
  DYNMAP_URL,
  formatViews,
  getCity,
  RESOURCE_PACK_URL,
  SLC_DOC_URL,
  SLC_INTRO_VIDEO_URL,
  videos,
  type Video,
} from "@/lib/site"
import { cn } from "@/lib/utils"

function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: MessageKey
  title: MessageKey
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
        <T k={eyebrow} />
      </p>
      <h2 className="font-heading text-3xl leading-tight font-bold text-balance sm:text-4xl">
        <T k={title} />
      </h2>
    </div>
  )
}

export function LatestProject() {
  const slc = getCity("slc")!
  return (
    <section id="latest" className="scroll-mt-16 py-20 lg:py-28">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SlcCarousel
            badge={
              <span className="absolute top-4 left-4 bg-primary px-3 py-1.5 text-xs font-semibold tracking-widest text-primary-foreground uppercase">
                <T text={slc.period} />
              </span>
            }
          />
        </div>

        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <SectionHeading
            eyebrow="home.featured.eyebrow"
            title="index.slc.name"
          />
          <p className="leading-relaxed text-muted-foreground">
            <T k="index.slc.desc" />
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Link href="/intro/slc/" className={buttonVariants()}>
              <T k="home.featured.explore" />
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
            <a
              href={SLC_INTRO_VIDEO_URL}
              className={buttonVariants({ variant: "secondary" })}
            >
              <PlayIcon data-icon="inline-start" />
              <T k="index.slc.btn.video" />
            </a>
            <a
              href={SLC_DOC_URL}
              className={buttonVariants({ variant: "secondary" })}
            >
              <FileTextIcon data-icon="inline-start" />
              <T k="index.slc.btn.doc" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="border-y bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="home.projects.eyebrow"
          title="home.projects.title"
          className="mb-10 lg:mb-14"
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/intro/${city.slug}/`}
              className="group flex flex-col gap-3 sm:gap-4"
            >
              <div className="relative aspect-[22/15] overflow-hidden bg-muted shadow-md ring-1 ring-foreground/5">
                <Image
                  src={city.download.image}
                  alt={city.name.en}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-background/90 px-2 py-0.5 text-[0.6875rem] font-semibold tabular-nums backdrop-blur sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-xs">
                  <T text={city.period} />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center justify-between gap-2 font-heading text-base font-bold transition-colors group-hover:text-primary sm:text-xl">
                  <T text={city.name} />
                  <ArrowRightIcon className="hidden size-5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
                </h3>
                <p className="line-clamp-3 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  <T
                    text={
                      city.summary ?? {
                        ko: city.hero.ko.replaceAll("\n", " "),
                        en: city.hero.en.replaceAll("\n", " "),
                      }
                    }
                  />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedVideos() {
  const sorted = [...videos].sort(
    (a, b) =>
      Number(b.map === "slc") - Number(a.map === "slc") ||
      b.viewCount - a.viewCount
  )
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="home.videos.eyebrow"
          title="index.videos.title"
          className="mb-10 lg:mb-14"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {sorted.map((video, i) => (
            <VideoTile
              key={video.id}
              video={video}
              featured={i === 0}
              hideOnTwoCol={
                i === sorted.length - 1 && (sorted.length - 1) % 2 === 1
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoTile({
  video,
  featured,
  hideOnTwoCol,
}: {
  video: Video
  featured: boolean
  hideOnTwoCol: boolean
}) {
  return (
    <a
      href={video.url}
      className={cn(
        "group relative isolate block aspect-video overflow-hidden bg-neutral-900 text-white shadow-md",
        featured && "sm:col-span-2 lg:row-span-2 lg:aspect-auto",
        hideOnTwoCol && "sm:max-lg:hidden"
      )}
    >
      <Image
        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
        alt=""
        fill
        sizes={
          featured
            ? "(min-width: 640px) 66vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        }
        className="-z-10 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent"
      />

      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 left-1/2 flex -translate-1/2 scale-90 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100",
          featured ? "size-12 sm:size-16" : "size-12"
        )}
      >
        <PlayIcon
          className={cn(
            "fill-current",
            featured ? "size-5 sm:size-7" : "size-5"
          )}
        />
      </span>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col gap-1.5",
          featured ? "p-4 sm:p-6 lg:p-8" : "p-4"
        )}
      >
        <span className="flex items-center gap-1 text-xs font-medium text-white/70">
          <MapPinIcon className="size-3.5" aria-hidden />
          <T text={cityName(video.map)} />
        </span>
        <h3
          className={cn(
            "font-heading leading-snug font-bold text-balance",
            featured
              ? "line-clamp-1 text-base sm:line-clamp-none sm:text-2xl lg:text-3xl"
              : "line-clamp-1 text-base"
          )}
        >
          {video.title}
        </h3>
        <p
          className={cn(
            "text-white/80",
            featured ? "text-sm sm:text-base" : "text-sm"
          )}
        >
          {video.channel}
          <span className="mx-2 text-white/40">·</span>
          <span className="font-semibold text-primary">
            <T text={formatViews(video.viewCount)} />
          </span>
        </p>
      </div>
    </a>
  )
}

export function DownloadCta() {
  const onPrimary =
    "border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-30 mix-blend-luminosity"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-primary via-primary/90 to-primary/60"
      />
      <LogoMark
        className="pointer-events-none absolute top-1/2 -right-16 -z-10 w-[28rem] -translate-y-1/2 opacity-15 lg:right-10"
        parts={{ mark: "text-white" }}
      />
      <div className="container mx-auto flex flex-col gap-8 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            <T k="home.cta.title" />
          </h2>
          <p className="max-w-xl leading-relaxed text-primary-foreground/85">
            <T k="home.cta.desc" />
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={getCity("slc")!.download.url}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-primary hover:bg-white/90"
            )}
          >
            <DownloadIcon data-icon="inline-start" />
            <T k="index.slc.btn.download" />
          </a>
          <a
            href={RESOURCE_PACK_URL}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              onPrimary
            )}
          >
            <PackageIcon data-icon="inline-start" />
            <T k="home.cta.pack" />
          </a>
          <a
            href={DYNMAP_URL}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              onPrimary
            )}
          >
            <MapIcon data-icon="inline-start" />
            <T k="nav.dynmap" />
          </a>
        </div>
      </div>
    </section>
  )
}
