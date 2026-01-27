'use client'

import { usePathname } from 'next/navigation'
import { Header, Footer } from "@/components/layout"
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <OrganizationJsonLd />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
