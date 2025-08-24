import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Documentation",
  description: "Beautiful documentation built with Next.js",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       <RootProvider>
        {children}
       </RootProvider>
      </body>
    </html>
  )
}
