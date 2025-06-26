import type { Metadata } from 'next'

import React from 'react'

import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'
import './globals.css'
import { createMetadata } from '@/lib/seo'
import Header from '@/sections/Header'
import localFont from 'next/font/local'
import { InitTheme } from '@/providers/Theme/InitTheme'
import Footer from '@/sections/Footer'

const neueMontrealFont = localFont({
  src: [
    {
      path: '../../fonts/neue.otf',
    },
  ],
  variable: '--font-neue-montreal',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={`antialiased ${neueMontrealFont.className}`}>
        <Providers>
          <Header />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = createMetadata({
  title: 'Engage your SMEs',
  description: 'DashHub Tech is a startup that helps startups and SMEs to grow.',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(getServerSideURL()),
})
