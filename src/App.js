import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { More } from "./More";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import icon from './icon.jpg';
//import './App.css';
//import './index.css';
import './style.css';
//import './about.css';

function App() {
  return ( 

    <div className="App">
        <BrowserRouter>
        <header>
        <div className='icon_wrapper'>
        <img src={icon} className='img' alt='icon'/>
        </div>
        <nav className='right_content'>
        <Link to="/About" className='a'>About</Link>
        <br />
        <Link to="/More" className='a'>More</Link>
        <br />
        <Link to="/Home" className='a'>Home</Link>
        <br />
        </nav>
        </header>
        <Routes>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/More" element={<More />}>
          </Route>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="*" element={<Page404 />}>
          </Route>
        </Routes>
        </BrowserRouter>
      
      <footer>
        <p>&copy; 2022. gohantabeta. All rights reserved.</p>
      </footer>
    </div>
  
  );
}

export default App;
