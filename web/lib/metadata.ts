import type { Metadata } from "next"

export const SITE_NAME = "TEAMWEST"
export const SITE_DESCRIPTION = "마인크래프트 컨텐츠 제작팀 TEAMWEST 입니다."
export const DEFAULT_OG_IMAGE = "/og/home.jpg"

export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title?: string
  description?: string
  path: string
  image?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "ko_KR",
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
