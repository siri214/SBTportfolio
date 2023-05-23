import './App.css';
import MainPage from './components/MainPage.js';
import SelfSBT from './components/SelfSBT.js';
import CompanySBT from './components/CompanySBT';
// //import CompanySBT from './components/CompanySBT';
// import SuccessMinting from './components/SuccessMinting'
import List2 from './components/List2.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js'

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  return(
    <div className='cotainer'>
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/selfSBT" element={<SelfSBT/>}/>
            <Route path="/companySBT" element={<CompanySBT/>}/>
            {/* <Route path="/Success" element={<SuccessMinting/>}/> */}
            <Route path="/List2" element={<List2/>}/>
          </Routes>
      </BrowserRouter>
      <div className='App'>
          
      </div>
      <Footer></Footer>
    </div>
    
  )
}

export default App;