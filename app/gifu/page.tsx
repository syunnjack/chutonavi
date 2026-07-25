import type { Metadata } from "next";
import AreaPage from "../_components/AreaPage";

export const metadata: Metadata = { title: "岐阜県の今日・今週末のイベント、おでかけ情報", description: "岐阜県のイベント、祭り、温泉、開店情報。岐阜・西濃、東濃、郡上、下呂、飛騨高山の現地情報を更新。", alternates: { canonical: "/gifu" } };
export default function GifuPage() {
  return <AreaPage prefecture="岐阜" slug="gifu" english="GIFU" lead="清流のまちから山あいの温泉まで。季節の行事と現地の声をひとつに。" summary="郡上では夜の踊りイベントを開催。飛騨高山は午前中の散策が比較的快適です。岐阜市周辺では家族向けの屋内企画も実施されています。" weather={{location:"岐阜市",latitude:35.4233,longitude:136.7607}} sourceUrl="https://www.kankou-gifu.jp/" spots={[
    {name:"岐阜城",city:"岐阜市",category:"歴史",description:"金華山山頂に立ち、濃尾平野を見渡せる山城。",url:"https://www.gifucvb.or.jp/sightseeing/detail_kankou.php?eid=00001"},
    {name:"ぎふ金華山ロープウェー",city:"岐阜市",category:"眺望",description:"岐阜公園と金華山山頂を約4分で結ぶロープウェー。",url:"https://www.kinkazan.co.jp/"},
    {name:"世界遺産 白川郷",city:"白川村",category:"世界遺産",description:"合掌造り集落と四季の山里風景が残る世界文化遺産。",url:"https://shirakawa-go.gr.jp/"},
    {name:"飛騨高山 古い町並",city:"高山市",category:"町歩き",description:"江戸時代の面影を残す商家の町並みと朝市。",url:"https://www.hidatakayama.or.jp/"},
    {name:"下呂温泉",city:"下呂市",category:"温泉",description:"飛騨川沿いに宿が並ぶ日本有数の温泉地。",url:"https://www.gero-spa.com/"},
    {name:"新穂高ロープウェイ",city:"高山市",category:"絶景",description:"日本唯一の2階建てゴンドラで北アルプスの山上へ。",url:"https://shinhotaka-ropeway.jp/"},
    {name:"郡上八幡城",city:"郡上市",category:"歴史",description:"城下町を見下ろす日本最古の木造再建城。",url:"https://hachiman-castle.com/"},
    {name:"モネの池",city:"関市",category:"自然",description:"透明な湧水と睡蓮、錦鯉が美しい名もなき池。",url:"https://www.kankou-gifu.jp/spot/detail_5094.html"},
    {name:"養老公園・養老の滝",city:"養老町",category:"自然",description:"名瀑と広い公園を合わせて楽しめる西濃の定番。",url:"https://www.yoro-park.com/"},
    {name:"馬籠宿",city:"中津川市",category:"宿場町",description:"石畳の坂道に町家が並ぶ中山道の宿場町。",url:"https://kiso-magome.com/"},
    {name:"恵那峡",city:"恵那市",category:"渓谷",description:"奇岩と湖面の景観を遊覧船から楽しめる渓谷。",url:"https://www.kankou-ena.jp/"},
    {name:"ぎふ清流里山公園",city:"美濃加茂市",category:"家族",description:"里山体験、遊具、グルメを楽しめる入園無料の公園。",url:"https://satoyama-park.gifu.jp/"},
  ]} municipalSources={[
    {municipality:"岐阜市",title:"観光・文化情報",description:"岐阜城、金華山、長良川鵜飼、文化施設とイベントの公式情報です。",url:"https://www.city.gifu.lg.jp/kankoubunka/"},
    {municipality:"高山市",title:"観光・祭り情報",description:"古い町並、高山祭、交通・駐車場など旅行前に役立つ市公式案内です。",url:"https://www.city.takayama.lg.jp/kanko/"},
    {municipality:"下呂市",title:"観光・温泉情報",description:"下呂温泉、周辺観光、季節イベントに関する市の公式情報です。",url:"https://www.city.gero.lg.jp/site/kanko/"},
    {municipality:"郡上市",title:"観光・文化情報",description:"郡上おどり、郡上八幡、白鳥・高鷲方面の地域情報を確認できます。",url:"https://www.city.gujo.gifu.jp/"},
  ]} areas={["岐阜・西濃", "東濃", "中濃", "郡上", "下呂", "飛騨高山"]} highlights={[{label:"祭り",title:"郡上おどり 夏の宵",description:"地元で受け継がれる夏の踊り。夜まで楽しめます。"},{label:"朝旅",title:"飛騨高山、朝のまち歩き",description:"混雑前に巡る古い町並みと朝市のモデルコース。"},{label:"自然",title:"清流沿いの涼しい寄り道",description:"ドライブ途中に立ち寄れる川辺と道の駅を紹介。"}]} questions={[{question:"岐阜で今週末に開催される祭りは？",answer:"郡上、岐阜市、東濃を中心に夏祭りと地域行事を掲載しています。"},{question:"飛騨高山は何時ごろが歩きやすいですか？",answer:"夏季は午前9時前後が比較的歩きやすく、朝市にも立ち寄れます。"},{question:"雨の日でも楽しめますか？",answer:"博物館、工芸体験、屋内温泉など、雨天向けの情報も絞り込めます。"}]} />;
}
