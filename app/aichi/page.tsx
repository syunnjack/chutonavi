import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = {
  title: "愛知県の今日・今週末のイベント、おでかけ情報",
  description: "愛知県の今日・明日・今週末のイベント、無料スポット、子連れのおでかけ、開店・閉店情報。名古屋、尾張、知多、西三河、東三河の現地情報を更新。",
  alternates: { canonical: "/aichi" },
};

export default function AichiPage() {
  return <AreaPage prefecture="愛知" slug="aichi" english="AICHI" lead="名古屋の街なかから三河の自然、知多の海まで。いま行ける場所を地元目線で。" summary="名古屋中心部では夕方から夏祭りの混雑が見込まれます。知多半島は海沿いの施設が人気。西三河では屋内の子ども向けイベントも開催中です。" weather={{location:"名古屋市",latitude:35.1815,longitude:136.9066}} sourceUrl="https://www.aichinow.pref.aichi.jp/" spots={[
    {name:"名古屋城",city:"名古屋市",category:"歴史",description:"金のしゃちほこで知られる名古屋の代表的な城郭。",url:"https://www.nagoyajo.city.nagoya.jp/"},
    {name:"名古屋市科学館",city:"名古屋市",category:"屋内",description:"世界最大級のプラネタリウムを備える総合科学館。",url:"https://www.ncsm.city.nagoya.jp/"},
    {name:"東山動植物園",city:"名古屋市",category:"家族",description:"動物園・植物園・遊園地を一日楽しめる都市型施設。",url:"https://www.higashiyama.city.nagoya.jp/"},
    {name:"トヨタ産業技術記念館",city:"名古屋市",category:"産業",description:"繊維機械と自動車技術の発展を実演展示で紹介。",url:"https://www.tcmit.org/"},
    {name:"犬山城",city:"犬山市",category:"国宝",description:"現存天守から木曽川と城下町を一望できる国宝。",url:"https://inuyamajo.jp/"},
    {name:"博物館 明治村",city:"犬山市",category:"建築",description:"明治期の歴史的建造物を移築保存する野外博物館。",url:"https://www.meijimura.com/"},
    {name:"野外民族博物館リトルワールド",city:"犬山市",category:"体験",description:"世界各地の家屋、食、衣装を体験できる野外博物館。",url:"https://www.littleworld.jp/"},
    {name:"愛・地球博記念公園",city:"長久手市",category:"公園",description:"広い公園内に自然、遊具、文化施設が集まる。",url:"https://www.aichi-koen.com/moricoro/"},
    {name:"中部国際空港セントレア",city:"常滑市",category:"空港",description:"展望デッキや商業施設も楽しめる海上空港。",url:"https://www.centrair.jp/"},
    {name:"南知多ビーチランド",city:"美浜町",category:"家族",description:"海の生き物との距離が近い体験型水族館。",url:"https://beachland.jp/"},
    {name:"岡崎城",city:"岡崎市",category:"歴史",description:"徳川家康公生誕の地として知られる岡崎公園の城。",url:"https://okazaki-kanko.jp/okazaki-park/feature/okazakijo/top"},
    {name:"ラグーナテンボス",city:"蒲郡市",category:"レジャー",description:"テーマパーク、買い物、温泉が集まる複合リゾート。",url:"https://www.lagunatenbosch.co.jp/"},
  ]} municipalSources={[
    {municipality:"名古屋市",title:"観光・イベント情報",description:"市内イベント、文化施設、名古屋城や東山動植物園などの市公式情報を確認できます。",url:"https://www.city.nagoya.jp/kankou/index.html"},
    {municipality:"犬山市",title:"観光・文化財情報",description:"国宝犬山城、城下町、文化財、祭りに関する市の案内です。",url:"https://www.city.inuyama.aichi.jp/kanko/"},
    {municipality:"岡崎市",title:"観光・イベント情報",description:"岡崎城、家康公ゆかりの地、市内イベントの一次情報を確認できます。",url:"https://www.city.okazaki.lg.jp/300/306/"},
    {municipality:"蒲郡市",title:"観光・潮干狩り情報",description:"海辺の観光、潮干狩り、祭り、交通に関する市公式案内です。",url:"https://www.city.gamagori.lg.jp/life/5/"},
  ]} areas={["名古屋", "尾張・犬山", "知多半島", "西三河", "東三河", "奥三河"]} highlights={[{label:"今日",title:"なごや夏の夜市 2026",description:"夕方から楽しめる屋台と音楽。入場無料、家族で立ち寄れます。"},{label:"新店",title:"名古屋駅周辺の新しい喫茶店",description:"地元で話題になっている新店を、営業時間とともに紹介。"},{label:"無料",title:"愛知の水遊びスポット",description:"子どもと無料で楽しめる公園と噴水エリアをまとめました。"}]} questions={[{question:"愛知県で今日開催される無料イベントは？",answer:"名古屋市内のマルシェや公園イベントを中心に19件掲載しています。開催状況は各詳細ページの確認状態をご覧ください。"},{question:"雨の日に子どもと遊べる場所は？",answer:"名古屋市科学館周辺、トヨタ産業技術記念館などの屋内施設と、当日参加できる体験イベントを掲載しています。"},{question:"名古屋以外の情報もありますか？",answer:"尾張、知多、西三河、東三河、奥三河まで、愛知県内を6エリアに分けて掲載しています。"}]} />;
}
