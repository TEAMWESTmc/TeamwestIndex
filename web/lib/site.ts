import type { Localized } from "@/lib/i18n"

export const SITE_URL = "https://teamwest.co.kr"
export const CONTACT_EMAIL = "admin@teamwest.co.kr"
export const DYNMAP_URL = "https://dmap.teamwest.co.kr/"

export type ExternalLinkId =
  "youtube" | "planetmc" | "resourcepack" | "status" | "github"

export type ExternalLink = {
  id: ExternalLinkId
  label: string
  href: string
  description: Localized
}

export const externalLinks: ExternalLink[] = [
  {
    id: "youtube",
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCmMPByJDpbNjmFCvM0-xNHA",
    description: {
      ko: "공식 유튜브 채널",
      en: "Official YouTube channel",
    },
  },
  {
    id: "planetmc",
    label: "Planet Minecraft",
    href: "https://www.planetminecraft.com/member/west_builders/",
    description: { ko: "공식 계정", en: "Official account" },
  },
  {
    id: "resourcepack",
    label: "ResourcePack",
    href: "https://github.com/TEAMWESTmc/West-Urban",
    description: {
      ko: "리소스팩 West Urban",
      en: "West Urban resource pack",
    },
  },
  {
    id: "status",
    label: "Server Status",
    href: "https://status.teamwest.co.kr",
    description: {
      ko: "서비스 운영 상태",
      en: "Services status",
    },
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/TEAMWESTmc",
    description: {
      ko: "GitHub 저장소",
      en: "Repositories on GitHub",
    },
  },
]

export type CitySlug = "slc" | "twg" | "huc" | "sgc"

type GalleryItem = {
  src: string
  alt: string
  name?: Localized
  address?: Localized
  span?: 5 | 6 | 7
}

export type CafePost = {
  id: number
  slug: string
  title: Localized
  date: string
  description: Localized
  images: string[]
  award?: Localized
}

export const cafePostUrl = (id: number) =>
  `https://cafe.naver.com/minecraftgame/${id}`

export type CityHeroInfo = {
  image: string
  summary?: Localized
  liveMap?: boolean
  facts: { value: Localized; label: Localized }[]
}

export type City = {
  slug: CitySlug
  name: Localized
  period: Localized
  tagline: Localized
  hero: Localized
  summary?: Localized
  postsUrl: string
  download: { image: string; url: string }
  gallery: GalleryItem[]
  posts?: CafePost[]
  cityHero: CityHeroInfo
}

export const cities: City[] = [
  {
    slug: "slc",
    tagline: {
      ko: "근현대 도시",
      en: "Modern & classic city",
    },
    name: { ko: "송림시", en: "Song Lim City" },
    period: { ko: "2017 ~ 진행중", en: "2017 ~ Present" },
    hero: {
      ko: "송림시는 현재 진행중인 프로젝트로,\n상단의 실시간 지도를 눌러 현재 모습을 구경하실 수 있습니다.",
      en: "Song Lim City is an ongoing project.\nClick Dynmap above to explore it in real-time.",
    },
    cityHero: {
      image: "/images/intro/slc/hero.jpg",
      summary: {
        ko: "송림시는 현대와 근대가 조화를 이루는 도시 프로젝트 입니다.",
        en: "Song Lim City is a city project where modern and contemporary architecture blend in harmony.",
      },
      liveMap: true,
      facts: [
        {
          value: { ko: "2017", en: "2017" },
          label: { ko: "프로젝트 시작", en: "Project started" },
        },
        {
          value: { ko: "2023.05", en: "2023.05" },
          label: { ko: "첫 공개", en: "First release" },
        },
        {
          value: { ko: "제작중", en: "In progress" },
          label: { ko: "현재 상태", en: "Status" },
        },
      ],
    },
    summary: {
      ko: "송림시는 현대와 근대가 조화를 이루는 도시 프로젝트이며, 현재 제작중에 있습니다.",
      en: "Song Lim City is a city project where modern and contemporary architecture blend in harmony, and it is currently in production.",
    },
    postsUrl:
      "https://cafe.naver.com/f-e/cafes/22109952/menus/0?viewType=L&ta=ARTICLE_COMMENT&page=1&q=%EC%86%A1%EB%A6%BC%EC%8B%9C",
    posts: [
      {
        id: 1934435,
        slug: "mbr",
        award: { ko: "2025년 12월", en: "December 2025" },
        title: { ko: "MBR 방송국", en: "MBR Broadcasting" },
        date: "2025.12.11",
        description: {
          ko: "강변 고속도로 옆에 지은 MBR 방송사 송림지사입니다. 2013년경 이전 도시맵 MRC에서 시작해 매 프로젝트마다 지어져 온 가상 방송사로, 빨간 간판이 트레이드마크입니다.",
          en: "The Song Lim branch of MBR, built beside the riverside expressway. A fictional broadcaster that first appeared around 2013 in MRC, an earlier city map, and has been rebuilt in every project since. Its red sign is the trademark.",
        },
        images: [1, 2, 3, 4].map((n) => `/images/intro/slc/posts/mbr-${n}.jpg`),
      },
      {
        id: 1930726,
        slug: "staplex",
        award: { ko: "2025년 8월", en: "August 2025" },
        title: { ko: "스타플렉스 금융타운", en: "Staplex Finance Center" },
        date: "2025.08.29",
        description: {
          ko: "송림시 구도심의 송림 증권거래소 일대, 제1 송림금융지구에 들어선 오피스 건물입니다. A동과 B동의 사무 공간부터 지하 주차장과 설비까지 함께 설계했습니다.",
          en: "An office complex in the 1st Song Lim Financial District, around the Song Lim Stock Exchange in the old downtown. The design covers everything from the offices in towers A and B to the underground parking and utilities.",
        },
        images: [1, 2, 3, 4].map(
          (n) => `/images/intro/slc/posts/staplex-${n}.jpg`
        ),
      },
      {
        id: 1924898,
        slug: "central-plaza",
        title: { ko: "송림 중앙 광장", en: "Song Lim Central Plaza" },
        date: "2025.04.24",
        description: {
          ko: "송림시 중심가의 큰 광장으로, 시민들의 쉼터이자 만남의 장소입니다. 많은 팀원이 함께 만든 곳으로, 광장 끝의 송림궁과 정원, 트램역, 바다 옆 야경까지 담았습니다.",
          en: "A large plaza in downtown Song Lim City, a resting place and meeting spot for its citizens. Built by many TEAMWEST members, it includes Songlim Palace and its gardens, a tram station, and night views by the sea.",
        },
        images: [1, 2, 3, 4].map(
          (n) => `/images/intro/slc/posts/central-plaza-${n}.jpg`
        ),
      },
      {
        id: 1907354,
        slug: "newbay-hotel",
        title: {
          ko: "바다가 보이는 뉴베이 호텔",
          en: "New Bay Hotel by the Sea",
        },
        date: "2024.05.12",
        description: {
          ko: "송림시 해안가, 교통이 복잡한 교차로 앞에 자리 잡은 호텔입니다. 여러 건물이 얽힌 독특한 구조에 오션뷰·시티뷰 객실과 야외 수영장, 주변 상권까지 함께 만들었습니다.",
          en: "A hotel on Song Lim City's waterfront, facing a busy intersection. Its tangle of connected buildings holds ocean-view and city-view rooms, an outdoor pool, and the shops around it.",
        },
        images: [1, 2, 3, 4].map(
          (n) => `/images/intro/slc/posts/newbay-hotel-${n}.jpg`
        ),
      },
    ],
    download: {
      image: "/images/cities/slc.jpg",
      url: "https://www.mediafire.com/file/t6af561qvk43s08/Song_Lim_City_-_TEAMWEST.zip/file",
    },
    gallery: [
      {
        src: "/images/intro/slc/cityhall.png",
        alt: "SongLim City Hall",
        name: { ko: "송림시청", en: "City Hall" },
        address: { ko: "송림시 송산구 송림동", en: "Songlim-dong, Songsan-gu" },
        span: 5,
      },
      {
        src: "/images/intro/slc/yeseok.png",
        alt: "Yeseok River",
        name: { ko: "예석천 주변", en: "Yeseok River Area" },
        address: { ko: "송림시 송산구 예석동", en: "Yeseok-dong, Songsan-gu" },
        span: 7,
      },
      {
        src: "/images/intro/slc/sehee.png",
        alt: "Sehee University",
        name: { ko: "세희대학교", en: "Sehee University" },
        address: { ko: "송림시 고천구 세희동", en: "Sehee-dong, Gocheon-gu" },
        span: 7,
      },
      {
        src: "/images/intro/slc/citycouncil.png",
        alt: "City Council",
        name: { ko: "송림시 의회", en: "City Council" },
        address: { ko: "송림시 송산구 송림동", en: "Songlim-dong, Songsan-gu" },
        span: 5,
      },
      {
        src: "/images/intro/slc/cityapt.png",
        alt: "Apartment",
        name: {
          ko: "시청역 앞 아파트",
          en: "Apartments near City Hall Station",
        },
        address: {
          ko: "송림시 송산구 교성동",
          en: "Gyoseong-dong, Songsan-gu",
        },
        span: 5,
      },
      {
        src: "/images/intro/slc/seongsu.png",
        alt: "Seongsu-dong Cafe",
        name: { ko: "성수동의 한 카페", en: "A Cafe in Seongsu-dong" },
        address: { ko: "송림시 송산구 성수동", en: "Seongsu-dong, Songsan-gu" },
        span: 7,
      },
    ],
  },
  {
    slug: "twg",
    tagline: { ko: "중세 하늘섬", en: "Medieval sky island" },
    name: { ko: "서쪽으로의 문", en: "The West Gate" },
    period: { ko: "2015", en: "2015" },
    hero: {
      ko: "서쪽으로의 문 ( The West Gate )은\n2015년 진행된 프로젝트로 중세 하늘섬 프로젝트 입니다.",
      en: "The West Gate is\na medieval sky island project from 2015.",
    },
    cityHero: {
      image: "/images/cities/twg.jpg",
      facts: [
        {
          value: { ko: "2015", en: "2015" },
          label: { ko: "진행 연도", en: "Year" },
        },
        {
          value: { ko: "하늘섬", en: "Skylands" },
          label: { ko: "테마", en: "Theme" },
        },
        {
          value: { ko: "V1.03", en: "V1.03" },
          label: { ko: "배포 버전", en: "Release" },
        },
      ],
    },
    postsUrl:
      "https://blog.naver.com/PostList.naver?blogId=yesok1129&from=postList&categoryNo=96",
    download: {
      image: "/images/cities/twg.jpg",
      url: "http://www.mediafire.com/file/skifl77aziy8sat/The_West_Gate_-_Skylands_V.1.03.zip/file",
    },
    gallery: [1, 2, 3, 4].map((n) => ({
      src: `/images/intro/twg/${n}.png`,
      alt: "The West Gate",
    })),
  },
  {
    slug: "huc",
    tagline: { ko: "현대 도시", en: "Modern city" },
    name: { ko: "한울시", en: "Han-ul City" },
    period: { ko: "2015", en: "2015" },
    hero: {
      ko: "한울시는 2015년 진행된 프로젝트로 현대 도시 프로젝트 입니다.",
      en: "Han-ul City is a modern city project from 2015.",
    },
    cityHero: {
      image: "/images/background_huc.png",
      facts: [
        {
          value: { ko: "2015", en: "2015" },
          label: { ko: "진행 연도", en: "Year" },
        },
        {
          value: { ko: "현대 도시", en: "Modern City" },
          label: { ko: "테마", en: "Theme" },
        },
        {
          value: { ko: "V2", en: "V2" },
          label: { ko: "배포 버전", en: "Release" },
        },
      ],
    },
    postsUrl:
      "https://blog.naver.com/PostList.naver?blogId=yesok1129&from=postList&categoryNo=98",
    download: {
      image: "/images/cities/huc.jpg",
      url: "http://www.mediafire.com/file/5vryvphgg49odcp/HUC_Project_V2_-_West_Build_Team.zip/file",
    },
    gallery: [
      ["Modern House Complex", "모던하우스 단지"],
      ["International Business District", "국제업무지구"],
      ["InderSide Headquarters", "인더사이드 본사"],
      ["Han-ul Bridge", "한울대교"],
      ["Fox Town", "폭스타운"],
      ["Water Sports Arena", "수상 경기장"],
    ].map(([en, ko], i) => ({
      src: `/images/intro/huc/${i + 1}.png`,
      alt: en,
      name: { ko, en },
    })),
  },
  {
    slug: "sgc",
    tagline: { ko: "현대 도시", en: "Modern city" },
    name: { ko: "서경시", en: "Seo-gyeong City" },
    period: { ko: "2014", en: "2014" },
    hero: {
      ko: "서경시는 2014년 진행된 프로젝트로 현대 도시 프로젝트 입니다.",
      en: "Seo-gyeong City is a modern city project from 2014.",
    },
    cityHero: {
      image: "/images/cities/sgc.jpg",
      facts: [
        {
          value: { ko: "2014", en: "2014" },
          label: { ko: "진행 연도", en: "Year" },
        },
        {
          value: { ko: "현대 도시", en: "Modern City" },
          label: { ko: "테마", en: "Theme" },
        },
        {
          value: { ko: "3.0", en: "3.0" },
          label: { ko: "배포 버전", en: "Release" },
        },
      ],
    },
    postsUrl:
      "https://blog.naver.com/PostList.naver?blogId=yesok1129&from=postList&categoryNo=86",
    download: {
      image: "/images/cities/sgc.jpg",
      url: "http://www.mediafire.com/file/t51vr52t5940sjo/SGC_3.0_-_West_Build_Team.zip/file",
    },
    gallery: [
      ["Seo-gyeong Station", "서경역"],
      ["Inland Downtown", "내륙 도심"],
      ["2nd Food Town", "제2 먹자타운"],
      ["1st Food Town", "제1 먹자타운"],
      ["Old / New Downtown", "구 / 신 시내권"],
      ["Inland Downtown", "내륙 도심"],
    ].map(([en, ko], i) => ({
      src: `/images/intro/sgc/${i + 1}.png`,
      alt: en,
      name: { ko, en },
    })),
  },
]

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}

export const cityName = (slug: CitySlug) => getCity(slug)!.name

export type Video = {
  id: string
  url: string
  title: string
  channel: string
  viewCount: number
  map: CitySlug
}

export const videos: Video[] = [
  {
    id: "h9hrzOoWOSI",
    url: "https://www.youtube.com/watch?v=h9hrzOoWOSI&list=PLbeHrp_B4_oNWu3T5NTpqFab4Tqy_jo66",
    title: "'스틸 하트' 시리즈",
    channel: "잠뜰 TV",
    viewCount: 305,
    map: "huc",
  },
  {
    id: "uugYjRzArUE",
    url: "https://www.youtube.com/watch?v=uugYjRzArUE&list=PL4yzSQhGq2XUZEtU8MKGJI0kikVNZx5nb",
    title: "'좀비 아포칼립스 리마스터' 시리즈",
    channel: "Hoodie",
    viewCount: 139,
    map: "slc",
  },
  {
    id: "jufYB7RB1HQ",
    url: "https://www.youtube.com/watch?v=jufYB7RB1HQ",
    title: "마인크래프트 코믹 꽁트 상황극",
    channel: "양띵 유튜브",
    viewCount: 239,
    map: "sgc",
  },
  {
    id: "7kIQCtuOwjc",
    url: "https://www.youtube.com/watch?v=7kIQCtuOwjc",
    title: "좀비로 가득찬 도시.. 내 딸은 내가 지킨다!!",
    channel: "도티 TV",
    viewCount: 810,
    map: "huc",
  },
  {
    id: "ErAADht1UiE",
    url: "https://www.youtube.com/watch?v=ErAADht1UiE&list=PLbeHrp_B4_oPf8oFf9zawcH8p5jNLJ9l-&index=1",
    title: "'마인크래프트 GTA' 시리즈",
    channel: "잠뜰 TV",
    viewCount: 3105,
    map: "sgc",
  },
  {
    id: "wTaWNVKfo8o",
    url: "https://www.youtube.com/watch?v=wTaWNVKfo8o",
    title: "'미스터리 수사반' OST - Trace My Shadow",
    channel: "잠뜰 TV",
    viewCount: 175,
    map: "slc",
  },
]

export function formatViews(viewCount: number): Localized {
  return {
    ko: `${viewCount.toLocaleString("ko-KR")}만회`,
    en: `${Number.parseFloat((viewCount / 100).toFixed(2))}M views`,
  }
}

export const totalViewCount = videos.reduce((sum, v) => sum + v.viewCount, 0)

export const firstProjectYear = Math.min(
  ...cities.map((c) => Number.parseInt(c.period.en, 10))
)

export const RESOURCE_PACK_URL = "https://github.com/TEAMWESTmc/West-Urban"

export const SLC_INTRO_VIDEO_URL = "https://www.youtube.com/watch?v=aIuPzaPdkUg"
export const SLC_DOC_URL = "https://cafe.naver.com/minecraftgame/1886820"
