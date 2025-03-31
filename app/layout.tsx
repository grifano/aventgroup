import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AventGroup Sync with Opportunity ->",
  description:
    "AventGroup to miejsce, gdzie pasja spotyka nowoczesne technologie. Tworzymy rozwiązania wspierające rozwój osobisty i biznesowy.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ADD TITLE",
    description: "ADD DESCRIPTION",
    siteName: "AventGroup",
    images: [
      {
        url: "ADD IMAGE URL",
        width: 1200,
        height: 630,
        alt: "AventGroup - ",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ❗️ Remove this before launch to make google index the page */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={` ${poppins.variable} antialiased`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
