import { HomeHero } from "@/components/home/home-hero"
import { pageMetadata } from "@/lib/metadata"
import {
  DownloadCta,
  FeaturedVideos,
  LatestProject,
  Projects,
} from "@/components/home/home-sections"

export const metadata = pageMetadata({ path: "/" })

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LatestProject />
      <Projects />
      <FeaturedVideos />
      <DownloadCta />
    </>
  )
}
