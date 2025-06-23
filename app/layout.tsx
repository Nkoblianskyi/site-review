import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MainSiteFooter } from "../components/main-site-footer"
import { MainSiteHeader } from "../components/main-site-header"

export const metadata: Metadata = {
  title: "Betting Best Irish Sites - Top Irish Betting Sites 2025",
  description:
    "Discover Ireland's premier betting sites with expert reviews, exclusive bonuses, and comprehensive comparisons. Find your perfect bookmaker today.",
  keywords: "Irish betting sites, bookmakers Ireland, betting bonuses, sports betting Ireland",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10">
            <MainSiteHeader />
            <main>{children}</main>
            <MainSiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
