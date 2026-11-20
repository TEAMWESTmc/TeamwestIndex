"use client"

import * as React from "react"
import Image from "next/image"
import { AwardIcon, ExternalLinkIcon } from "lucide-react"

import { T } from "@/components/i18n-provider"
import { buttonVariants } from "@/components/ui/button"
import { cafePostUrl, type CafePost } from "@/lib/site"
import { cn } from "@/lib/utils"

export function CafePostSection({
  post,
  index,
}: {
  post: CafePost
  index: number
}) {
  const [active, setActive] = React.useState(0)
  const reversed = index % 2 === 1

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        className={cn(
          "flex flex-col gap-3 lg:col-span-7",
          reversed && "lg:order-2"
        )}
      >
        <div className="relative aspect-[1600/861] overflow-hidden bg-muted shadow-xl">
          {post.award && (
            <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-md">
              <AwardIcon className="size-3.5" aria-hidden />
              <T k="intro.award.badge" />
            </span>
          )}
          {post.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === active ? post.title.en : ""}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className={cn(
                "object-cover transition-opacity duration-500",
                i === active ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {post.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${i + 1} / ${post.images.length}`}
              aria-pressed={i === active}
              className={cn(
                "relative aspect-video overflow-hidden bg-muted transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
                i === active
                  ? "ring-2 ring-primary"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="15vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-start gap-4 lg:col-span-5",
          reversed && "lg:order-1"
        )}
      >
        <p className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-heading text-2xl font-black text-primary tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <time dateTime={post.date.replaceAll(".", "-")}>{post.date}</time>
        </p>
        {post.award && (
          <div className="flex items-center gap-3 border border-primary/30 bg-primary/5 px-3.5 py-2.5">
            <AwardIcon className="size-5 shrink-0 text-primary" aria-hidden />
            <div className="flex flex-col gap-0.5 leading-tight">
              <span className="text-sm font-semibold text-primary">
                <T text={post.award} /> <T k="intro.award.title" />
              </span>
              <span className="text-xs text-muted-foreground">
                <T k="intro.award.source" />
              </span>
            </div>
          </div>
        )}
        <h2 className="font-heading text-2xl font-bold text-balance sm:text-3xl">
          <T text={post.title} />
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          <T text={post.description} />
        </p>
        <a href={cafePostUrl(post.id)} className={cn(buttonVariants(), "mt-2")}>
          <T k="intro.post.more" />
          <ExternalLinkIcon data-icon="inline-end" />
        </a>
      </div>
    </article>
  )
}
