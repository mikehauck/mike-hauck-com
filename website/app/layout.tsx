import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'
import NoSSR from "@/components/no-ssr"
import { Movie } from "@/components/movie";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/mh-badge.png",
    apple: "/mh-developer-badge.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background flex h-full w-full flex-col items-center font-sans leading-8 antialiased", fontSans.variable)}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <section id="top" className="h-[180px] w-full max-w-screen-xl md:h-[320px]" data-section>
            <NoSSR>
              <Movie></Movie>
            </NoSSR>
          </section>
          <div className="grid w-full min-w-[360px] max-w-screen-xl gap-0 md:grid-cols-[380px_auto] md:grid-rows-1">
            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
