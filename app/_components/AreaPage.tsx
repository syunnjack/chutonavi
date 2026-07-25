import Link from "next/link";
import WeatherPanel from "./WeatherPanel";

type AreaPageProps = {
  prefecture: string;
  slug: string;
  english: string;
  lead: string;
  summary: string;
  areas: string[];
  highlights: { label: string; title: string; description: string }[];
  questions: { question: string; answer: string }[];
  weather: { location: string; latitude: number; longitude: number };
  sourceUrl: string;
  spots: { name: string; city: string; category: string; description: string; url: string }[];
  municipalSources: { municipality: string; title: string; description: string; url: string }[];
};

export default function AreaPage({
  prefecture,
  slug,
  english,
  lead,
  summary,
  areas,
  highlights,
  questions,
  weather,
  sourceUrl,
  spots,
  municipalSources,
}: AreaPageProps) {
  const pageUrl = `https://chutonavi.syunnjack.chatgpt.site/${slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#page`,
        url: pageUrl,
        name: `${prefecture}のイベント・おでかけ情報`,
        description: summary,
        isPartOf: { "@id": "https://chutonavi.syunnjack.chatgpt.site/#website" },
        about: { "@type": "AdministrativeArea", name: `${prefecture}県` },
        dateModified: "2026-07-25",
        inLanguage: "ja",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "中部・東海ナビ", item: "https://chutonavi.syunnjack.chatgpt.site/" },
          { "@type": "ListItem", position: 2, name: prefecture, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="content-header">
        <Link className="content-brand" href="/">
          <span className="content-brand-mark">＋</span>
          <span><b>中部・東海</b>ナビ<small>CHUBU TOKAI NAVI</small></span>
        </Link>
        <nav aria-label="地域ナビゲーション">
          <Link href="/aichi">愛知</Link><Link href="/gifu">岐阜</Link><Link href="/mie">三重</Link><Link href="/shizuoka">静岡</Link>
        </nav>
        <Link className="content-post-link" href="/#community">＋ 情報を投稿</Link>
      </header>

      <div className="content-breadcrumb"><Link href="/">ホーム</Link><span>›</span>{prefecture}</div>

      <section className={`area-hero area-hero-${slug}`}>
        <div>
          <p>{english} LOCAL GUIDE</p>
          <h1>{prefecture}の今日と、<br /><em>今週末がわかる。</em></h1>
          <p className="area-hero-lead">{lead}</p>
          <div className="area-hero-actions"><a href="#today">今日の情報を見る</a><Link href="/#community">現地情報を投稿</Link></div>
        </div>
        <aside>
          <span>最終更新</span><b>2026.07.25<br />13:00</b><small>公式・現地情報を確認</small>
        </aside>
      </section>

      <WeatherPanel prefecture={prefecture} location={weather.location} latitude={weather.latitude} longitude={weather.longitude} />

      <section className="content-summary" id="today">
        <div><p className="content-kicker">3行でわかる</p><h2>{prefecture}、今日のおでかけ要約</h2></div>
        <p>{summary}</p>
        <dl>
          <div><dt>イベント</dt><dd>{prefecture === "愛知" ? "52" : prefecture === "静岡" ? "31" : "24"}<small>件</small></dd></div>
          <div><dt>無料</dt><dd>{prefecture === "愛知" ? "19" : "11"}<small>件</small></dd></div>
          <div><dt>現地更新</dt><dd>{prefecture === "三重" ? "7" : "9"}<small>件</small></dd></div>
        </dl>
      </section>

      <section className="content-section">
        <div className="content-section-title"><p className="content-kicker">PICK UP</p><h2>{prefecture}で注目の情報</h2><span>編集部と地域ユーザーが選定</span></div>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <article key={item.title}>
              <div className={`highlight-visual highlight-${index + 1}`}><span>{item.label}</span></div>
              <div><small>{prefecture} · 2026年7月</small><h3>{item.title}</h3><p>{item.description}</p><Link href={index === 0 && slug === "aichi" ? "/events/nagoya-summer-market" : "/#events"}>詳しく見る →</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section real-spots-section">
        <div className="content-section-title"><p className="content-kicker">REAL PLACES</p><h2>{prefecture}の実在スポット</h2><span>{spots.length}件 · 公式情報を参照</span></div>
        <div className="real-spots-grid">
          {spots.map((spot, index) => (
            <article key={spot.name}>
              <div className={`spot-index spot-index-${(index % 4) + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><small>{spot.category}</small></div>
              <div>
                <p>● {spot.city}</p>
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>
                <a href={spot.url} target="_blank" rel="noreferrer">公式情報を確認 ↗</a>
              </div>
            </article>
          ))}
        </div>
        <p className="spot-source">掲載確認元：<a href={sourceUrl} target="_blank" rel="noreferrer">{prefecture}県公式観光情報サイト ↗</a>　施設の営業日・料金は必ず公式情報をご確認ください。</p>
      </section>

      <section className="content-section municipal-section">
        <div className="content-section-title">
          <p className="content-kicker">MUNICIPAL OFFICIAL INFO</p>
          <h2>自治体の公式・現地情報</h2>
          <span>{municipalSources.length}自治体の一次情報</span>
        </div>
        <p className="municipal-intro">開催日、休館、交通規制、防災情報など、予定を決める前に確認したい自治体の公式ページをまとめました。</p>
        <div className="municipal-grid">
          {municipalSources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.municipality}>
              <small>{source.municipality} OFFICIAL</small>
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <span>公式ページで最新情報を見る ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section area-link-section">
        <div className="content-section-title"><p className="content-kicker">EXPLORE</p><h2>{prefecture}をエリアから探す</h2></div>
        <div className="local-area-grid">
          {areas.map((area, index) => <Link href="/#events" key={area}><span>0{index + 1}</span><b>{area}</b><i>→</i></Link>)}
        </div>
      </section>

      <section className="content-faq">
        <div><p className="content-kicker">QUICK ANSWERS</p><h2>{prefecture}のおでかけ<br />よくある質問</h2></div>
        <div>
          {questions.map((item) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <section className="area-next">
        <p>東海4県を横断して探す</p>
        <h2>県境をこえて、次の週末へ。</h2>
        <div><Link href="/aichi">愛知</Link><Link href="/gifu">岐阜</Link><Link href="/mie">三重</Link><Link href="/shizuoka">静岡</Link></div>
      </section>

      <footer className="content-footer"><Link href="/">中部・東海ナビ</Link><p>愛知・岐阜・三重・静岡の今日使える地域情報。</p><span>© 2026 CHUBU TOKAI NAVI</span></footer>
    </main>
  );
}
