import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "静岡県の今日・今週末のイベント、おでかけ情報", description: "静岡県のイベント、花火、海、富士山、開店情報。伊豆・熱海、沼津・三島、富士、静岡・清水、浜松の現地情報を更新。", alternates: { canonical: "/shizuoka" } };
export default function ShizuokaPage() {
  return <AreaPage prefecture="静岡" slug="shizuoka" english="SHIZUOKA" lead="伊豆の海から富士山麓、浜名湖まで。東西に長い静岡を、いまいる場所から探す。" summary="浜松と静岡市で夏祭りを開催。伊豆の海沿いは午後に交通量が増える見込みです。富士山周辺は雲が出やすいためライブ情報をご確認ください。" weather={{location:"静岡市",latitude:34.9756,longitude:138.3828}} sourceUrl="https://hellonavi.jp/" spots={[
    {name:"三保松原",city:"静岡市",category:"世界遺産",description:"富士山と松林、海岸の景観で知られる構成資産。",url:"https://miho-no-matsubara.jp/"},
    {name:"久能山東照宮",city:"静岡市",category:"国宝",description:"徳川家康公を祀り、社殿が国宝に指定される神社。",url:"https://www.toshogu.or.jp/"},
    {name:"日本平夢テラス",city:"静岡市",category:"絶景",description:"富士山、駿河湾、伊豆半島を一望する展望施設。",url:"https://nihondaira-yume-terrace.jp/"},
    {name:"富士山本宮浅間大社",city:"富士宮市",category:"神社",description:"全国の浅間神社の総本宮で富士山信仰の中心。",url:"http://fuji-hongu.or.jp/sengen/"},
    {name:"白糸ノ滝",city:"富士宮市",category:"自然",description:"富士山の伏流水が絹糸のように流れ落ちる名瀑。",url:"https://fujinomiya.gr.jp/guide/170/"},
    {name:"御殿場プレミアム・アウトレット",city:"御殿場市",category:"買い物",description:"富士山を望む国内最大級のアウトレットモール。",url:"https://www.premiumoutlets.co.jp/gotemba/"},
    {name:"沼津港深海水族館",city:"沼津市",category:"水族館",description:"深海生物と冷凍シーラカンスを展示する水族館。",url:"https://www.numazu-deepsea.com/"},
    {name:"熱海梅園",city:"熱海市",category:"花",description:"早咲きの梅と遅い紅葉で知られる歴史ある庭園。",url:"https://www.ataminews.gr.jp/spot/105/"},
    {name:"MOA美術館",city:"熱海市",category:"美術館",description:"国宝を含む東洋美術と相模灘の眺望を楽しめる。",url:"https://www.moaart.or.jp/"},
    {name:"伊豆シャボテン動物公園",city:"伊東市",category:"家族",description:"動物との近さと世界のサボテン展示が特徴。",url:"https://izushaboten.com/"},
    {name:"浜松城",city:"浜松市",category:"歴史",description:"徳川家康公が17年間在城した出世城。",url:"https://www.entetsuassist-dms.com/hamamatsu-jyo/"},
    {name:"浜名湖ガーデンパーク",city:"浜松市",category:"公園",description:"四季の花と水辺を無料で楽しめる広大な都市公園。",url:"https://www.hamanako-gardenpark.jp/"},
  ]} municipalSources={[
    {municipality:"静岡市",title:"観光・文化情報",description:"日本平、三保、久能山、中心市街地の観光とイベントの市公式情報です。",url:"https://www.city.shizuoka.lg.jp/kankou/"},
    {municipality:"浜松市",title:"観光・イベント情報",description:"浜名湖、音楽、徳川家康ゆかりの地、季節イベントを確認できます。",url:"https://www.city.hamamatsu.shizuoka.jp/kanko/"},
    {municipality:"熱海市",title:"観光・花火情報",description:"海上花火大会、梅園、海水浴場、交通・観光の市公式案内です。",url:"https://www.city.atami.lg.jp/kanko/"},
    {municipality:"富士宮市",title:"富士山・観光情報",description:"富士山の登山・規制、浅間大社、白糸ノ滝と周辺観光の公式情報です。",url:"https://www.city.fujinomiya.lg.jp/kankou/"},
  ]} areas={["伊豆・熱海", "沼津・三島", "富士", "静岡・清水", "焼津・藤枝", "浜松・浜名湖"]} highlights={[{label:"夏",title:"浜名湖サマーパーク",description:"水辺の体験と地元グルメを家族で楽しめます。"},{label:"海",title:"伊豆、朝の海岸ドライブ",description:"渋滞を避けて楽しむ展望スポットと朝ごはん。"},{label:"新店",title:"静岡・鷹匠の新しい店",description:"歩いて巡れるカフェとベーカリーの最新情報。"}]} questions={[{question:"静岡県の花火大会情報はありますか？",answer:"開催日、会場、交通規制、駐車場、延期情報を大会ごとに更新します。"},{question:"伊豆の道路は混雑していますか？",answer:"夏の週末は午前10時以降に海沿いが混みやすいため、早めの移動がおすすめです。"},{question:"富士山が見える場所を探せますか？",answer:"富士・御殿場・沼津周辺の展望スポットと、現地からの見え方投稿を掲載します。"}]} />;
}
