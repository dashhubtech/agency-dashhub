import type { Metadata } from 'next'

import React from 'react'

import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'
import './globals.css'
import { createMetadata } from '@/lib/seo'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={`antialiased  `}>
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}

export const metadata = createMetadata({
  title: 'DashHub Tech',
  description: 'DashHub Tech is a leading provider of blockchain infrastructure and services.',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(getServerSideURL()),
})
