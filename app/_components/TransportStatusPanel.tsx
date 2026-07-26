type TransportStatusPanelProps = {
  prefecture?: "愛知" | "岐阜" | "三重" | "静岡";
  compact?: boolean;
};

const regionalLinks = {
  愛知: [
    { label: "名鉄", detail: "名古屋本線・犬山線・常滑線ほか", url: "https://top.meitetsu.co.jp/em/" },
    { label: "地下鉄・市バス", detail: "名古屋市交通局の運行情報", url: "https://www.city.nagoya.jp/aichi-nagoya2026/1040799/1039135.html" },
  ],
  岐阜: [
    { label: "名鉄・地域交通", detail: "岐阜方面の鉄道・バス運行情報", url: "https://wwwtb.mlit.go.jp/chubu/pubtrachubu/gifu_ja.html" },
  ],
  三重: [
    { label: "近鉄", detail: "名古屋線・山田線・鳥羽線ほか", url: "https://www.kintetsu.jp/unkou/unkou.html" },
    { label: "三重の地域交通", detail: "鉄道・路線バス・旅客船", url: "https://wwwtb.mlit.go.jp/chubu/pubtrachubu/mie_ja.html" },
  ],
  静岡: [
    { label: "静鉄・路線バス", detail: "静岡鉄道・しずてつジャストラインほか", url: "https://www.city.shizuoka.lg.jp/s3792/s001273.html" },
    { label: "遠州鉄道", detail: "鉄道線・遠鉄バスの運行情報", url: "https://www.entetsu.co.jp/tetsudou/" },
  ],
};

export default function TransportStatusPanel({ prefecture, compact = false }: TransportStatusPanelProps) {
  const localLinks = prefecture ? regionalLinks[prefecture] : Object.values(regionalLinks).flat();
  const links = [
    { label: "JR東海", detail: "新幹線・東海道線・中央線・高山線ほか", url: "https://railway.jr-central.co.jp/" },
    ...localLinks,
  ];

  return (
    <section className={`transport-status ${compact ? "transport-status-compact" : ""}`} aria-labelledby={`transport-${prefecture ?? "all"}`}>
      <div className="transport-heading">
        <div><small>LIVE TRAFFIC LINKS</small><h2 id={`transport-${prefecture ?? "all"}`}>{prefecture ? `${prefecture}の` : "4県の"}交通・渋滞情報</h2></div>
        <p><span /> 出発前に公式情報を確認</p>
      </div>
      <div className="transport-columns">
        <div>
          <h3>🚃 鉄道・地下鉄・バス</h3>
          <div className="transport-link-grid">
            {links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}><b>{link.label}</b><span>{link.detail}</span><em>遅延・運休を確認 ↗</em></a>)}
          </div>
        </div>
        <div>
          <h3>🚗 高速道路・一般道</h3>
          <div className="transport-link-grid road-links">
            <a href="https://www.c-nexco.co.jp/jam/" target="_blank" rel="noreferrer"><b>NEXCO中日本</b><span>東名・新東名・中央道・東海北陸道ほか</span><em>渋滞・通行止めを確認 ↗</em></a>
            <a href="https://www.jartic.or.jp/" target="_blank" rel="noreferrer"><b>JARTIC</b><span>高速道路と一般道の道路交通情報</span><em>現在の道路状況を確認 ↗</em></a>
          </div>
        </div>
      </div>
      <p className="transport-advice">遅延・通行止めがある場合は、出発時刻をずらす、別路線へ切り替える、公共交通を利用するなど余裕を持ってお出かけください。運転中の操作はせず、安全な場所で確認してください。</p>
    </section>
  );
}
