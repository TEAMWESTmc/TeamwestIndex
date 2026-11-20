"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { useLang } from "@/components/i18n-provider"
import { buttonVariants } from "@/components/ui/button"
import { messages, type MessageKey } from "@/lib/i18n"

const modes: { value: string; label: MessageKey; icon: typeof SunIcon }[] = [
  { value: "system", label: "theme.system", icon: MonitorIcon },
  { value: "light", label: "theme.light", icon: SunIcon },
  { value: "dark", label: "theme.dark", icon: MoonIcon },
]

const noopSubscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { lang } = useLang()
  const mounted = React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  )

  const index = Math.max(
    0,
    modes.findIndex((mode) => mode.value === (theme ?? "system"))
  )
  const current = mounted ? modes[index] : modes[0]
  const next = modes[(index + 1) % modes.length]
  const label = `${messages["theme.toggle"][lang]}: ${messages[current.label][lang]}`
  const Icon = current.icon

  return (
    <button
      type="button"
      onClick={() => setTheme(next.value)}
      title={label}
      aria-label={label}
      className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
    >
      <Icon
        key={current.value}
        className="animate-in duration-300 fade-in spin-in-45"
      />
    </button>
  )
}
