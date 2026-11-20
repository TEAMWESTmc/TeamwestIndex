import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import { LogoMark } from "@/components/brand/logos"
import { GitHubIcon, YouTubeIcon } from "@/components/brand/brand-icons"
import { T } from "@/components/i18n-provider"
import { PageHero } from "@/components/page-hero"
import { pageMetadata } from "@/lib/metadata"
import { externalLinks, type ExternalLinkId } from "@/lib/site"

export const metadata = pageMetadata({
  title: "바로가기",
  description: "TEAMWEST의 채널과 서비스를 한곳에서 만나보세요.",
  path: "/links/",
})

const logos: Record<ExternalLinkId, ReactNode> = {
  youtube: <YouTubeIcon className="size-9 text-[#FF0000]" />,
  planetmc: (
    <Image
      src="/images/links/planetminecraft.png"
      alt=""
      width={40}
      height={40}
      className="size-10 [image-rendering:pixelated]"
    />
  ),
  resourcepack: (
    <Image
      src="/images/links/west-urban.png"
      alt=""
      width={40}
      height={40}
      className="size-10 [image-rendering:pixelated]"
    />
  ),
  status: <LogoMark className="size-9" />,
  github: <GitHubIcon className="size-9 text-[#181717] dark:text-white" />,
}

export default function LinksPage() {
  return (
    <>
      <PageHero image="/images/background_index.png" k="links.hero" />
      <section className="container mx-auto grid gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:py-16">
        {externalLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="group relative flex items-center gap-5 bg-card p-6 shadow-sm ring-1 ring-foreground/5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/40"
          >
            <span className="flex size-16 shrink-0 items-center justify-center bg-muted transition-colors group-hover:bg-accent">
              {logos[link.id]}
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              <span className="font-heading text-lg font-bold transition-colors group-hover:text-primary">
                {link.label}
              </span>
              <span className="text-sm text-muted-foreground">
                <T text={link.description} />
              </span>
            </span>
            <ArrowUpRightIcon
              className="absolute top-5 right-5 size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              aria-hidden
            />
          </a>
        ))}
      </section>
    </>
  )
}
