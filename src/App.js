
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';

import Top from './Components/Top-bar/Top';
import Nav from './Components/_Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Top/>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
