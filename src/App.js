import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { About } from "./About";
import  More  from "./More";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import icon from './img/icon.jpg';


function App() {

  
  return ( 
    <div>
        <BrowserRouter>
        <header>
        <div className='icon_wrapper'>
        <Link to="/React-GH-Pages/Home" className='a'>
        <img src={icon} className='img' alt='icon'/>
        </Link>
        </div>
        <nav className='right_content'>
        <Link to="/React-GH-Pages/Home" className='a'>Home</Link>
        <br />
        <Link to="/React-GH-Pages/About" className='a'>About</Link>
        <br />
        <Link to="/React-GH-Pages/More" className='a'>More</Link>
        <br />
        </nav>
        </header>

        <main>
        <Routes>
          <Route path="/React-GH-Pages/Home" element={<Home />}>
          </Route>
          <Route path="/React-GH-Pages" element={<Home />}>
          </Route>
          <Route path="/React-GH-Pages/About" element={<About />}>
          </Route>
          <Route path="/React-GH-Pages/More" element={<More />}>
          </Route>
          <Route path="*" element={<Page404 />}>
          </Route>
        </Routes>
        </main>

        <footer>
          <p>&copy; 2023. gohantabeta. All rights reserved.</p>
        </footer>
        </BrowserRouter>
      </div>
  
  );
};

export default App;
