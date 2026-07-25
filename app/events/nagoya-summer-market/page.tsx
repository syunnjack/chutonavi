import type { Metadata } from "next";
import Link from "next/link";
import RoutePlanner from "../../_components/RoutePlanner";

export const metadata: Metadata = {
  title: "なごや夏の夜市2026｜開催時間・アクセス・混雑情報",
  description: "2026年7月25日開催「なごや夏の夜市」の時間、会場、料金、アクセス、雨天時、子連れ情報、現地の混雑状況を掲載。",
  alternates: { canonical: "/events/nagoya-summer-market" },
};

export default function EventPage() {
  const eventUrl = "https://chutonavi.syunnjack.chatgpt.site/events/nagoya-summer-market";
  const data = {
    "@context": "https://schema.org", "@type": "Event", name: "なごや夏の夜市 2026",
    startDate: "2026-07-25T11:00:00+09:00", endDate: "2026-07-25T20:00:00+09:00",
    eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: "久屋大通公園", address: { "@type": "PostalAddress", addressLocality: "名古屋市", addressRegion: "愛知県", addressCountry: "JP" } },
    description: "名古屋の夏を楽しむ夜市。屋台、音楽、子ども向け企画を開催。", isAccessibleForFree: true,
    organizer: { "@type": "Organization", name: "なごや夏の夜市実行委員会" }, url: eventUrl,
  };
  return <main className="content-page event-detail">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} />
    <header className="content-header"><Link className="content-brand" href="/"><span className="content-brand-mark">＋</span><span><b>中部・東海</b>ナビ<small>CHUBU TOKAI NAVI</small></span></Link><nav><Link href="/aichi">愛知</Link><Link href="/gifu">岐阜</Link><Link href="/mie">三重</Link><Link href="/shizuoka">静岡</Link></nav><Link className="content-post-link" href="/#community">＋ 情報を投稿</Link></header>
    <div className="content-breadcrumb"><Link href="/">ホーム</Link><span>›</span><Link href="/aichi">愛知</Link><span>›</span>なごや夏の夜市</div>
    <article>
      <div className="event-detail-hero"><div><span>公式確認済み</span><p>愛知 · 名古屋・栄</p><h1>なごや夏の夜市<br />2026</h1><p>屋台と音楽で楽しむ、名古屋の夏の一日。</p></div><div className="event-detail-art"><b>夏</b><small>NAGOYA<br />SUMMER<br />MARKET</small></div></div>
      <div className="event-detail-layout">
        <div className="event-main">
          <section className="event-answer"><p className="content-kicker">結論から</p><h2>今日11時から、久屋大通公園で開催。</h2><p>入場無料、雨天決行です。子ども向け企画は17時まで。混雑を避けるなら14時以前の来場がおすすめです。</p></section>
          <RoutePlanner destination="久屋大通公園" latitude={35.1723} longitude={136.9084} />
          <section><h2>開催情報</h2><dl className="event-facts"><div><dt>開催日</dt><dd>2026年7月25日（土）</dd></div><div><dt>時間</dt><dd>11:00〜20:00</dd></div><div><dt>会場</dt><dd>久屋大通公園</dd></div><div><dt>料金</dt><dd>入場無料</dd></div><div><dt>雨天</dt><dd>雨天決行・荒天中止</dd></div><div><dt>最終確認</dt><dd>7月25日 12:40</dd></div></dl></section>
          <section><h2>現地の混雑情報</h2><div className="crowd-meter"><span>現在</span><b>やや空いています</b><i><em /></i><small>地域ユーザー3名の投稿を集計 · 12分前</small></div></section>
          <section><h2>子連れで行く人へ</h2><p>噴水エリア近くに休憩スペースがあります。ベビーカーで移動できますが、夕方以降は通路が混みやすくなります。</p></section>
        </div>
        <aside><div className="save-panel"><p>このイベントを保存</p><button type="button">♡ 保存する</button><small>開始前に通知を受け取れます</small></div><div className="source-panel"><b>情報の信頼性</b><p>✓ 主催者公式情報を確認</p><p>✓ 現地投稿あり</p><p>更新履歴を保存しています</p></div></aside>
      </div>
    </article>
    <section className="related-content"><p className="content-kicker">KEEP EXPLORING</p><h2>名古屋の今日をもっと見る</h2><div><Link href="/aichi">愛知のイベント一覧 →</Link><Link href="/#openings">名古屋の新店情報 →</Link><Link href="/#community">現地からの投稿 →</Link></div></section>
    <footer className="content-footer"><Link href="/">中部・東海ナビ</Link><p>愛知・岐阜・三重・静岡の今日使える地域情報。</p><span>© 2026 CHUBU TOKAI NAVI</span></footer>
  </main>;
}
