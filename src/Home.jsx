import './styls/index.css'

export const Home = () => {
    return (
      <div>
        <main className='wrapper'>
        <h1 className='title'>gohantabeta</h1>
        <p className='desc'>gohantabetaのホームページへようこそ！</p>
        <div className='social'>
          <a href='https://github.com/gohantabeta' target='_blank' className='git'>
            <i className='fa-brands fa-github fa-lg'></i>
          </a>
          <a href='https://twitter.com/gohantabetemita' target='_blank' className='twt'>
        <i className='fa-brands fa-twitter fa-lg'></i>
      </a>
        </div>
      </main>
      </div>
    );
  };