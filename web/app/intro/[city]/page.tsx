import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CafePostSection } from "@/components/intro/cafe-post-section"
import { CityHero } from "@/components/intro/city-hero"
import { PhotoCard } from "@/components/photo-card"
import { pageMetadata } from "@/lib/metadata"
import { cities, getCity } from "@/lib/site"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata(
  props: PageProps<"/intro/[city]">
): Promise<Metadata> {
  const { city: slug } = await props.params
  const city = getCity(slug)
  if (!city) return {}
  return pageMetadata({
    title: city.name.ko,
    description: (city.cityHero.summary ?? city.hero).ko.replaceAll("\n", " "),
    path: `/intro/${city.slug}/`,
    image: `/og/${city.slug}.jpg`,
  })
}

const spanClass = {
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
} as const
const aspectClass = {
  5: "aspect-[788/630]",
  6: "aspect-video",
  7: "aspect-[1118/630]",
} as const

export default async function IntroPage(props: PageProps<"/intro/[city]">) {
  const { city: slug } = await props.params
  const city = getCity(slug)
  if (!city) notFound()

  return (
    <>
      <CityHero city={city} hero={city.cityHero} />

      {city.posts ? (
        <section
          id="content"
          className="container mx-auto flex scroll-mt-16 flex-col gap-20 px-4 py-14 lg:gap-28 lg:py-20"
        >
          {city.posts.map((post, i) => (
            <CafePostSection key={post.id} post={post} index={i} />
          ))}
        </section>
      ) : (
        <section
          id="content"
          className="container mx-auto grid scroll-mt-16 gap-x-6 gap-y-10 px-4 py-14 md:grid-cols-12 lg:py-20"
        >
          {city.gallery.map((item, i) => {
            const span = item.span ?? 6
            return (
              <PhotoCard
                key={i}
                src={item.src}
                alt={item.alt}
                name={item.name}
                address={item.address}
                className={cn(spanClass[span])}
                imageClassName={aspectClass[span]}
                sizes={`(min-width: 768px) ${Math.round((span / 12) * 100)}vw, 100vw`}
              />
            )
          })}
        </section>
      )}
    </>
  )
}
