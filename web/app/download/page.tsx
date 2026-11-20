import type { Metadata } from "next"
import Link from "next/link"

import { RedirectHome } from "./redirect-home"

export const metadata: Metadata = {
  title: { absolute: "TEAMWEST" },
  robots: { index: false },
  alternates: { canonical: "/" },
}

export default function DownloadRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/" />
      <RedirectHome />
      <p className="container mx-auto px-4 py-24 text-center text-muted-foreground">
        <Link href="/" className="text-primary underline underline-offset-4">
          teamwest.co.kr
        </Link>
      </p>
    </>
  )
}
