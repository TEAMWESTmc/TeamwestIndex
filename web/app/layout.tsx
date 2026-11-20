import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Geist_Mono } from "next/font/google"

import "./globals.css"
import { I18nProvider } from "@/components/i18n-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/metadata"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

const suit = localFont({
  src: "./fonts/SUIT-Variable.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: "#0098C4",
}

const defaults = pageMetadata({ path: "/" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "TEAMWEST", template: "%s | TEAMWEST" },
  description: SITE_DESCRIPTION,
  keywords: [
    "minecraft",
    "마인크래프트",
    "마인크래프트 서경시티",
    "마인크래프트 서경시",
    "서경시티",
    "마크",
    "마인크래프트 건축팀",
    "송림시",
    "마인크래프트 송림시",
    "WESTBUILDERs",
    "TEAMWEST",
    "TEAM WEST",
  ],
  authors: [{ name: "TEAMWEST" }],
  openGraph: { ...defaults.openGraph, url: undefined },
  twitter: defaults.twitter,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        suit.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <I18nProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
