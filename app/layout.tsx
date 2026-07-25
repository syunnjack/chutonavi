import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中部・東海ナビ｜愛知・岐阜・三重・静岡の今日がわかる",
  description: "愛知・岐阜・三重・静岡のイベント、開店・閉店、現地の声を地域の目線で届ける、おでかけ・生活情報ナビ。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "中部・東海ナビ",
    description: "この週末、近くで何する？ 地元の人が届ける、今日使えるおでかけ情報。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "中部・東海ナビ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "中部・東海ナビ",
    description: "この週末、近くで何する？",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
