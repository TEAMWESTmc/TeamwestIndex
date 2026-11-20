import Link from "next/link"

import { LogoTypeBLegacy } from "@/components/brand/logos"
import { T } from "@/components/i18n-provider"
import { cities, CONTACT_EMAIL, externalLinks } from "@/lib/site"

const linkClass =
  "inline-block py-1 text-muted-foreground transition-colors hover:text-primary"

export function SiteFooter() {
  return (
    <footer className="dark border-t bg-background pt-12 pb-8 text-foreground lg:pt-16 lg:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LogoTypeBLegacy
              title="TEAMWEST — From WEST BUILDERs"
              className="w-[320px] max-w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <ul className="flex flex-col">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/intro/${city.slug}/`} className={linkClass}>
                    <T text={city.name} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-2 font-semibold">
                <T k="footer.contact" />
              </h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground md:text-left">
          <T k="footer.copyright" />
        </p>
      </div>
    </footer>
  )
}
