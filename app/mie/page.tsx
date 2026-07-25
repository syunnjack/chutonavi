import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "三重県の今日・今週末のイベント、おでかけ情報", description: "三重県のイベント、伊勢志摩観光、グルメ、開店情報。北勢、伊賀、松阪、伊勢志摩、東紀州の現地情報を更新。", alternates: { canonical: "/mie" } };
export default function MiePage() {
  return <AreaPage prefecture="三重" slug="mie" english="MIE" lead="伊勢のまち歩きから志摩の海、北勢のレジャーまで。今日の三重を近くする。" summary="伊勢市では朝市とクラフト企画を開催。伊勢志摩では午後に急な雨の可能性があります。北勢の大型施設は昼前から混雑傾向です。" areas={["北勢", "伊賀", "中勢", "松阪", "伊勢志摩", "東紀州"]} highlights={[{label:"朝市",title:"伊勢の朝市とクラフト市",description:"地元の食と手仕事に出会える午前中のイベント。"},{label:"海辺",title:"志摩で過ごす静かな午後",description:"入り江の景色と小さなカフェを巡る寄り道。"},{label:"家族",title:"北勢の家族向けスポット",description:"天候を気にせず遊べる施設を混雑情報と紹介。"}]} questions={[{question:"伊勢神宮周辺は混雑していますか？",answer:"午前10時以降は混雑しやすく、公共交通または少し離れた駐車場の利用がおすすめです。"},{question:"三重で子どもと遊べる場所は？",answer:"北勢と伊勢志摩を中心に、屋内施設、水遊び、体験イベントを掲載しています。"},{question:"東紀州の情報もありますか？",answer:"熊野・尾鷲周辺の祭り、自然、道の駅などの情報を順次追加しています。"}]} />;
}
