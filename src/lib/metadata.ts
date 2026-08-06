import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://faizanwaheed.com";

export const siteMetadata = {
  name: "Faizan Waheed",
  title: "Faizan Waheed | Videographer & Video Editor",
  description:
    "Karachi-based videographer and video editor creating social media ads, UGC videos, commercials, documentaries, and brand stories.",
  url: siteUrl,
  ogImage: "/opengraph-image",
  creator: "Faizan Waheed",
  email: "gfaiz6896@gmail.com",
  jobTitle: "Freelance Videographer & Video Editor",
  location: "Karachi, Sindh, Pakistan",
  sameAs: [
    "https://www.behance.net/gallery/234059321/FaizanWaheed-Portfolio",
    "https://www.linkedin.com/in/faizan-waheed-787ba723b",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s | Faizan Waheed`,
  },
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.name, url: siteMetadata.url }],
  creator: siteMetadata.creator,
  keywords: [
    "Faizan Waheed",
    "videographer Karachi",
    "video editor Karachi",
    "UGC ads",
    "social media video",
    "commercial videography",
    "Adobe Premiere Pro editor",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMetadata.name,
  url: siteMetadata.url,
  image: `${siteMetadata.url}${siteMetadata.ogImage}`,
  jobTitle: siteMetadata.jobTitle,
  email: `mailto:${siteMetadata.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs: siteMetadata.sameAs,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMetadata.title,
  url: siteMetadata.url,
  description: siteMetadata.description,
  publisher: {
    "@type": "Person",
    name: siteMetadata.name,
  },
};
