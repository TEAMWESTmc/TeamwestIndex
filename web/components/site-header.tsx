"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { LogoTypeA1 } from "@/components/brand/logos"
import { T } from "@/components/i18n-provider"
import { LangSelect } from "@/components/lang-select"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cities, DYNMAP_URL, type City } from "@/lib/site"

const navTextClass = "text-[0.9375rem]"

function ProjectItem({ city, active }: { city: City; active: boolean }) {
  return (
    <li>
      <NavigationMenuLink
        render={<Link href={`/intro/${city.slug}/`} />}
        active={active}
        className="group/item relative isolate flex min-h-28 flex-col items-start justify-between gap-3 overflow-hidden border border-foreground/10 p-4 hover:border-foreground/20 hover:bg-foreground/10 focus:bg-foreground/10"
      >
        <Image
          src={`/images/nav/${city.slug}.jpg`}
          alt=""
          width={480}
          height={270}
          className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 [mask-image:linear-gradient(to_right,transparent,black_85%)] object-cover opacity-55 transition-opacity duration-300 group-hover/item:opacity-90"
        />
        <span
          className={cn(
            "font-heading text-xl leading-none font-bold",
            active && "text-primary"
          )}
        >
          <T text={city.name} />
        </span>
        <span className="flex flex-col gap-0.5 text-sm leading-tight text-muted-foreground">
          <span className="tabular-nums">
            <T text={city.period} />
          </span>
          <span className="whitespace-nowrap">
            <T text={city.tagline} />
          </span>
        </span>
      </NavigationMenuLink>
    </li>
  )
}

function useCloseMenuOnLeave(value: string | null, onClose: () => void) {
  const onCloseRef = React.useRef(onClose)
  React.useEffect(() => {
    onCloseRef.current = onClose
  })

  React.useEffect(() => {
    if (!value) return
    let timer: ReturnType<typeof setTimeout> | undefined
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      const target = event.target as Element | null
      const inside = target?.closest(
        '[data-slot="navigation-menu"], [data-slot="navigation-menu-positioner"]'
      )
      if (inside) {
        clearTimeout(timer)
        timer = undefined
      } else if (!timer) {
        timer = setTimeout(() => onCloseRef.current(), 200)
      }
    }
    document.addEventListener("pointermove", onMove)
    return () => {
      document.removeEventListener("pointermove", onMove)
      clearTimeout(timer)
    }
  }, [value])
}

function Brand() {
  return (
    <Link href="/" className="shrink-0">
      <LogoTypeA1 title="TEAMWEST" className="h-5 w-auto sm:h-6" />
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)
  const [menuValue, setMenuValue] = React.useState<string | null>(null)
  useCloseMenuOnLeave(menuValue, () => setMenuValue(null))
  const isHome = pathname === "/"
  const isIntro = pathname.startsWith("/intro")
  const isLinks = pathname.startsWith("/links")

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="container mx-auto flex h-16 items-center gap-6 px-4">
        <Brand />

        <NavigationMenu
          value={menuValue}
          onValueChange={(value) =>
            setMenuValue((value as string | null) ?? null)
          }
          className="hidden lg:flex"
          popupClassName="bg-popover/90 shadow-lg backdrop-blur-xl backdrop-saturate-150"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                active={isHome}
                className={cn(
                  navigationMenuTriggerStyle(),
                  navTextClass,
                  isHome && "text-primary"
                )}
              >
                <T k="nav.home" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={DYNMAP_URL}
                className={cn(navigationMenuTriggerStyle(), navTextClass)}
              >
                <T k="nav.dynmap" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem value="projects">
              <NavigationMenuTrigger
                className={cn(navTextClass, isIntro && "text-primary")}
              >
                <T k="nav.intro" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <ProjectItem
                      key={city.slug}
                      city={city}
                      active={pathname === `/intro/${city.slug}/`}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/links/" />}
                active={isLinks}
                className={cn(
                  navigationMenuTriggerStyle(),
                  navTextClass,
                  isLinks && "text-primary"
                )}
              >
                <T k="nav.link" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <LangSelect />
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "lg:hidden"
              )}
            >
              <MenuIcon />
              <span className="sr-only">
                <T k="nav.menu" />
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <LogoTypeA1 title="TEAMWEST" className="h-5 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-6 pb-8 text-base">
                <div className="flex flex-col gap-1">
                  <MobileLink href="/" active={isHome} onNavigate={close}>
                    <T k="nav.home" />
                  </MobileLink>
                  <MobileLink href={DYNMAP_URL} external>
                    <T k="nav.dynmap" />
                  </MobileLink>
                  <MobileLink
                    href="/links/"
                    active={isLinks}
                    onNavigate={close}
                  >
                    <T k="nav.link" />
                  </MobileLink>
                </div>
                <Separator />
                <MobileGroup label={<T k="nav.intro" />}>
                  {cities.map((city) => (
                    <MobileLink
                      key={city.slug}
                      href={`/intro/${city.slug}/`}
                      active={pathname === `/intro/${city.slug}/`}
                      onNavigate={close}
                    >
                      <T text={city.name} />
                    </MobileLink>
                  ))}
                </MobileGroup>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileGroup({
  label,
  children,
}: {
  label: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      {children}
    </div>
  )
}

function MobileLink({
  href,
  active,
  external,
  onNavigate,
  children,
}: {
  href: string
  active?: boolean
  external?: boolean
  onNavigate?: () => void
  children: React.ReactNode
}) {
  const className = cn(
    "py-1.5 font-medium transition-colors hover:text-primary",
    active && "text-primary"
  )
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {children}
    </Link>
  )
}
