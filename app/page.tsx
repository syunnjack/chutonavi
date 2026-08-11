import Link from "next/link";
import { getSpots } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_NAME, resolveBaseUrl } from "@/lib/site";

export const revalidate = 300;

export default function Home() {
  const spots = getSpots().slice(0, 3);
  const baseUrl = resolveBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: baseUrl,
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="card" style={{ marginBottom: "1rem" }}>
        <h1 style={{ margin: 0, fontSize: "1.8rem" }}>{SITE_NAME}</h1>
        <p style={{ color: "#334155", lineHeight: 1.7 }}>{SITE_DESCRIPTION}</p>
        <Link href="/spots" style={{ color: "#0369a1", fontWeight: 600 }}>スポット一覧を見る →</Link>
      </section>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>注目スポット</h2>
        <div style={{ display: "grid", gap: "0.8rem" }}>
          {spots.map((spot) => (
            <article key={spot.slug} className="card">
              <p style={{ margin: "0 0 0.2rem", color: "#64748b", fontSize: "0.86rem" }}>{spot.area}</p>
              <h3 style={{ margin: "0 0 0.5rem" }}>{spot.name}</h3>
              <p style={{ margin: "0 0 0.5rem", color: "#334155" }}>{spot.summary}</p>
              <Link href={`/spots/${spot.slug}`} style={{ color: "#0369a1", fontWeight: 600 }}>詳細を見る</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
