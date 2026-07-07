import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Great_Vibes, Rajdhani } from "next/font/google";

import { defaultMetadata } from "@/lib/metadata";

import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
