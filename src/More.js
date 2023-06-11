import React from 'react';
import MoreList from './MoreList';
import './styls/More.css'
import SECCON from './img/SECCON.JPG';
import Hackz from './img/Hackz.JPG';
import CTF from './img/CTFBE.JPG';
import JPHACKS from './img/JPHACKS.JPG';
import OrenoCPP from './img/OrenoCPP.JPG';
import TwiGram from './img/twigram.png';
import CACloudHandsOn from './img/CACloudHandsOn.PNG';
import LaravelGHPages from './img/LaravelGHPages.PNG';
import intern from './img/intern.PNG';
import intern2 from './img/intern2.JPEG';
import HTMLGHPages from './img/HTMLGHPages.PNG';
import ReactGHPages from './img/ReactGHPages.PNG';
import Harunankaneeyo from './img/Harunankaneeyo.PNG';
import UnderConstruction from './img/UnderConstruction.JPEG';
import HTMLGHPagesGit from './img/HTMLGHPagesGit.PNG';
import HackzAro from './img/HackzAro.PNG';
import ReactIcon from './img/ReactIcon.PNG';
import EKS from './img/EKS.PNG';





function More (){
  const moreItem =[ {
    date:'2022/6/18',
    name: 'ハックツハッカソン-イクチオカップ-',
    image: Hackz,
    introImage:OrenoCPP,
    about:'初めてのハッカソンに出場しました！C++に憑りつかれた先輩のもとに6人程集い、チーム「俺のCppがこんなに可愛いわけがない」を結成してサーバーからクライアントGUIまで全てをC++のみで記述したという珍妙な物を作りました。用意された開発テーマ「めがはなせない」にそって、メガと呼ぶにふさわしい大声もしくは高周波の声でないと相手に伝わらないボイスチャットを開発しました。',
    detail:'日程が2日間と短かったのもあって出来たことは少なかったものの、ハッカソンの雰囲気、チーム開発の雰囲気を十分に体験できました。',
    git:<a href='https://github.com/hackz-hackathon-ichthyo/oreno-cpp-ga-konnani-kawaii-wakeganai' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>github</i></h2></a>,
    url:<a href='https://topaz.dev/projects/5c7ca1ff2769aeff60bb' target='_blank'><h2>作品紹介ページ</h2></a>
  },{
    date:'2022/9~10',
    name: 'この自己紹介ページをHTML/CSSで作成しました',
    image: HTMLGHPages,
    introImage: HTMLGHPagesGit,
    about:'大学の近くでネイティブアプリ開発をしている会社でバイトをしたくて、申し込む前にポートフォリオサイト代わりにこちらのページをHTML/CSSで作成しGitHub-Pagesで公開しました!',
    detail:'過去に学内で先輩がHTML/CSSページ作成のハンズオンを行った際の優れた資料があったおかげでデザイン・機能ともに初めてにしてはよくできたと思える完成度になりました。が、バイト先にしたいと考えていた会社の経営状態が悪くなったそうで申し込みすらせぬままに断念することになってしまいました...今後バイトを申し込むときに生きると信じております！',
    url:<a href='https://gohantabeta.github.io/index.html' target='_blank'><h2>HTML/CSSのページ</h2></a>
  },{
    date:'2022/10/10',
    name: 'SECCON Beginners',
    image: SECCON,
    introImage:CTF,
    about:'SECCON、セキュリティコンテストの初心者向けイベントに参加しました！セキュリティ競技CTFについての説明とWeb,Reversing,Cryptoの３ジャンルに関する初歩的な講義を受けたのち、ミニCTFに挑戦しました。',
    detail:'残念ながらミニCTFの成績は振るわずギリギリこのダッシュボードに乗れなかったものの、CTFの楽しさを味わえました。',
    url:<a href='https://www.seccon.jp/2022/beginners_workshop/seccon_beginners_2022_3.html' target='_blank'><h2>開催レポート</h2></a>
  },{
    date:'2022/10/15',
    name: 'JPHACKS',
    image: JPHACKS,
    introImage:TwiGram,
    about:'2回目のハッカソンに全員B1のチーム「131」(13でB)として出場しました！オンラインでしたが開発期間が2週間超と初めてのハッカソンの2日間より格段に長く、より多くのことができたものの、初めて触る分野であるReactやNodeの学習の順番や方法の効率が非常に悪く、不必要にてこずってしまいました。',
    detail:'時間の浪費を削減すると銘打ち、TwitterやInstagram、Discordなどの複数のSNSを一括して見ることが出来るものを作りました。化け物のようなチームメンバーが居たおかげでTwitterAPI、InstagramAPI、ログインのためのサーバーサイドとクライアントサイド間のやりとり等の部分がある。しっかりとした制作物が出来ました。',
    git:<a href='https://github.com/jphacks/E_2205' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>github</i></h2></a>,
    url:<a href='https://jphacks.com/2022/detail/' target='_blank'><h2>大会概要</h2></a>
  },{
    date:'2022/10~11',
    name: 'この自己紹介ページをHTML/CSSのプレーンなものからReactに移植しました!',
    image: ReactGHPages,
    introImage: ReactIcon,
    about:'この自己紹介ページをHTML/CSSのみで作ったのが思いのほか簡単にできてしまい不完全燃焼だったのと、JPHACKSの準備でReactを勉強したのにチーム内の担当的にあまり触れずやはり不完全燃焼だったのもあって、ReactとJSのページを作り移植しました',
    detail:'実際に触ってみることでReactとJSにより親しむことができました。JPHACKSでTypeScriptに苦しんだためTypeScriptではなくJavaScriptで書いたのですが、調べれば調べるほど、人の話を聞けば聞くほどTypeScriptがよさそうであるので何とか克服してソースコードをTSで書き直したいです。',
    git:<a href='https://github.com/gohantabeta/React-GH-Pages/tree/master' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>github</i></h2></a>,
    url:<a href='https://gohantabeta.github.io/React-GH-Pages/' target='_blank'><h2>このページのホーム</h2></a>
  },{
    date:'2023/2/25',
    name: 'CyberAgentクラウドネイティブハンズオン',
    image: CACloudHandsOn,
    introImage: EKS,
    about: 'CyberAgent主催のクラウドネイティブハンズオンに参加しました！対面のイベントでAWSのECSとEKS上にそれぞれサービスをデプロイしてこれらに触れてみよう、知ろう、という内容でした。',
    detail:'クラウドは費用等が気になり敬遠していたのですが、今回のハンズオンを通して魅力と簡単な使い方を知ることができました。また、Dockerすらまともに利用したことがなかったのですが、今回のイベントを通してコンテナ技術の概観と活用法を知ることができました。',
    url:<a href='https://cyberagent.connpass.com/event/271870/' target='_blank'><h2>イベント説明</h2></a>
  },{
    date:'2023/3/13~15',
    name: 'ハックツハッカソン-アロカップ-',
    image: HackzAro,
    introImage: Harunankaneeyo,
    about:'3回目のハッカソンに同会生3人のチーム「春なんかねぇよ」(ホワイトデーでも参加できる人しかいなかったためこのチーム名)として出場しました！初めての技術に触れようということでバックをFastAPI、フロントをReact、デプロイ先をハッカソンのスポンサーが提供してくれたAzureにし、自動デプロイのCI/CDもするという今思えばすこし挑戦的すぎた技術を使い、挑みました。用意された開発テーマ「ふきょう」にそって、ハッカソンの布教のためにチームを組むのに使えるマッチングアプリを作ろうとしました。',
    detail:'事前準備にも相当力を入れて臨んだのですが、Azureへのデプロイで何度も躓いた上に、Azureへのデプロイに失敗した時の代替案も用意しておらずそちらに切り替えるという踏ん切りもなかなかつけられなかったため、最終発表では非常に半端な形で見せることになってしまいました。',
    git:<a href='https://github.com/koyo343/aro_front/tree/main' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>フロントエンドのgithub</i></h2></a>,
    git:<a href='https://github.com/koyo343/aro_back' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>バックエンドのgithub</i></h2></a>,
    url:<a href='https://topaz.dev/projects/c15dabddc753be299585' target='_blank'><h2>作品紹介ページ</h2></a>
  },{
    date:'2023/4/1',
    name: '長期インターンに参加しました',
    image: intern,
    introImage: intern2,
    about: '昨年の10月、希望のアルバイト先がオフィスを大学周辺から撤退させて以降、長らく有給長期インターンを探していたのですが、今年1月に遂に株式会社アソウ・アルファのエンジニア長期インターンに採用され、本日から勤務を開始しました。',
    detail:'実際に技術を使うことに関して自分の中ではハッカソンが大きな一つだったのですが、その期間の短さや中途半端なチーム開発のために生じる混乱により本当に身についたか自信が持てないものが多々ありました。一方で今参加しているプロジェクトでは期間も十分にある上に要件定義書やチーム開発する上での決めごとがしっかりとされており、やっていることが確かに身についているように感じてたのしいです。また、ハッカソンや個人開発では見なかった開発・コミュニケーション手法自体が大変参考になります。',
    url:<a href='https://01intern.com/job/4096.html' target='_blank'><h2>長期インターン募集ページ</h2></a>
  },{
    date:'2023/6/11',
    name: 'この自己紹介ページを動的サイトに移植する作業を開始しました。',
    image: UnderConstruction,
    introImage: LaravelGHPages,
    about: '現在長期インターンにて利用しているLaravel・PHP・PGSQL・DockerCompose等技術の更なる理解・定着と興味の追求を願ってこのページを自宅にあるPCで動的サイトとして動かせるように移植・増築作業を開始しました。',
    detail:'目標は第一段階として静的サイトを自宅PCから公開、第二段階として動的サイトにした静的サイトと同内容のものを自宅PCから公開。以降の展望として3DやGame等の他の興味があり作成してるものも同じサイトで公開したり、特に意味がなくてもいろんな機能を盛り込んで行きたいと目論んでおります',
  },
  ];
  return(
    <div className='wrapper'>
      <div className='content_wrapper'>
          <h1>参加したイベントなど</h1>
          <div className='thumb_container'>
          {moreItem.map((moreItem,index)=>{
          return(
          <MoreList
          date={moreItem.date}
          name={moreItem.name}
          image={moreItem.image}
          about={moreItem.about}
          introImage={moreItem.introImage}
          detail={moreItem.detail}
          git={moreItem.git}
          url={moreItem.url}
          key={index}
          />
          );
          }
          )}
          </div>
      </div>
    </div>
  );
}

export default More;