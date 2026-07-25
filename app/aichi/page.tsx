import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = {
  title: "愛知県の今日・今週末のイベント、おでかけ情報",
  description: "愛知県の今日・明日・今週末のイベント、無料スポット、子連れのおでかけ、開店・閉店情報。名古屋、尾張、知多、西三河、東三河の現地情報を更新。",
  alternates: { canonical: "/aichi" },
};

export default function AichiPage() {
  return <AreaPage prefecture="愛知" slug="aichi" english="AICHI" lead="名古屋の街なかから三河の自然、知多の海まで。いま行ける場所を地元目線で。" summary="名古屋中心部では夕方から夏祭りの混雑が見込まれます。知多半島は海沿いの施設が人気。西三河では屋内の子ども向けイベントも開催中です。" areas={["名古屋", "尾張・犬山", "知多半島", "西三河", "東三河", "奥三河"]} highlights={[{label:"今日",title:"なごや夏の夜市 2026",description:"夕方から楽しめる屋台と音楽。入場無料、家族で立ち寄れます。"},{label:"新店",title:"名古屋駅周辺の新しい喫茶店",description:"地元で話題になっている新店を、営業時間とともに紹介。"},{label:"無料",title:"愛知の水遊びスポット",description:"子どもと無料で楽しめる公園と噴水エリアをまとめました。"}]} questions={[{question:"愛知県で今日開催される無料イベントは？",answer:"名古屋市内のマルシェや公園イベントを中心に19件掲載しています。開催状況は各詳細ページの確認状態をご覧ください。"},{question:"雨の日に子どもと遊べる場所は？",answer:"名古屋市科学館周辺、トヨタ産業技術記念館などの屋内施設と、当日参加できる体験イベントを掲載しています。"},{question:"名古屋以外の情報もありますか？",answer:"尾張、知多、西三河、東三河、奥三河まで、愛知県内を6エリアに分けて掲載しています。"}]} />;
}
