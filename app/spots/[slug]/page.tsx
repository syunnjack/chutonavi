import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpot, getSpots } from "@/lib/data";
import { resolveBaseUrl } from "@/lib/site";

export const revalidate = 300;

export function generateStaticParams() {
  return getSpots().map((spot) => ({ slug: spot.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const spot = getSpot(params.slug);
  if (!spot) return {};

  return {
    title: spot.name,
    description: spot.summary,
    alternates: { canonical: `/spots/${spot.slug}` },
  };
}

export default function SpotDetailPage({ params }: { params: { slug: string } }) {
  const spot = getSpot(params.slug);
  if (!spot) notFound();

  const baseUrl = resolveBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: spot.name,
    description: spot.summary,
    url: `${baseUrl}/spots/${spot.slug}`,
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="card">
        <p style={{ margin: "0 0 0.2rem", color: "#64748b", fontSize: "0.86rem" }}>{spot.area}</p>
        <h1 style={{ margin: "0 0 0.6rem", fontSize: "1.6rem" }}>{spot.name}</h1>
        <p style={{ color: "#334155", lineHeight: 1.7 }}>{spot.summary}</p>

        <dl style={{ marginTop: "1rem", display: "grid", gap: "0.45rem" }}>
          <div><dt style={{ fontWeight: 700, display: "inline" }}>最寄り駅: </dt><dd style={{ display: "inline" }}>{spot.nearestStation}</dd></div>
          <div><dt style={{ fontWeight: 700, display: "inline" }}>アクセス: </dt><dd style={{ display: "inline" }}>{spot.access}</dd></div>
          <div><dt style={{ fontWeight: 700, display: "inline" }}>駐車情報: </dt><dd style={{ display: "inline" }}>{spot.parking}</dd></div>
          <div><dt style={{ fontWeight: 700, display: "inline" }}>周辺営業時間: </dt><dd style={{ display: "inline" }}>{spot.openingHours}</dd></div>
        </dl>

        <section style={{ marginTop: "1rem" }}>
          <h2 style={{ fontSize: "1.1rem" }}>混雑回避のコツ</h2>
          <ul>
            {spot.tips.map((tip) => (
              <li key={tip} style={{ marginBottom: "0.3rem", lineHeight: 1.6 }}>{tip}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
