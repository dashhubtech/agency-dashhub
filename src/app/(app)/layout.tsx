import type { Metadata } from "next";

import { ReactLenis } from "lenis/react";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Making Ideas Into Reality",
  description: "",
  icons: {
    icon: "/favicon/favicon.ico",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`antialiased    `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
