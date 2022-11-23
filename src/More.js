import React from 'react';
import MoreList from './MoreList';
import './styls/More.css'
import SECCON from './img/SECCON.JPG';
import Hackz from './img/Hackz.JPG';
import CTF from './img/CTFBE.JPG';
import JPHACKS from './img/JPHACKS.JPG';
import OrenoCPP from './img/OrenoCPP.JPG';
import TwiGram from './img/twigram.png';

function More (){
  const moreItem =[ {
    date:'2022/6/18',
    name: 'ハックツハッカソン',
    image: Hackz,
    introImage:OrenoCPP,
    about:'初めてのハッカソンに出場しました！C++に憑りつかれた先輩のもとに6人程集い、チーム「俺のCppがこんなに可愛いわけがない」を結成してサーバーからクライアントGUIまで全てをC++のみで記述したという珍妙な物を作りました。用意された開発テーマ「めがはなせない」にそって、メガと呼ぶにふさわしい大声もしくは高周波の声でないと相手に伝わらないボイスチャットを開発しました。',
    detail:'日程が2日間と短かったのもあって出来たことは少なかったものの、ハッカソンの雰囲気、チーム開発の雰囲気を十分に体験できました。',
    git:<a href='https://github.com/hackz-hackathon-ichthyo/oreno-cpp-ga-konnani-kawaii-wakeganai' target='_blank' className='git'><h2><i className='fa-brands fa-github fa-lg'>github</i></h2></a>,
    url:<a href='https://topaz.dev/projects/5c7ca1ff2769aeff60bb' target='_blank'><h2>作品紹介ページ</h2></a>
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