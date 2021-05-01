import { InferGetStaticPropsType } from "next";
import "semantic-ui-css/semantic.min.css";
import { Image, Card, Icon, Container } from "semantic-ui-react";
// import Image from "next/image";

type Member = {
  id: number;
  name: string;
  image?: string;
  introduction1: string;
  introduction2?: string;
  introduction3?: string;
  grade: string;
  gradeId: string;
};

export default function Members({
  members,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {members.map((member) => (
        <Card>
          <Image src={"/images/member/" + member.image} />
          <Card.Content>
            <Card.Header>{member.name}</Card.Header>
            <Card.Meta>
              <span className="date">{member.grade}</span>
            </Card.Meta>
            <Card.Description>{member.introduction1}</Card.Description>
            <Card.Description>{member.introduction2}</Card.Description>
            <Card.Description>{member.introduction3}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Container>
  );
}

export const getStaticProps = async () => {
  const members: Member[] = [
    {
      id: 30,
      name: "飯島琢臣",
      image: "ijima.jpg",
      introduction1: "主将\n工学部環境土木建築学科\n出身：埼玉県蓮田市",
      introduction2: "何に対しても積極的に取り組む。",
      grade: "4年",
      gradeId: "grade4",
    },

    {
      id: 31,
      name: "細川大我",
      image: "hosokawa.jpg",
      introduction1: "経済学部経営学科\n出身：東京都大田区",
      introduction2: "イベントの手伝いを積極的に手伝ってくれる。。",
      grade: "4年",
      gradeId: "grade4",
    },
    {
      id: 32,
      name: "打江泰介",
      image: "uchie.jpg",
      introduction1: "副将\n経済学部経営学科\n出身：岐阜県高山市",
      introduction2: "国公立チャンピオン。",
      grade: "3年",
      gradeId: "grade3",
    },
    {
      id: 33,
      name: "清水貴大",
      image: "shimizu.jpg",
      introduction1: "情報学部自然情報学科\n出身：愛知県名古屋市",
      introduction2: "ポケモンが好き。",
      grade: "3年",
      gradeId: "grade3",
    },
    {
      id: 34,
      name: "杉浦晴海",
      image: "sugiura.jpg",
      introduction1: "情報学部自然情報学科\n出身：愛知県名古屋市",
      introduction2: "バイト命。",
      grade: "3年",
      gradeId: "grade3",
    },
    {
      id: 35,
      name: "岡竜大",
      image: "oka.jpg",
      introduction1: "主務\n経済学部経営学科\n出身：三重県いなべ市",
      introduction2: "場を盛り上げてくれるムードメーカー。",
      grade: "3年",
      gradeId: "grade3",
    },
    {
      id: 36,
      name: "加藤春奈",
      image: "kato.jpg",
      introduction1:
        "マネージャー\n工学部機械航空宇宙工学科\n出身：神奈川県横浜市",
      introduction2: "しっかり者で、同期のまとめ役。",
      grade: "2年",
      gradeId: "grade2",
    },
    {
      id: 37,
      name: "花井駿佑",
      image: "hanai.jpg",
      introduction1: "工学部物理工学科\n出身：愛知県名古屋市",
      introduction2: "サークルと部活を両立している。",
      grade: "2年",
      gradeId: "grade2",
    },
    {
      id: 38,
      name: "中川悠太",
      image: "nakagawa.jpg",
      introduction1: "農学部生物環境科学科\n出身：東京都世田谷区",
      introduction2: "麻雀好きのギャンブラー。",
      grade: "2年",
      gradeId: "grade2",
    },
    {
      id: 39,
      name: "高橋純輝",
      image: "takahashi.jpg",
      introduction1: "理学部物理学科\n出身：岐阜県岐阜市",
      introduction2: "真面目に見えて実はポンコツ。",
      grade: "2年",
      gradeId: "grade2",
    },
    {
      id: 40,
      name: "尾田駿太",
      image: "oda.jpg",
      introduction1: "工学部物理工学科\n出身：愛知県名古屋市",
      introduction2: "手足が長く、廻しを取るのが上手い。",
      grade: "2年",
      gradeId: "grade2",
    },
    {
      id: 41,
      name: "朴相雄",
      image: "paku.jpg",
      introduction1: "文学部\n出身：韓国ソウル",
      introduction2: "韓国人留学生で、マイペース。",
      grade: "1年",
      gradeId: "grade1",
    },
    {
      id: 42,
      name: "青山遼太郎",
      image: "aoyama.jpg",
      introduction1: "工学部機械航空宇宙工学科\n出身：愛知県一宮市",
      introduction2: "先輩のことが好き。",
      grade: "1年",
      gradeId: "grade1",
    },
    {
      id: 43,
      name: "土屋英貴",
      image: "tsuchiya.jpg",
      introduction1: "工学部機械航空宇宙工学科\n出身：静岡県浜松市",
      introduction2: "料理が好きで、いろいろな料理を作れる。",
      grade: "1年",
      gradeId: "grade1",
    },
    {
      id: 1,
      name: "加藤 延夫",
      introduction1: "総長",
      introduction2:
        "第１０代名古屋大学総長。現在は愛知医科大学理事長。細菌学の大家。相撲部には師範の細谷教授に引きずりこまれる。\n以来、名古屋大学相撲部総長として、いくつもの大会を主催し、合宿の慰問、稽古総見、「どすこい名古屋城ＲＡＶＥ」会長、七大学相撲連盟（七帝大相撲連盟）会長と、四方八方に伸び続ける名大相撲部の活動を庇護して動じない。\n世界最大規模（出場者１００名以上）の規模を誇る学内相撲大会である「加藤杯・名古屋大学学内相撲大会」の加藤杯は、このお方の名を冠としていることは言うまでもない。",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 2,
      name: "細谷 辰之",
      introduction1: "師範",
      introduction2:
        "名大相撲部初代主将。現在も自ら胸を出し、毎年夏の答志島合宿はフル参加。\nパジェロを乗り回し、サングラスをかけ、葉巻をふかし、初対面では教授だとは絶対にわからない。\n「メチャクチャうまい。」という口癖は、某部員に本人のいる前で堂々とものまねされている…。\n相撲初心者相手に内無双や捻り技を繰り出す点は、少々大人げないと思いますよ、細谷先生！",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 3,
      name: "高見秀樹",
      introduction1: "部長\n名古屋大学医学部附属病院助教",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 7,
      name: "新美 将平",
      image: "niimi.jpg",
      introduction1: "監督",
      introduction2:
        "一般人とさほど変わらない体格に、相撲部歴代でも憧れＮo.1の筋肉を備えるコーチ。\n現役時代には最終学年での怪我による不本意な引退もあったが、自分にも他人にも厳しい名主将として知られ、今はそのストイックさを生かして街を守る仕事をしている。\n写真の通り、某プロ野球選手に酷似しているが、バックボーンはサッカーである。\n紹介者：堤",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 8,
      name: "近藤 弘章",
      image: "kondou.jpg",
      introduction1: "コーチ",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 9,
      name: "岩田 将誉",
      image: "iwata.jpg",
      introduction1: "コーチ",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 10,
      name: "長合 誠也",
      image: "nagou.jpg",
      introduction1: "コーチ",
      grade: "首脳陣",
      gradeId: "managers",
    },
    {
      id: 11,
      name: "西田 拓矢",
      image: "nishida.jpg",
      introduction1:
        "副将\n工学研究科　電子情報システム\n172cm\n83kg\n可児高校",
      introduction2:
        "剣道部を引退した後、相撲部にやってきた。\n相撲部に入った途端に筋トレに目覚める。\nそして無類の筋トレ好きになる。人生で後悔していることは剣道部時代に筋トレしてこなかったことらしい。\nそんな彼も今や相撲部のムードメーカー。\nちなみに彼には立派な生きがいがあるようだが…それを知るのは入部してからになるだろう。\n紹介者　舘",
      grade: "卒業生（2017年度卒）",
      gradeId: "obg2017",
    },
    {
      id: 14,
      name: "木村 光史郎",
      image: "kimura.jpg",
      introduction1: "工学部　機械・航空工学科\n169cm\n69kg\n高津高校",
      introduction2:
        "かの有名な木村政彦と同じ名字を持つ男。通称、鬼の木村。\n笑いの国大阪からやってきたこともあり、笑いに関してはかなり厳しい。\n小さなことには動じない図太さを兼ね備えており、これが彼の魅力の一つであろう。\nこうしたことから末恐ろしい男であることは間違いない。",
      grade: "卒業生（2017年度卒）",
      gradeId: "obg2017",
    },
    {
      id: 15,
      name: "上島 裕実",
      image: "kamishima.jpg",
      introduction1: "中部大学　現代教育学部\n日進西高校",
      introduction2:
        "ゆみちむ。中部大学からやって来た、今流行りの相撲女子。\nハイトーンボイスで繰り出される大相撲トークはその場の者を圧倒する。しかし他の部員は相撲ファンではないため、やや空回りしがち。\n絶賛彼氏募集中とのこと。\nマネージャーがんばって！\n紹介者　木村",
      grade: "卒業生（2017年度卒）",
      gradeId: "obg2017",
    },
    {
      id: 12,
      name: "棚橋 義和",
      image: "tanahashi.jpg",
      introduction1: "主将\n農学部\n175cm\n85kg\n鳴海高校",
      introduction2:
        "いつも部員の想像のはるか上を行く。だけど、ほんとは部活のことを一生懸命考えてる頑張り屋さん。\n空回りしちゃう時もあるよね、わかるよ！\n皆ツンデレだから伝わってないかもしれないけど、そんな棚橋が大好きです∩^ω^∩\n紹介者　魚形",
      grade: "卒業生（2016年度卒）",
      gradeId: "obg2016",
    },
    {
      id: 13,
      name: "右田 雄基",
      image: "migita.jpg",
      introduction1: "主務\n法学部\n東筑高校",
      introduction2:
        "名前\nミギタユウキ\nタイプ\nどく・かくとう\nとくせい\n笑ってごまかす\n何か起こると　とりあえず笑う\nわざ\nはきだす　　食事中に口から何かをよく飛ばす\nさきおくり　物事に対して優柔不断\nオウムがえし　会話のリアクションがワンパターン\nぜったいれいど　ギャグを言うと必ず失敗する\nおくびょうな　性格\n九州地方からはるばるやってきたようだ\nなんでもそつなくこなす相撲部きっての働き者、上記の特徴から罵倒の対象としての座に君臨している。本人はまんざ らでもないようだ。紹介者とコンビを組ませると最強のムードブレイカーとして機能する。\n紹介者　棚橋",
      grade: "卒業生（2016年度卒）",
      gradeId: "obg2016",
    },
    {
      id: 16,
      name: "舘 陽太",
      image: "tachi.jpg",
      introduction1: "経済学部\n170cm\n76kg\n南山高校",
      introduction2:
        "顔、体型、雰囲気は少年そのものだが、時々猟奇的な発言が飛び出る。\n三重県から筋トレしながら通学している。先生によると最近立ち位置が分かってきたらしい。\n話し出したら止まらない。\n独り言はもっと止まらない。\n趣味は作詞とテレビとの会話。\n紹介者　西田",
      grade: "卒業生（2015年度卒）",
      gradeId: "obg2015",
    },
    {
      id: 17,
      name: "壹岐 英明",
      introduction1: "文学部\n175cm\n75kg",
      introduction2:
        "相撲部で唯一の大相撲好きで、よさこいサークルに所属し、アイドルの振りコピを日課とする、悲惨な趣味の方。\nイキポリスと呼ばれ、警察であるかのように振る舞いがちなのでこれまたやばい。\n得意技はイキドリル。\n紹介者　橋本",
      grade: "卒業生（2014年度卒）",
      gradeId: "obg2014",
    },
    {
      id: 18,
      name: "野澤 大輔",
      introduction1: "180cm\n83kg\n五条高校",
      introduction2:
        "顔だけどんどん太っていく強面のわんちゃん。\nたびたび洒落にならない不幸が彼に振りかかってくる。\n柔道経験者で相撲も結構強いが、なぜかいつも全身傷だらけ。\n怖い。\n紹介者　壱岐",
      grade: "卒業生（2014年度卒）",
      gradeId: "obg2014",
    },
    {
      id: 19,
      name: "長合 誠也",
      image: "nagou.jpg",
      introduction1: "経済学部\n174cm\n76kg\n高田高校",
      introduction2:
        "①好きな歌手　斉藤和義、東京事変、藍坊主、the pillows、ＡＫＢ４８、DEPAPEPE\n②好きなマンガ　べしゃり暮らし\n③嫌いなスポーツ　ボーリング",
      introduction3:
        "自分と同じ高田高校出身の相撲部期待の新人。\n相撲部に入った理由は私こと金城先輩に対する愛とノリの良さ。\n彼の喋りの独特のイントネーションはいつも僕達を爆笑の渦に巻き込む。ってかてめーが使ってるのは三重弁じゃねー！！！\nちなみに彼は最近ＡＫＢ４８にハマっているようです。マジきめぇ。\n紹介者　金城",
      grade: "卒業生（2013年度卒）",
      gradeId: "obg2013",
    },
    {
      id: 20,
      name: "岩田 将誉",
      image: "iwata.jpg",
      introduction1: "工学部電気電子情報工学科\n174cm\n85kg\n清風高校",
      introduction2:
        "①好きな歌手　マイケルジャクソン\n②好きな球技　パチンコ\n③休日の過ごし方　ひたすら寝る",
      introduction3:
        "関西人。かつ相撲には到底似合わないようなイケメン。\nしかしその顔からは想像できないような体格、睡眠欲、取得単位数の持ち主。\nそして無類の女好き。\nまた、マイケル・ジャクソンの曲が流れると思わず踊りだしてしまうほどのジャクソンファン！\n授業で彼を見かけたジャクソンファンの女性は快く彼に勉強を教えてあげてください！\n紹介者　長合",
      grade: "卒業生（2012年度卒）",
      gradeId: "obg2012",
    },
    {
      id: 21,
      name: "金城 卓史",
      image: "kanashiro.jpg",
      introduction1: "電気電子情報工学科\n179cm\n82kg\n高田高校",
      introduction2:
        "①好きな女優 杉本彩\n②好きな女性のタイプ 熟女\n③好きなＡＶ 熟女モノ",
      introduction3:
        "彼は入部当初は真面目で愛らしい黒人(黒い人)だったけど、\n彼の特徴は人の不幸に汚い声で爆笑して、髭が時間ごとに伸びていくタフな、さながら身を守るためにギャングに入るゲットーの黒人(黒い人)である。\nそして相撲が派手。そのエンターテイメント性は、ウィルスミスか、クリスタッカーか。\nしかし、高校時代のあだ名はアボリジニ。\n紹介者　河合",
      grade: "卒業生（2012年度卒）",
      gradeId: "obg2012",
    },
    {
      id: 23,
      name: "大場 泉帆",
      image: "ooba.jpg",
      introduction1: "椙山大学教育学部\n椙山高校",
      introduction2:
        "①最近のマイブーム　餃子\n②最近のお気に入りのグループ　THE　BLUE　HEARTS\n③最近の好きなブログ　越中詩郎さんのブログ",
      introduction3:
        "ダイナマイトエンジェル。\nご飯を固く炊いておじやにするのが得意。最近思春期らしく、目の前で着替えると怒る。でもギャグとか言うと許してくれる。たまに壊れたように笑う。\nハートフルエンジェル。\n相撲が好きではない部員の相撲を頑張る原動力……なのかな？\n紹介者　岩田",
      grade: "卒業生（2012年度卒）",
      gradeId: "obg2012",
    },
    {
      id: 24,
      name: "河合 賢吾",
      image: "kawai.jpg",
      introduction1:
        "工学部物理工学科量子エネルギーコース\n180cm\n95kg\n成章高校",
      introduction2:
        "①好きな有名人　みひろ、東野幸治、Kiroro、ハロプロ\n②好きなアーティスト　RHYMESTER、スチャダラパー、メローイエロー、韻踏合組合、BUDDHABRAND、餓鬼レンジャー、GAGLE、サイプレス上野とロベルト吉野、steruss、随喜と真田、NITROMICROPHONEUNDERGROUND、降神、SMRYTRPS、Da.Me.Records、PublicEnemy、RUN DMC、faith、尾崎紀世彦、尾崎豊、チャットモンチー、Kiroro、ハロプロ\n③好きなブランド　LRG",
      introduction3:
        "ボウズだし無駄に体が大きいし顔がテカテカしてるし独り言とかよく言うし、出来れば近づきたくないタイプの人間。\nだけど本当は後輩のナゴーを連れてモーニング娘。のライブに行ったりする寂しがりやのデブ。\n廻しを巻けば（見た目の通り）国公立大学最強説も噂される次期主将。\nマイクを握れば（見た目の通り）ILLでDOPEな黄色いB-BOY。\nそんな彼は体育会常任委員の激務と学業の両立にも励んでいる一流の名大生でもある。\n（紹介者）堤",
      grade: "卒業生（2011年度卒）",
      gradeId: "obg2011",
    },
    {
      id: 25,
      name: "門松 春女",
      image: "kadomatsu.jpg",
      introduction1: "法学部\n鳥取県立砂丘高校",
      introduction2:
        "プリンセス名古屋2010という胡散臭いミスコンのセミファイナリストでありながら、モンハンで主人公の名前を「ベジータ」にするような隠れオタク。\n門松が飲み会に来るとだいたい何かしらの問題が起こります。",
      grade: "卒業生（2011年度卒）",
      gradeId: "obg2011",
    },
    {
      id: 26,
      name: "近藤 弘章",
      image: "kondou.jpg",
      introduction1: "理学部数理学科\n172cm\n88kg\n一宮高校",
      introduction2:
        "①好きな有名人　名大ファミマの芝本さん。\n②好きな曲　JUDY AND MARYの「Over Drive」。\n③実は最近はまっていること　青汁を１日１杯飲むこと。",
      introduction3:
        "相撲部の中でも数少ないまともな人間、近藤さん!\nいつも、同期の野原さんと相撲部の異常さと自分達のまともさについて話している様な気がする…。\nそれに、誰よりも自分に厳しく食べている!!最高にネガティブで最高にカッコいい我らが主将です(^o^)／\n（紹介者）大場",
      grade: "卒業生（2010年度卒）",
      gradeId: "obg2010",
    },
    {
      id: 27,
      name: "堤 一樹",
      image: "tsutsumi.jpg",
      introduction1: "理学部物理学科\n167cm\n69kg\n立川高校",
      introduction2:
        "①趣味　くちごたえ\n②好きな音楽　GRAPEVINE、the pillows、eastern youth、Hermann H. & the Pacemakers、つばき、apnea、ART-SCHOOL、GOING UNDER GROUND、weezer、Jimmy Eat World、Radiohead、Sigur Rós、KEANE、Waking Ashland\n③好きな飲み物　ナンプラー",
      introduction3:
        "インドからガンジーの呪いを持ち帰ってきた。おいはぎにあったり原チャリ盗まれる等様々な不幸に見舞われたが最近呪いを解き放ち見事大学院に合格した。\n口癖は「俺の原チャリ盗んだやつマジ撲殺したる！」\n彼が犯罪者にならないことを願うばかりである。\n（紹介者）野原",
      grade: "卒業生（2010年度卒）",
      gradeId: "obg2010",
    },
    {
      id: 28,
      name: "野原 裕史",
      image: "nohara.jpg",
      introduction1: "経済学部経営学科\n165cm\n63kg\n天白高校",
      introduction2:
        "①好きな映画　狂気の桜\n②好きな言葉　かちこみ\n③趣味　昼ドラ",
      introduction3:
        "もし、この世の中が、「嘘ついたーら、針１０００本飲ーます、指切った。」ってルールだったら、すでに１兆本ぐらい針を飲ませられてるはず…。\nメールを送っても、返信してくる確率は、イチローがヒットを打つ確率ぐらい…。\n相撲とるのは大嫌いと平然と口にする…。\nそんな男！でも、憎めないんだな。\n（紹介者）近藤",
      grade: "卒業生（2010年度卒）",
      gradeId: "obg2010",
    },
    {
      id: 29,
      name: "伊藤 かほり",
      image: "itou.jpg",
      introduction1: "愛知淑徳大学文学部英文学科\n名古屋大学教育学部附属高校",
      introduction2:
        "最近はまっているもの　オーガニック製品\n最近したいこと①　玉ねぎとかの草木染め\n最近したいこと②　沖縄の三線",
      grade: "卒業生（2010年度卒）",
      gradeId: "obg2010",
    },
  ];
  return {
    props: {
      members,
    },
  };
};
