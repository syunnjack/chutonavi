import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./seo-pages.css";

const siteUrl = "https://chutonavi.syunnjack.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "中部・東海ナビ｜愛知・岐阜・三重・静岡の今日がわかる",
    template: "%s｜中部・東海ナビ",
  },
  description:
    "愛知・岐阜・三重・静岡の今日・明日・今週末のイベント、開店・閉店、混雑、現地の声を地域住民と編集部が届ける無料の地域情報ナビ。",
  keywords: [
    "東海 イベント",
    "愛知 イベント",
    "岐阜 イベント",
    "三重 イベント",
    "静岡 イベント",
    "今週末 おでかけ",
    "開店 閉店",
    "子連れ おでかけ",
  ],
  authors: [{ name: "中部・東海ナビ編集部", url: siteUrl }],
  creator: "中部・東海ナビ編集部",
  publisher: "中部・東海ナビ",
  alternates: { canonical: "/" },
  category: "地域情報・おでかけ",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "中部・東海ナビ｜この週末、近くで何する？",
    description: "愛知・岐阜・三重・静岡の今日使えるイベント・新店・現地情報。",
    url: siteUrl,
    siteName: "中部・東海ナビ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "中部・東海ナビ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "中部・東海ナビ｜この週末、近くで何する？",
    description: "愛知・岐阜・三重・静岡の今日使えるイベント・新店・現地情報。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#193e2d",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
