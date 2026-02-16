/**
 * TEAMWEST i18n (Internationalization) System
 * Supports: Korean (ko), English (en)
 * Auto-detects browser language; defaults to English for non-Korean users.
 */
(function () {
  'use strict';

  var translations = {
    // ===== COMMON (Nav & Footer) =====
    'nav.home': { ko: 'Home', en: 'Home' },
    'nav.intro': { ko: 'Intro', en: 'Intro' },
    'nav.link': { ko: 'Link', en: 'Links' },
    'nav.download': { ko: 'Download', en: 'Download' },
    'nav.slc': { ko: '송림시', en: 'Song Lim City' },
    'nav.twg': { ko: '서쪽으로의 문', en: 'The West Gate' },
    'nav.huc': { ko: '한울시', en: 'Han-ul City' },
    'nav.sgc': { ko: '서경시', en: 'Seo-gyeong City' },
    'nav.lang': { ko: 'EN', en: 'KO' },
    'footer.contact': { ko: 'Contact Us', en: 'Contact Us' },
    'footer.copyright': { ko: '\u00A9 TEAMWEST All rights reserved.', en: '\u00A9 TEAMWEST All rights reserved.' },

    // ===== INDEX PAGE =====
    'index.hero': {
      ko: '마인크래프트 컨텐츠 제작 팀<br>TEAMWEST 입니다.',
      en: 'Minecraft Content Creation Team<br>TEAMWEST'
    },
    'index.slc.period': { ko: '2017 ~ Now.', en: '2017 ~ Present' },
    'index.slc.name': { ko: 'Song Lim City ( 송림시 )', en: 'Song Lim City' },
    'index.slc.desc': {
      ko: '송림시는 TEAM WEST의 최신 프로젝트로 2017년부터 진행중인 프로젝트 입니다. <br> 현대와 근대 건축물들이 조화를 이루는 멋진 도시이며 <br> 전용 리소스팩을 사용하여 더욱 몰입감 있는 도시를 제작중입니다 <br>사이트 상단 Dynmap 메뉴에서 실시간 송림시의 모습을 볼 수 있습니다.',
      en: 'Song Lim City is TEAM WEST\'s latest project, ongoing since 2017. <br> It\'s a stunning city where modern and contemporary architecture blend harmoniously. <br> We use a custom resource pack for a more immersive urban experience. <br>Visit the Dynmap link above to explore Song Lim City in real-time.'
    },
    'index.slc.released': {
      ko: '2023.5월 송림시가 공개되었습니다!',
      en: 'Song Lim City was released in May 2023!'
    },
    'index.slc.btn.download': { ko: '다운로드', en: 'Download' },
    'index.slc.btn.video': { ko: '소개영상', en: 'Intro Video' },
    'index.slc.btn.doc': { ko: '소개문서', en: 'Documentation' },
    'index.videos.title': {
      ko: 'TEAMWEST의 건축물이 사용된<br>영상들 입니다.',
      en: 'Videos Featuring<br>TEAMWEST\'s Builds'
    },
    // Video cards
    'index.video1.title': { ko: "'스틸 하트' 시리즈", en: "'Steel Heart' Series" },
    'index.video1.channel': { ko: '잠뜰 TV', en: 'JamTteul TV' },
    'index.video1.views': { ko: '244만회', en: '2.44M views' },
    'index.video1.map': { ko: '한울시', en: 'Han-ul City' },

    'index.video2.title': { ko: "'좀비 아포칼립스 리마스터' 시리즈", en: "'Zombie Apocalypse Remaster' Series" },
    'index.video2.channel': { ko: 'Hoodie', en: 'Hoodie' },
    'index.video2.views': { ko: '76만회', en: '760K views' },
    'index.video2.map': { ko: '송림시', en: 'Song Lim City' },

    'index.video3.title': { ko: '마인크래프트 코믹 꽁트 상황극', en: 'Minecraft Comic Skit' },
    'index.video3.channel': { ko: '양띵 유튜브', en: 'YangDding YouTube' },
    'index.video3.views': { ko: '230만회', en: '2.3M views' },
    'index.video3.map': { ko: '서경시', en: 'Seo-gyeong City' },

    'index.video4.title': { ko: '좀비로 가득찬 도시.. 내 딸은 내가 지킨다!!', en: 'A city full of zombies.. I will protect my daughter!!' },
    'index.video4.channel': { ko: '도티 TV', en: 'Doti TV' },
    'index.video4.views': { ko: '781만회', en: '7.81M views' },
    'index.video4.map': { ko: '한울시', en: 'Han-ul City' },

    'index.video5.title': { ko: "'마인크래프트 GTA' 시리즈", en: "'Minecraft GTA' Series" },
    'index.video5.channel': { ko: '잠뜰 TV', en: 'JamTteul TV' },
    'index.video5.views': { ko: '3059만회', en: '30.59M views' },
    'index.video5.map': { ko: '서경시', en: 'Seo-gyeong City' },

    'index.video6.title': { ko: '송림시를 소개합니다.', en: 'Introducing Song Lim City' },
    'index.video6.channel': { ko: 'TEAM WEST', en: 'TEAM WEST' },
    'index.video6.map': { ko: '송림시', en: 'Song Lim City' },

    // ===== DOWNLOAD PAGE =====
    'download.hero': {
      ko: 'TEAMWEST 에서 제작한 컨텐츠들을<br>다운로드 하실 수 있습니다.',
      en: 'Download content<br>created by TEAMWEST.'
    },
    'download.slc': { ko: '송림시', en: 'Song Lim City' },
    'download.twg': { ko: '서쪽으로의 문', en: 'The West Gate' },
    'download.huc': { ko: '한울시', en: 'Han-ul City' },
    'download.sgc': { ko: '서경시', en: 'Seo-gyeong City' },

    // ===== INTRO - SLC (Song Lim City) =====
    'slc.hero': {
      ko: '송림시는 현재 진행중인 프로젝트로,<br>상단의 Dynmap을 눌러 현재 모습을 구경하실 수 있습니다.',
      en: 'Song Lim City is an ongoing project.<br>Click Dynmap above to explore it in real-time.'
    },
    'slc.section.title': { ko: '송림시 주요 건물', en: 'Song Lim City - Key Buildings' },
    'slc.section.btn': { ko: '송림시 관련 글 보기', en: 'View Related Posts' },
    'slc.building1.name': { ko: '송림시청', en: 'City Hall' },
    'slc.building1.addr': { ko: '송림시 송산구 송림동', en: 'Songlim-dong, Songsan-gu' },
    'slc.building2.name': { ko: '예석천 주변', en: 'Yeseok River Area' },
    'slc.building2.addr': { ko: '송림시 송산구 예석동', en: 'Yeseok-dong, Songsan-gu' },
    'slc.building3.name': { ko: '세희대학교', en: 'Sehee University' },
    'slc.building3.addr': { ko: '송림시 고천구 세희동', en: 'Sehee-dong, Gocheon-gu' },
    'slc.building4.name': { ko: '송림시 의회', en: 'City Council' },
    'slc.building4.addr': { ko: '송림시 송산구 송림동', en: 'Songlim-dong, Songsan-gu' },
    'slc.building5.name': { ko: '시청역 앞 아파트', en: 'Apartments near City Hall Station' },
    'slc.building5.addr': { ko: '송림시 송산구 교성동', en: 'Gyoseong-dong, Songsan-gu' },
    'slc.building6.name': { ko: '성수동의 한 카페', en: 'A Cafe in Seongsu-dong' },
    'slc.building6.addr': { ko: '송림시 송산구 성수동', en: 'Seongsu-dong, Songsan-gu' },

    // ===== INTRO - TWG (The West Gate) =====
    'twg.hero': {
      ko: '서쪽으로의 문 ( The West Gate )은 <br>2015년 진행된 프로젝트로 중세 하늘섬 프로젝트 입니다.',
      en: 'The West Gate is<br>a medieval sky island project from 2015.'
    },
    'twg.section.title': { ko: '서쪽으로의 문 사진', en: 'The West Gate - Photos' },
    'twg.section.btn': { ko: '관련 글 보기', en: 'View Related Posts' },

    // ===== INTRO - HUC (Han-ul City) =====
    'huc.hero': {
      ko: '한울시는 2015년 진행된 프로젝트로 현대 도시 프로젝트 입니다.',
      en: 'Han-ul City is a modern city project from 2015.'
    },
    'huc.section.title': { ko: '한울시 사진', en: 'Han-ul City - Photos' },
    'huc.section.btn': { ko: '한울시 관련 글 보기', en: 'View Related Posts' },
    'huc.building1': { ko: '모던하우스 단지', en: 'Modern House Complex' },
    'huc.building2': { ko: '국제업무지구', en: 'International Business District' },
    'huc.building3': { ko: '인더사이드 본사', en: 'InderSide Headquarters' },
    'huc.building4': { ko: '한울대교', en: 'Han-ul Bridge' },
    'huc.building5': { ko: '폭스타운', en: 'Fox Town' },
    'huc.building6': { ko: '수상 경기장', en: 'Water Sports Arena' },

    // ===== INTRO - SGC (Seo-gyeong City) =====
    'sgc.hero': {
      ko: '서경시는 2014년 진행된 프로젝트로 현대 도시 프로젝트 입니다.',
      en: 'Seo-gyeong City is a modern city project from 2014.'
    },
    'sgc.section.title': { ko: '서경시 사진', en: 'Seo-gyeong City - Photos' },
    'sgc.section.btn': { ko: '서경시 관련 글 보기', en: 'View Related Posts' },
    'sgc.building1': { ko: '서경역', en: 'Seo-gyeong Station' },
    'sgc.building2': { ko: '내륙 도심', en: 'Inland Downtown' },
    'sgc.building3': { ko: '제2 먹자타운', en: '2nd Food Town' },
    'sgc.building4': { ko: '제1 먹자타운', en: '1st Food Town' },
    'sgc.building5': { ko: '구 / 신 시내권', en: 'Old / New Downtown' },
    'sgc.building6': { ko: '내륙 도심', en: 'Inland Downtown' },

    // ===== META =====
    'meta.description': {
      ko: '마인크래프트 컨텐츠 제작팀 TEAMWEST 입니다.',
      en: 'TEAMWEST - Minecraft Content Creation Team'
    }
  };

  function getStoredLang() {
    try { return localStorage.getItem('tw-lang'); } catch (e) { return null; }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem('tw-lang', lang); } catch (e) {}
  }

  function detectLang() {
    var stored = getStoredLang();
    if (stored === 'ko' || stored === 'en') return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('ko') === 0 ? 'ko' : 'en';
  }

  function applyTranslations(lang) {
    var elems = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elems.length; i++) {
      var key = elems[i].getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        elems[i].innerHTML = translations[key][lang];
      }
    }
    // Update html lang attribute
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    // Update meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations['meta.description']) {
      metaDesc.setAttribute('content', translations['meta.description'][lang]);
    }
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && translations['meta.description']) {
      ogDesc.setAttribute('content', translations['meta.description'][lang]);
    }
  }

  function toggleLang() {
    var current = detectLang();
    var next = current === 'ko' ? 'en' : 'ko';
    setStoredLang(next);
    applyTranslations(next);
  }

  // Expose globally
  window.TWi18n = {
    translations: translations,
    detectLang: detectLang,
    applyTranslations: applyTranslations,
    toggleLang: toggleLang,
    setLang: function (lang) {
      setStoredLang(lang);
      applyTranslations(lang);
    }
  };

  // Auto-apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTranslations(detectLang());
    });
  } else {
    applyTranslations(detectLang());
  }
})();
