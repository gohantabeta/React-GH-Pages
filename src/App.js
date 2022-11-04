import icon from './icon.jpg';
import './App.css';
import './index.css';

function App() {
  return (
    <div>
      <header>
        <div className='icon_wrapper'>
        <a href='./App.js'>
        <img src={icon} className='img' alt='icon'/>
        </a>
        </div>
        <nav className='right_content'>
      <a href='./App.js'>Home</a>
      <a href='./index.js'>About</a>
    </nav>
      </header>
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
      <footer>
        <p>&copy; 2022. gohantabeta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
