import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "岐阜県の今日・今週末のイベント、おでかけ情報", description: "岐阜県のイベント、祭り、温泉、開店情報。岐阜・西濃、東濃、郡上、下呂、飛騨高山の現地情報を更新。", alternates: { canonical: "/gifu" } };
export default function GifuPage() {
  return <AreaPage prefecture="岐阜" slug="gifu" english="GIFU" lead="清流のまちから山あいの温泉まで。季節の行事と現地の声をひとつに。" summary="郡上では夜の踊りイベントを開催。飛騨高山は午前中の散策が比較的快適です。岐阜市周辺では家族向けの屋内企画も実施されています。" areas={["岐阜・西濃", "東濃", "中濃", "郡上", "下呂", "飛騨高山"]} highlights={[{label:"祭り",title:"郡上おどり 夏の宵",description:"地元で受け継がれる夏の踊り。夜まで楽しめます。"},{label:"朝旅",title:"飛騨高山、朝のまち歩き",description:"混雑前に巡る古い町並みと朝市のモデルコース。"},{label:"自然",title:"清流沿いの涼しい寄り道",description:"ドライブ途中に立ち寄れる川辺と道の駅を紹介。"}]} questions={[{question:"岐阜で今週末に開催される祭りは？",answer:"郡上、岐阜市、東濃を中心に夏祭りと地域行事を掲載しています。"},{question:"飛騨高山は何時ごろが歩きやすいですか？",answer:"夏季は午前9時前後が比較的歩きやすく、朝市にも立ち寄れます。"},{question:"雨の日でも楽しめますか？",answer:"博物館、工芸体験、屋内温泉など、雨天向けの情報も絞り込めます。"}]} />;
}
