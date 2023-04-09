import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Front from './pages/Front/Front';
import About from './pages/About/About';
import Room from './pages/Room/Room';
import Services from './pages/Services/Services';
import Career from "./pages/Career/Career"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/Space-agency' element={<Front/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/news' element={<Room/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/career' element={<Career/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
