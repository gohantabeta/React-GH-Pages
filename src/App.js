import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { About } from "./About";
import  More  from "./More";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import icon from './icon.jpg';


function App() {

  
  return ( 
    <div>
        <BrowserRouter>
        <header>
        <div className='icon_wrapper'>
        <Link to="/Home" className='a'>
        <img src={icon} className='img' alt='icon'/>
        </Link>
        </div>
        <nav className='right_content'>
        <Link to="/Home" className='a'>Home</Link>
        <br />
        <Link to="/About" className='a'>About</Link>
        <br />
        <Link to="/More" className='a'>More</Link>
        <br />
        </nav>
        </header>

        <main>
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/React-GH-Pages" element={<Home />}>
          </Route>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/More" element={<More />}>
          </Route>
          <Route path="*" element={<Page404 />}>
          </Route>
        </Routes>
        </main>

        <footer>
          <p>&copy; 2022. gohantabeta. All rights reserved.</p>
        </footer>
        </BrowserRouter>
      </div>
  
  );
};

export default App;
