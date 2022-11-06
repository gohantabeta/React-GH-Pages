import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { More } from "./More";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import icon from './icon.jpg';
import './App.css';
import './index.css';

function App() {
  return ( 
  <BrowserRouter>
    <div className="App">
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
         
        <Link to="/About">About</Link>
        <br />
        <Link to="/More">More</Link>
        <br />
        <Link to="/Home">Home</Link>
        <br />

        <Routes>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/More">
            <More />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Routes>
         
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
    </BrowserRouter>
  );
}

export default App;
