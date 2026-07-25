import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "静岡県の今日・今週末のイベント、おでかけ情報", description: "静岡県のイベント、花火、海、富士山、開店情報。伊豆・熱海、沼津・三島、富士、静岡・清水、浜松の現地情報を更新。", alternates: { canonical: "/shizuoka" } };
export default function ShizuokaPage() {
  return <AreaPage prefecture="静岡" slug="shizuoka" english="SHIZUOKA" lead="伊豆の海から富士山麓、浜名湖まで。東西に長い静岡を、いまいる場所から探す。" summary="浜松と静岡市で夏祭りを開催。伊豆の海沿いは午後に交通量が増える見込みです。富士山周辺は雲が出やすいためライブ情報をご確認ください。" areas={["伊豆・熱海", "沼津・三島", "富士", "静岡・清水", "焼津・藤枝", "浜松・浜名湖"]} highlights={[{label:"夏",title:"浜名湖サマーパーク",description:"水辺の体験と地元グルメを家族で楽しめます。"},{label:"海",title:"伊豆、朝の海岸ドライブ",description:"渋滞を避けて楽しむ展望スポットと朝ごはん。"},{label:"新店",title:"静岡・鷹匠の新しい店",description:"歩いて巡れるカフェとベーカリーの最新情報。"}]} questions={[{question:"静岡県の花火大会情報はありますか？",answer:"開催日、会場、交通規制、駐車場、延期情報を大会ごとに更新します。"},{question:"伊豆の道路は混雑していますか？",answer:"夏の週末は午前10時以降に海沿いが混みやすいため、早めの移動がおすすめです。"},{question:"富士山が見える場所を探せますか？",answer:"富士・御殿場・沼津周辺の展望スポットと、現地からの見え方投稿を掲載します。"}]} />;
}
