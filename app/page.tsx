"use client";

import { useMemo, useState } from "react";
import { getWeatherFallback } from "./_data/weatherFallback";
import TransportStatusPanel from "./_components/TransportStatusPanel";

type Prefecture = "すべて" | "愛知" | "岐阜" | "三重" | "静岡";
type Timing = "今日" | "明日" | "今週末";

const prefectures: { name: Prefecture; kana: string; tone: string; latitude: number; weatherLabel: string }[] = [
  { name: "愛知", kana: "AICHI", tone: "coral", latitude: 35.1815, weatherLabel: "晴れ" },
  { name: "岐阜", kana: "GIFU", tone: "green", latitude: 35.4233, weatherLabel: "晴れ" },
  { name: "三重", kana: "MIE", tone: "blue", latitude: 34.7303, weatherLabel: "晴れ" },
  { name: "静岡", kana: "SHIZUOKA", tone: "amber", latitude: 34.9756, weatherLabel: "晴れ時々くもり" },
];

const events = [
  {
    id: 1,
    url: "/events/nagoya-summer-market",
    prefecture: "愛知",
    area: "名古屋・栄",
    date: "今日",
    day: "25",
    month: "7月",
    time: "11:00–20:00",
    title: "なごや夏の夜市 2026",
    category: "祭り・マルシェ",
    price: "入場無料",
    tags: ["子ども向け", "雨天決行"],
    visual: "lantern",
    verified: "公式確認済み",
  },
  {
    id: 2,
    url: "https://www.city.gujo.gifu.jp/",
    prefecture: "岐阜",
    area: "郡上市",
    date: "今日",
    day: "25",
    month: "7月",
    time: "19:30–22:30",
    title: "郡上おどり 夏の宵",
    category: "伝統・祭り",
    price: "観覧無料",
    tags: ["夜イベント", "屋外"],
    visual: "dance",
    verified: "公式確認済み",
  },
  {
    id: 3,
    url: "https://www.city.ise.mie.jp/kankou/",
    prefecture: "三重",
    area: "伊勢市",
    date: "明日",
    day: "26",
    month: "7月",
    time: "9:00–15:00",
    title: "伊勢の朝市とクラフト市",
    category: "グルメ・買い物",
    price: "入場無料",
    tags: ["朝から", "駐車場あり"],
    visual: "market",
    verified: "現地確認済み",
  },
  {
    id: 4,
    url: "https://www.city.hamamatsu.shizuoka.jp/kanko/",
    prefecture: "静岡",
    area: "浜松・浜名湖",
    date: "今週末",
    day: "27",
    month: "7月",
    time: "10:00–17:00",
    title: "浜名湖サマーパーク",
    category: "自然・体験",
    price: "大人 500円",
    tags: ["水遊び", "家族向け"],
    visual: "lake",
    verified: "公式確認済み",
  },
  { id:5, url:"https://aichinow.pref.aichi.jp/events/detail/53/", prefecture:"愛知", area:"名古屋市", date:"今週末", day:"31", month:"7月", time:"7/31〜8/2", title:"世界コスプレサミット2026", category:"文化・コスプレ", price:"会場により異なる", tags:["栄・大須", "公式掲載"], visual:"lantern", verified:"Aichi Now確認済み" },
  { id:6, url:"https://aichinow.pref.aichi.jp/events/calendar/2026-08-01/", prefecture:"愛知", area:"名古屋市", date:"今週末", day:"01", month:"8月", time:"7/25〜9/27", title:"徳川美術館 夏季特別展「武芸 サムライ・アスリート」", category:"美術館・歴史", price:"有料", tags:["屋内", "雨の日"], visual:"market", verified:"Aichi Now確認済み" },
  { id:7, url:"https://aichinow.pref.aichi.jp/events/?s_genre%5B%5D=50&search_flg=1", prefecture:"愛知", area:"一宮市", date:"今週末", day:"01", month:"8月", time:"7/18〜8/31", title:"138タワーパーク サマーフェスタ", category:"家族・公園", price:"一部無料", tags:["子ども向け", "夜間開催あり"], visual:"lake", verified:"Aichi Now確認済み" },
  { id:8, url:"https://www.kankou-gifu.jp/article/detail_120.html", prefecture:"岐阜", area:"各務原市", date:"今週末", day:"01", month:"8月", time:"夜間", title:"日本ライン夏まつりロングラン花火", category:"花火・夏祭り", price:"観覧無料", tags:["8/1〜8/10", "天候確認"], visual:"dance", verified:"岐阜県観光公式確認済み" },
  { id:9, url:"https://www.kankou-gifu.jp/event/index_1_2_26.html", prefecture:"岐阜", area:"郡上市", date:"今週末", day:"01", month:"8月", time:"夜間", title:"郡上おどり 2026", category:"伝統・祭り", price:"観覧無料", tags:["夜イベント", "公共交通推奨"], visual:"dance", verified:"岐阜県観光公式確認済み" },
  { id:10, url:"https://www.kankomie.or.jp/season/article/73", prefecture:"三重", area:"桑名市", date:"今週末", day:"01", month:"8月", time:"8/1〜8/2", title:"石取祭 2026", category:"伝統・祭り", price:"観覧無料", tags:["ユネスコ", "交通規制確認"], visual:"lantern", verified:"観光三重確認済み" },
  { id:11, url:"https://www.kankomie.or.jp/season/article/73", prefecture:"三重", area:"県内各地", date:"今週末", day:"01", month:"8月", time:"7月〜9月", title:"三重県の夏祭り・イベント2026", category:"夏祭り・花火", price:"イベントによる", tags:["公式特集", "開催確認"], visual:"market", verified:"観光三重確認済み" },
  { id:12, url:"https://hellonavi.jp/event/", prefecture:"静岡", area:"静岡市清水区", date:"今週末", day:"02", month:"8月", time:"夜間", title:"第77回 清水みなと祭り海上花火大会", category:"花火・港祭り", price:"観覧場所による", tags:["約1万発", "公共交通推奨"], visual:"lantern", verified:"Hello Navi確認済み" },
  { id:13, url:"https://hellonavi.jp/event/", prefecture:"静岡", area:"島田市", date:"今週末", day:"01", month:"8月", time:"夜間", title:"大井川大花火大会", category:"花火・夏祭り", price:"観覧無料", tags:["大井川", "天候確認"], visual:"lantern", verified:"Hello Navi確認済み" },
  { id:14, url:"https://hellonavi.jp/event/", prefecture:"静岡", area:"浜松市", date:"今週末", day:"31", month:"8月まで", time:"7/1〜8/31", title:"浜名湖ガーデンパーク Summer Festa 2026", category:"家族・自然", price:"入園無料", tags:["ひまわり迷路", "屋内企画あり"], visual:"lake", verified:"Hello Navi確認済み" },
  { id:15, url:"https://hellonavi.jp/event/", prefecture:"静岡", area:"熱海市", date:"今週末", day:"24", month:"8月まで", time:"開催日指定", title:"熱海海上花火大会 2026夏季", category:"花火・温泉", price:"観覧場所による", tags:["宿泊向け", "開催日確認"], visual:"lantern", verified:"Hello Navi確認済み" },
  { id:16, url:"https://hellonavi.jp/event/", prefecture:"静岡", area:"伊東市", date:"今週末", day:"29", month:"8月まで", time:"7/24〜8/29", title:"伊東温泉「夢花火」2026", category:"花火・温泉", price:"観覧無料", tags:["宿泊向け", "全9回"], visual:"lantern", verified:"Hello Navi確認済み" },
];

const openings = [
  { prefecture: "愛知", area: "名古屋駅", date: "7/24", title: "喫茶トウカイ", type: "NEW", kind: "純喫茶" },
  { prefecture: "静岡", area: "静岡・鷹匠", date: "7/22", title: "まちのベーカリー ao", type: "NEW", kind: "パン" },
  { prefecture: "三重", area: "四日市", date: "7/21", title: "湯の山スタンド", type: "RENEW", kind: "カフェ" },
];

const posts = [
  { area: "名古屋市", time: "12分前", title: "久屋大通公園、噴水エリアは空いてます", body: "日陰のベンチもまだ余裕あり。夕方は混みそうです。", reactions: 24, avatar: "な" },
  { area: "高山市", time: "38分前", title: "古い町並み周辺の駐車場について", body: "駅西側は待ち時間なし。中心部は少し混んでいました。", reactions: 18, avatar: "飛" },
  { area: "伊勢市", time: "1時間前", title: "おはらい町、午後から雨が強くなっています", body: "折りたたみ傘より大きめの傘がおすすめです。", reactions: 31, avatar: "伊" },
];

const areaLinks = [
  ["愛知", "名古屋", "尾張・犬山", "知多半島", "西三河", "東三河"],
  ["岐阜", "岐阜・西濃", "東濃", "郡上", "下呂", "飛騨高山"],
  ["三重", "北勢", "伊賀", "松阪", "伊勢志摩", "東紀州"],
  ["静岡", "伊豆・熱海", "沼津・三島", "富士", "静岡・清水", "浜松"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chutonavi.syunnjack.chatgpt.site/#website",
      url: "https://chutonavi.syunnjack.chatgpt.site/",
      name: "中部・東海ナビ",
      description: "愛知・岐阜・三重・静岡の今日使える地域情報ナビ",
      inLanguage: "ja",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://chutonavi.syunnjack.chatgpt.site/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://chutonavi.syunnjack.chatgpt.site/#organization",
      name: "中部・東海ナビ編集部",
      url: "https://chutonavi.syunnjack.chatgpt.site/",
      logo: "https://chutonavi.syunnjack.chatgpt.site/favicon.svg",
      areaServed: ["愛知県", "岐阜県", "三重県", "静岡県"],
    },
    {
      "@type": "ItemList",
      name: "東海4県の注目イベント",
      itemListElement: events.map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: event.title,
        url: `https://chutonavi.syunnjack.chatgpt.site/#event-${event.id}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "中部・東海ナビではどの地域の情報を探せますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "愛知県、岐阜県、三重県、静岡県のイベント、開店・閉店、混雑、地域の投稿を探せます。",
          },
        },
        {
          "@type": "Question",
          name: "掲載情報はどのように確認していますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "公式情報、編集部の現地確認、地域ユーザーの投稿を区別し、確認状態と最終更新時刻を表示します。",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const [prefecture, setPrefecture] = useState<Prefecture>("すべて");
  const [timing, setTiming] = useState<Timing>("今日");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredEvents = useMemo(() => {
    const term = query.trim().toLowerCase();
    return events.filter((event) => {
      const prefectureMatch = prefecture === "すべて" || event.prefecture === prefecture;
      const timingMatch =
        timing === "今週末"
          ? event.date === "今週末" || event.date === "今日" || event.date === "明日"
          : event.date === timing;
      const queryMatch =
        !term || `${event.title}${event.area}${event.category}${event.tags.join("")}`.toLowerCase().includes(term);
      return prefectureMatch && timingMatch && queryMatch;
    });
  }, [prefecture, timing, query]);

  function toggleSaved(id: number) {
    setSaved((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function selectPrefecture(next: Prefecture) {
    const routes: Record<Exclude<Prefecture, "すべて">, string> = {
      愛知: "/aichi",
      岐阜: "/gifu",
      三重: "/mie",
      静岡: "/shizuoka",
    };
    if (next !== "すべて") window.location.assign(routes[next]);
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="中部・東海ナビ ホーム">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span><b>中部・東海</b>ナビ<small>CHUBU TOKAI NAVI</small></span>
        </a>
        <nav className={menuOpen ? "global-nav open" : "global-nav"} aria-label="メインナビゲーション">
          <a href="#events">今日・明日</a>
          <a href="#events">イベント</a>
          <a href="#openings">開店・閉店</a>
          <a href="#community">みんなの投稿</a>
          <a href="#areas">エリア</a>
        </nav>
        <div className="header-actions">
          <button className="saved-button" type="button" aria-label={`保存済み ${saved.length}件`}>
            <span aria-hidden="true">♡</span><b>{saved.length}</b>
          </button>
          <button className="post-button" type="button"><span>＋</span> 情報を投稿</button>
          <button
            className="menu-button"
            type="button"
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow"><span>LIVE</span> 愛知・岐阜・三重・静岡のいま</p>
          <h1>この週末、<br /><em>近くで何する？</em></h1>
          <p className="hero-copy">地元の人が届ける、今日使えるおでかけ情報。</p>

          <div className="search-panel">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="イベント、場所、エリアを検索"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <kbd>検索</kbd>
            </label>
            <div className="quick-filters" aria-label="日付で絞り込む">
              {(["今日", "明日", "今週末"] as Timing[]).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={timing === item ? "active" : ""}
                  onClick={() => setTiming(item)}
                >
                  {item === "今週末" && <span className="calendar-dot" aria-hidden="true">27</span>}
                  {item}
                </button>
              ))}
              <button type="button" onClick={() => setQuery("無料")}>¥ 無料</button>
              <button type="button" onClick={() => setQuery("子ども")}>♧ 子どもと</button>
            </div>
          </div>

          <div className="prefecture-picker" aria-label="県を選択">
            {prefectures.map((item) => (
              <button
                className={`prefecture ${item.tone} ${prefecture === item.name ? "selected" : ""}`}
                type="button"
                key={item.name}
                onClick={() => selectPrefecture(item.name)}
              >
                <span className="prefecture-weather">
                  <small>現在の天気</small>
                  <strong>{Math.round(getWeatherFallback(item.latitude).current.temperature_2m)}℃</strong>
                  <b>{item.weatherLabel}</b>
                </span>
                <span className="prefecture-main">
                  <span className="prefecture-shape">{item.name.slice(0, 1)}</span>
                  <span className="prefecture-name"><b>{item.name}</b><small>{item.kana}</small></span>
                  <i aria-hidden="true">→</i>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="hero-note">
          <span className="pulse" /> いま、東海4県で <b>428件</b> の情報が更新中
        </div>
      </section>

      <div className="home-transport-wrap"><TransportStatusPanel compact /></div>

      <section className="answer-strip" aria-labelledby="today-summary">
        <div className="section answer-grid">
          <div>
            <p className="section-kicker">TODAY AT A GLANCE</p>
            <h2 id="today-summary">東海4県、今日のおでかけ要約</h2>
            <p>2026年7月25日 13:00更新。公式情報と現地投稿をもとに、いま役立つ情報を短くまとめています。</p>
          </div>
          <dl>
            <div><dt>今日のイベント</dt><dd>126<small>件</small></dd></div>
            <div><dt>無料イベント</dt><dd>48<small>件</small></dd></div>
            <div><dt>現地からの更新</dt><dd>37<small>件</small></dd></div>
          </dl>
          <ul>
            <li><span>愛知</span>名古屋中心部は夕方から混雑見込み</li>
            <li><span>岐阜</span>飛騨エリアは午後も屋外イベント開催</li>
            <li><span>三重</span>伊勢志摩は一部で急な雨に注意</li>
            <li><span>静岡</span>浜松・静岡市で夏祭りを開催</li>
          </ul>
        </div>
      </section>

      <section className="section events-section" id="events">
        <div className="section-heading">
          <div>
            <p className="section-kicker">WHAT&apos;S ON</p>
            <h2>{prefecture === "すべて" ? "東海4県" : prefecture}の{timing}、何がある？</h2>
          </div>
          <div className="section-controls">
            <a className="location-button" href="/events/nagoya-summer-market#route">⌖ 現在地からルート</a>
            <a href="#areas">すべて見る <span>→</span></a>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="event-grid">
            {filteredEvents.map((event) => (
              <article className="event-card" key={event.id} id={`event-${event.id}`}>
                <div className={`event-visual ${event.visual}`}>
                  <div className="date-card"><b>{event.day}</b><span>{event.month}</span></div>
                  <span className="visual-word" aria-hidden="true">{event.prefecture}</span>
                  <button
                    className={saved.includes(event.id) ? "heart saved" : "heart"}
                    type="button"
                    aria-label={saved.includes(event.id) ? "保存を解除" : "保存する"}
                    onClick={() => toggleSaved(event.id)}
                  >
                    {saved.includes(event.id) ? "♥" : "♡"}
                  </button>
                </div>
                <div className="event-body">
                  <div className="event-meta"><span>● {event.prefecture}・{event.area}</span><span>{event.time}</span></div>
                  <h3><a href={event.url} target={event.url.startsWith("http") ? "_blank" : undefined} rel={event.url.startsWith("http") ? "noreferrer" : undefined}>{event.title}</a></h3>
                  <a className="event-detail-link" href={event.url} target={event.url.startsWith("http") ? "_blank" : undefined} rel={event.url.startsWith("http") ? "noreferrer" : undefined}>詳細・公式情報を見る →</a>
                  <p className="event-category">{event.category} <b>·</b> {event.price}</p>
                  <div className="tag-row">
                    {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className="verified"><span>✓</span> {event.verified}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>条件に合う情報はまだありません</h3>
            <p>別の日付やエリアで探してみてください。</p>
            <button type="button" onClick={() => { setQuery(""); setPrefecture("すべて"); setTiming("今週末"); }}>条件をリセット</button>
          </div>
        )}
      </section>

      <section className="discovery-band">
        <div className="section discovery-inner">
          <div className="discovery-copy">
            <p className="section-kicker light">DISCOVER TOKAI</p>
            <h2>いつもの街にも、<br />まだ知らない景色がある。</h2>
            <p>地元の人の「行ってきた」から見つける、東海の小さな発見。</p>
            <a href="#community">みんなの発見を見る <span>→</span></a>
          </div>
          <div className="discovery-cards" aria-label="おすすめテーマ">
            <article className="feature-card feature-mountain">
              <span className="feature-number">01</span>
              <div><small>GIFU · HIDA</small><h3>風が通る、<br />飛騨の朝。</h3><p>地元民がすすめる朝散歩</p></div>
            </article>
            <article className="feature-card feature-coast">
              <span className="feature-number">02</span>
              <div><small>MIE · SHIMA</small><h3>海辺で過ごす、<br />夏の午後。</h3><p>静かな入り江と寄り道</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="openings" id="openings">
          <div className="mini-heading">
            <div><p className="section-kicker">NEW IN TOWN</p><h2>まちの新しいお店</h2></div>
            <a href="#openings">一覧へ →</a>
          </div>
          <div className="opening-list">
            {openings.map((item, index) => (
              <article key={item.title}>
                <div className={`opening-thumb thumb-${index + 1}`}><span>{item.kind}</span></div>
                <div className="opening-content">
                  <div><span className={item.type === "RENEW" ? "renew-badge" : "new-badge"}>{item.type}</span><small>{item.date} OPEN</small></div>
                  <h3>{item.title}</h3>
                  <p>● {item.prefecture}・{item.area}　{item.kind}</p>
                </div>
                <span className="arrow-circle">→</span>
              </article>
            ))}
          </div>
        </div>

        <div className="community" id="community">
          <div className="mini-heading">
            <div><p className="section-kicker">LOCAL VOICES</p><h2>現地から届いた声</h2></div>
            <span className="live-badge"><i /> LIVE</span>
          </div>
          <div className="post-list">
            {posts.map((post) => (
              <article key={post.title}>
                <div className="post-avatar">{post.avatar}</div>
                <div className="post-content">
                  <p className="post-meta">{post.area}<span>・{post.time}</span></p>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <div className="post-actions"><span>♡ {post.reactions}</span><span>返信</span><span className="post-status">✓ 現地投稿</span></div>
                </div>
              </article>
            ))}
          </div>
          <button className="community-button" type="button">あなたの街の「いま」を投稿する <span>＋</span></button>
        </div>
      </section>

      <section className="area-section" id="areas">
        <div className="section">
          <div className="section-heading">
            <div><p className="section-kicker">EXPLORE BY AREA</p><h2>エリアから見つける</h2></div>
            <p className="area-lead">4県、全市町村の情報を<br />地域の目線で。</p>
          </div>
          <div className="area-grid">
            {areaLinks.map(([pref, ...areas], index) => (
              <article className={`area-column area-${index + 1}`} key={pref}>
                <a className="area-page-link" href={`/${["aichi", "gifu", "mie", "shizuoka"][index]}`}>
                  <span><b>{pref}</b><small>{prefectures[index].kana}</small></span><i>→</i>
                </a>
                <ul>{areas.map((area) => <li key={area}><a href="#events">{area}<span>›</span></a></li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="trust-copy">
          <p className="section-kicker">OPEN &amp; TRUSTED</p>
          <h2>地域のみんなで、<br />情報を新しく保つ。</h2>
          <p>投稿は確認状態を明示し、訂正履歴を残します。AIや検索から訪れた人にも、情報源と鮮度がすぐ伝わる設計です。</p>
        </div>
        <div className="trust-steps">
          <article><span>01</span><div><h3>投稿する</h3><p>イベント、混雑、新店など地域の「いま」を共有。</p></div></article>
          <article><span>02</span><div><h3>確かめる</h3><p>公式発表、現地確認、投稿情報を分けて表示。</p></div></article>
          <article><span>03</span><div><h3>役立てる</h3><p>保存や共有が次のおでかけと地域の応援につながる。</p></div></article>
        </div>
      </section>

      <section className="faq-section">
        <div className="section faq-inner">
          <div><p className="section-kicker light">QUICK ANSWERS</p><h2>よくある質問</h2></div>
          <div className="faq-list">
            <details open>
              <summary>どの地域の情報を探せますか？<span>＋</span></summary>
              <p>愛知県、岐阜県、三重県、静岡県のイベント、開店・閉店、混雑、地域の投稿を探せます。今後、市区町村ごとのページを順次拡充します。</p>
            </details>
            <details>
              <summary>掲載情報はどのように確認していますか？<span>＋</span></summary>
              <p>公式情報、編集部の現地確認、地域ユーザーの投稿を区別し、各情報に確認状態と最終更新時刻を表示します。</p>
            </details>
            <details>
              <summary>イベントや新店情報を投稿できますか？<span>＋</span></summary>
              <p>どなたでも投稿できます。公開前に内容を確認し、個人情報や誹謗中傷を含む投稿は掲載しません。</p>
            </details>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="section-kicker light">YOUR WEEKEND, SORTED.</p>
          <h2>週末の予定、木曜に届きます。</h2>
          <p>登録したエリアのイベント・新店情報をまとめてお知らせ。</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label><span>メールアドレス</span><input type="email" placeholder="you@example.com" /></label>
          <button type="submit">無料で受け取る →</button>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            <span><b>中部・東海</b>ナビ<small>CHUBU TOKAI NAVI</small></span>
          </a>
          <p>愛知・岐阜・三重・静岡の<br />今日使える、地元の情報。</p>
          <div className="footer-links">
            <div><b>見つける</b><a href="#events">今日・明日</a><a href="#events">イベント</a><a href="#openings">開店・閉店</a></div>
            <div><b>参加する</b><a href="#community">情報を投稿</a><a href="#community">地域の質問</a><a href="#community">訂正を依頼</a></div>
            <div><b>中部・東海ナビ</b><a href="#top">私たちについて</a><a href="#top">運営ポリシー</a><a href="#top">お問い合わせ</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 CHUBU TOKAI NAVI</span><span>情報の正確性を大切に、地域と一緒につくるナビ。</span></div>
      </footer>

      <nav className="mobile-dock" aria-label="モバイルメニュー">
        <a href="#top"><span>⌂</span>ホーム</a>
        <a href="#events"><span>⌕</span>探す</a>
        <button type="button"><span>＋</span>投稿</button>
        <a href="#community"><span>♧</span>みんな</a>
        <a href="#areas"><span>◎</span>エリア</a>
      </nav>
    </main>
  );
}
