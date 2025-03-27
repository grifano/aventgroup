import type { Metadata } from "next";
import { Quicksand, Lora } from "next/font/google";
import React from "react";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const loraSerif = Lora({
  variable: "--font-lora-serif",
  subsets: ["latin"],
});
const quicksandSans = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADD TITLE",
  description: "ADD DESCRIPTION",
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
    <html lang="en">
      <body
        className={`${quicksandSans.variable} ${loraSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
