"use client"

import * as React from "react"

import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  messages,
  type Lang,
  type Localized,
  type MessageKey,
} from "@/lib/i18n"

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LangContext = React.createContext<LangContextValue | null>(null)

const LANG_EVENT = "tw-lang-change"

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored === "ko" || stored === "en") return stored
  } catch {}
  return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en"
}

function subscribe(onChange: () => void) {
  window.addEventListener(LANG_EVENT, onChange)
  window.addEventListener("storage", onChange)
  return () => {
    window.removeEventListener(LANG_EVENT, onChange)
    window.removeEventListener("storage", onChange)
  }
}

function writeLang(next: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, next)
  } catch {}
  window.dispatchEvent(new Event(LANG_EVENT))
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = React.useSyncExternalStore(
    subscribe,
    readLang,
    () => DEFAULT_LANG
  )

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = React.useMemo<LangContextValue>(
    () => ({
      lang,
      setLang: writeLang,
      toggleLang: () => writeLang(lang === "ko" ? "en" : "ko"),
    }),
    [lang]
  )

  return <LangContext value={value}>{children}</LangContext>
}

export function useLang() {
  const ctx = React.use(LangContext)
  if (!ctx) throw new Error("useLang must be used within <I18nProvider>")
  return ctx
}

export function T(props: { k: MessageKey } | { text: Localized }) {
  const { lang } = useLang()
  const source = "k" in props ? messages[props.k] : props.text
  const lines = source[lang].split("\n")
  return lines.map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ))
}
