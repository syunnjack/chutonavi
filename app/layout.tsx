import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, resolveBaseUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(resolveBaseUrl()),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header style={{ borderBottom: "1px solid #cbd5e1", background: "#ffffffcc", backdropFilter: "blur(6px)" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 0" }}>
            <Link href="/" style={{ fontWeight: 700 }}>{SITE_NAME}</Link>
            <nav style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
              <Link href="/spots">スポット一覧</Link>
            </nav>
          </div>
        </header>
        <main style={{ padding: "1.4rem 0 2.2rem" }}>{children}</main>
        <footer style={{ borderTop: "1px solid #cbd5e1", background: "#ffffff", marginTop: "2rem" }}>
          <div className="container" style={{ padding: "1rem 0", fontSize: "0.85rem", color: "#475569" }}>
            <p>ChutoNavi は非公式の情報サイトです。最新情報は公式発表を必ず確認してください。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
