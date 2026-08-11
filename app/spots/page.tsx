import type { Metadata } from "next";
import Link from "next/link";
import { getSpots } from "@/lib/data";

export const metadata: Metadata = {
  title: "スポット一覧",
  description: "駐屯地イベント向けの周辺スポット・アクセス情報一覧。",
  alternates: { canonical: "/spots" },
};

export const revalidate = 300;

export default function SpotsPage() {
  const spots = getSpots();

  return (
    <div className="container">
      <h1 style={{ fontSize: "1.6rem" }}>スポット一覧</h1>
      <p style={{ color: "#334155" }}>エリアごとのアクセス・周辺情報をまとめています。</p>
      <div style={{ display: "grid", gap: "0.8rem", marginTop: "1rem" }}>
        {spots.map((spot) => (
          <article key={spot.slug} className="card">
            <p style={{ margin: "0 0 0.2rem", color: "#64748b", fontSize: "0.86rem" }}>{spot.area}</p>
            <h2 style={{ margin: "0 0 0.4rem", fontSize: "1.1rem" }}>{spot.name}</h2>
            <p style={{ margin: "0 0 0.5rem", color: "#334155" }}>{spot.summary}</p>
            <Link href={`/spots/${spot.slug}`} style={{ color: "#0369a1", fontWeight: 600 }}>詳細ページへ</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
