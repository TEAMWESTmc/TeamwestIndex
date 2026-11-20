"use client"

import { LanguagesIcon } from "lucide-react"

import { useLang } from "@/components/i18n-provider"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { messages, type Lang } from "@/lib/i18n"

const options: { value: Lang; label: string }[] = [
  { value: "ko", label: "한글" },
  { value: "en", label: "ENG" },
]

export function LangSelect() {
  const { lang, setLang } = useLang()
  const label = messages["nav.language"][lang]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title={label}
        aria-label={label}
        className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
      >
        <LanguagesIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-auto min-w-32 whitespace-nowrap"
      >
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(value) => setLang(value as Lang)}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              closeOnClick
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
