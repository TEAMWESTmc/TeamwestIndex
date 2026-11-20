export const LANGS = ["ko", "en"] as const
export type Lang = (typeof LANGS)[number]

export type Localized = Record<Lang, string>

export const DEFAULT_LANG: Lang = "ko"
export const LANG_STORAGE_KEY = "tw-lang"

export const messages = {
  "nav.home": { ko: "홈", en: "Home" },
  "nav.dynmap": { ko: "실시간 지도", en: "Dynmap" },
  "nav.intro": { ko: "프로젝트", en: "Projects" },
  "nav.link": { ko: "바로가기", en: "Links" },
  "nav.language": { ko: "언어", en: "Language" },
  "nav.menu": { ko: "메뉴", en: "Menu" },
  "theme.toggle": { ko: "화면 테마", en: "Theme" },
  "theme.light": { ko: "라이트 모드", en: "Light" },
  "theme.dark": { ko: "다크 모드", en: "Dark" },
  "theme.system": { ko: "기기 설정 따르기", en: "System" },
  "footer.contact": { ko: "Contact Us", en: "Contact Us" },
  "footer.copyright": {
    ko: "© TEAMWEST All rights reserved.",
    en: "© TEAMWEST All rights reserved.",
  },

  "index.slc.name": { ko: "Song Lim City ( 송림시 )", en: "Song Lim City" },
  "index.slc.desc": {
    ko: "송림시는 TEAM WEST의 최신 프로젝트로 2017년부터 진행중인 프로젝트 입니다.\n현대와 근대 건축물들이 조화를 이루는 멋진 도시이며\n전용 리소스팩을 사용하여 더욱 몰입감 있는 도시를 제작중입니다\n사이트 상단 실시간 지도 메뉴에서 지금의 송림시 모습을 볼 수 있습니다.",
    en: "Song Lim City is TEAM WEST's latest project, ongoing since 2017.\nIt's a stunning city where modern and contemporary architecture blend harmoniously.\nWe use a custom resource pack for a more immersive urban experience.\nVisit the Dynmap link above to explore Song Lim City in real-time.",
  },
  "index.slc.btn.download": { ko: "다운로드", en: "Download" },
  "index.slc.btn.video": { ko: "소개영상", en: "Intro Video" },
  "index.slc.btn.doc": { ko: "소개문서", en: "Documentation" },
  "index.videos.title": {
    ko: "TEAMWEST의 건축물이 사용된\n영상들 입니다.",
    en: "Videos Featuring\nTEAMWEST's Builds",
  },

  "home.hero.eyebrow": {
    ko: "마인크래프트 컨텐츠 제작 팀",
    en: "Minecraft Content Creation Team",
  },
  "home.hero.cta.explore": {
    ko: "송림시 알아보기",
    en: "Explore Song Lim City",
  },
  "home.hero.cta.dynmap": { ko: "실시간 지도 보기", en: "Open Dynmap" },
  "home.stats.since": { ko: "첫 프로젝트", en: "First project" },
  "home.stats.projects": { ko: "도시 프로젝트", en: "City projects" },
  "home.stats.views": {
    ko: "작품이 등장한 영상 조회수",
    en: "Views on videos featuring our builds",
  },
  "home.featured.eyebrow": { ko: "최신 프로젝트", en: "Latest Project" },
  "home.featured.explore": { ko: "알아보기", en: "Explore" },
  "home.projects.eyebrow": { ko: "프로젝트", en: "Projects" },
  "home.projects.title": {
    ko: "TEAMWEST가 만든 도시들",
    en: "Cities Built by TEAMWEST",
  },
  "home.projects.more": { ko: "자세히 보기", en: "Learn more" },
  "home.videos.eyebrow": { ko: "영상 속 TEAMWEST", en: "Featured In" },
  "home.cta.title": {
    ko: "송림시를 직접 둘러보세요",
    en: "Explore Song Lim City Yourself",
  },
  "home.cta.desc": {
    ko: "맵 파일과 전용 리소스팩을 다운로드하거나,\n실시간 지도에서 지금의 송림시를 볼 수 있습니다.",
    en: "Download the map and its custom resource pack,\nor watch Song Lim City live on Dynmap.",
  },
  "home.cta.pack": { ko: "리소스팩", en: "Resource Pack" },

  "intro.post.more": { ko: "자세히 보기", en: "Read more" },
  "intro.award.badge": { ko: "이달의 건축", en: "Build of the Month" },
  "intro.award.title": {
    ko: '이달의 건축 "추천 건축"',
    en: 'Build of the Month "Recommended"',
  },
  "intro.award.source": {
    ko: "네이버 카페 '우리들의 마인크래프트 공간'",
    en: "Naver Cafe 'Our Minecraft Space'",
  },
  "city.cta.download": { ko: "다운로드", en: "Download" },
  "city.cta.posts": { ko: "관련 글 읽어보기", en: "Read related posts" },

  "links.hero": {
    ko: "TEAMWEST의 채널과 서비스를\n한곳에서 만나보세요.",
    en: "All TEAMWEST channels and services\nin one place.",
  },
} satisfies Record<string, Localized>

export type MessageKey = keyof typeof messages
