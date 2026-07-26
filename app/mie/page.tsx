import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "三重県の今日・今週末のイベント、おでかけ情報", description: "三重県のイベント、伊勢志摩観光、グルメ、開店情報。北勢、伊賀、松阪、伊勢志摩、東紀州の現地情報を更新。", alternates: { canonical: "/mie" } };
export default function MiePage() {
  return <AreaPage prefecture="三重" slug="mie" english="MIE" lead="伊勢のまち歩きから志摩の海、北勢のレジャーまで。今日の三重を近くする。" summary="伊勢市では朝市とクラフト企画を開催。伊勢志摩では午後に急な雨の可能性があります。北勢の大型施設は昼前から混雑傾向です。" weather={{location:"津市",latitude:34.7303,longitude:136.5086}} sourceUrl="https://www.kankomie.or.jp/" spots={[
    {name:"伊勢神宮",city:"伊勢市",category:"神社",description:"内宮と外宮を中心に125社からなる神宮。",url:"https://www.isejingu.or.jp/"},
    {name:"おかげ横丁",city:"伊勢市",category:"町歩き",description:"伊勢路の建築と郷土料理、土産物を楽しめる町並み。",url:"https://okageyokocho.com/"},
    {name:"鳥羽水族館",city:"鳥羽市",category:"水族館",description:"ジュゴンをはじめ多彩な生きものを飼育する水族館。",url:"https://aquarium.co.jp/"},
    {name:"志摩スペイン村",city:"志摩市",category:"家族",description:"テーマパーク、ホテル、温泉からなる複合リゾート。",url:"https://www.parque-net.com/"},
    {name:"横山展望台",city:"志摩市",category:"絶景",description:"英虞湾の島々とリアス海岸を望む展望スポット。",url:"https://www.env.go.jp/park/iseshima/yokoyama/"},
    {name:"ナガシマスパーランド",city:"桑名市",category:"レジャー",description:"大型コースターと季節のプールで知られる遊園地。",url:"https://www.nagashima-onsen.co.jp/spaland/"},
    {name:"なばなの里",city:"桑名市",category:"花",description:"季節の花と国内最大級のイルミネーションを楽しめる。",url:"https://www.nagashima-onsen.co.jp/nabana/"},
    {name:"鈴鹿サーキットパーク",city:"鈴鹿市",category:"家族",description:"子どもが自ら運転できる乗り物が充実したテーマパーク。",url:"https://www.suzukacircuit.jp/park/"},
    {name:"伊賀流忍者博物館",city:"伊賀市",category:"文化",description:"忍者屋敷、資料展示、実演で伊賀忍者を紹介。",url:"https://www.iganinja.jp/"},
    {name:"御在所ロープウエイ",city:"菰野町",category:"絶景",description:"湯の山温泉から御在所岳山上へ結ぶ空中散歩。",url:"https://www.gozaisho.co.jp/"},
    {name:"熊野古道 伊勢路",city:"熊野市ほか",category:"世界遺産",description:"伊勢から熊野三山へ続く祈りの道。",url:"https://www.kodo.pref.mie.lg.jp/"},
    {name:"赤目四十八滝",city:"名張市",category:"自然",description:"渓谷沿いに大小の滝が連なるハイキングコース。",url:"https://www.akame48taki.com/"},
  ]} municipalSources={[
    {municipality:"伊勢市",title:"観光・行事情報",description:"伊勢神宮周辺、行事、交通、観光案内所などの市公式情報です。",url:"https://www.city.ise.mie.jp/kankou/"},
    {municipality:"鳥羽市",title:"観光・海の情報",description:"離島航路、海辺の観光、祭り、観光施設に関する市公式案内です。",url:"https://www.city.toba.mie.jp/soshiki/kanko/"},
    {municipality:"志摩市",title:"観光・イベント情報",description:"英虞湾、展望台、海水浴場、地域イベントの一次情報を確認できます。",url:"https://www.city.shima.mie.jp/"},
    {municipality:"伊賀市",title:"観光・文化財情報",description:"伊賀流忍者、上野城、芭蕉ゆかりの地と催しの市公式情報です。",url:"https://www.city.iga.lg.jp/"},
  ]} areas={["北勢", "伊賀", "中勢", "松阪", "伊勢志摩", "東紀州"]} highlights={[{label:"朝市",title:"伊勢の朝市とクラフト市",description:"地元の食と手仕事に出会える午前中のイベント。"},{label:"海辺",title:"志摩で過ごす静かな午後",description:"入り江の景色と小さなカフェを巡る寄り道。"},{label:"家族",title:"北勢の家族向けスポット",description:"天候を気にせず遊べる施設を混雑情報と紹介。"}]} questions={[{question:"伊勢神宮周辺は混雑していますか？",answer:"午前10時以降は混雑しやすく、公共交通または少し離れた駐車場の利用がおすすめです。"},{question:"三重で子どもと遊べる場所は？",answer:"北勢と伊勢志摩を中心に、屋内施設、水遊び、体験イベントを掲載しています。"},{question:"東紀州の情報もありますか？",answer:"熊野・尾鷲周辺の祭り、自然、道の駅などの情報を順次追加しています。"}]} />;
}
