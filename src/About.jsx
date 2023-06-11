import coffee from './img/coffee.JPG';
import music from './img/headphone.jpg';
import star from './img/star_photo.JPG';
import bird from './img/okame.JPG';
import './styls/about.css';

export const About = () => {
  return (
    <div>
      <main className="wrapper">
        <div className="content_wrapper">
          <h1>gohantabeta</h1>
          <h2>自己紹介</h2>
          <p>初めまして！B1のごはんです！</p>
          <p>大学入学以降かねてから興味のあったプログラミングに勤しみ、課題に終われる日々を送っています。</p>
          <p>一番興味があるのはゲーム制作なのですが、ハッカソンなどに積極的に参加してWebに傾いたり、セキュリティイベントに参加してセキュリティにも傾いたりといろいろ楽しんでおります。</p>
          <p>まだまだどの分野も初心者ですが、何卒よろしくお願いします。</p>

          <h2>使用技術</h2>
          <p>C/C++，C#，TypeScript，JavaScript</p>
          <p>HTML，CSS</p>
          <p>React，Node，Siv3D</p>
          <p>Unity</p>
          <p>＊いずれもハッカソン等で使用したことがある程度で初心者です</p>

          <h2>プログラミング以外の趣味</h2>
          <p>
            音楽を聴くのが好きです。
            方向性は完全に雑食でヘビメタからクラシックまで基本的になんでも気に入って聴き惚れます。最近はLiveに行ってみたい、ハイレゾ音源を買いたい、いいイヤホンを買いたいと音楽系の欲にまみれています。
          </p>
          <p>
            先日、親戚から立派な一眼レフを格安で譲り受け写真撮影にもハマりました。
            最近は星空撮影に特別はまっていて、１～２週に１度ほどでカメラ片手に夜な夜な徘徊しています。
          </p>
          <div className="img_container">
            <img src={music} alt="音楽が好き" />
            <img src={star} alt="写真が好き" />
          </div>

          <h2>好きなもの</h2>
          <p>鳥</p>
          <p>実家でオカメインコを飼っています。
            実家のインコがあまりにも可愛いもので、共通点の多い鳥全般から可愛いところを探すのが得意になりました。
              可愛いとこをみつけて毎日どんどん好きになって行ってます。</p>
          <p>コーヒー</p>
          <p>家で豆を挽いて様々な抽出方法で嗜み、1L/2日ほど飲んでます。</p>

          <div class="img_container">
            <img src={bird} alt="鳥が好き" />
            <img src={coffee} alt="コーヒーが好き" />
          </div>

          <h2>経歴</h2>
          <p>福岡中央高校　普通科 卒</p>
          <p>九州工業大学 情報工学部 在学</p>
        </div>
      </main>
    </div>
  );
};