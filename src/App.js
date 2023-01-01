
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';

import Top from './Components/Top-bar/Top';
import Nav from './Components/_Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Comic from './Components/Comic/Comic'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Top/>
      <Nav/>
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/comic' element={<Comic/>}/>
        </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
