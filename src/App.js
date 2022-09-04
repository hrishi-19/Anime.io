import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './pages/landing-page';
import Home from './pages/home';
import AnimePage from './pages/anime';
import Header from './components/header'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='home' element={<Home />}/>
      <Route path='anime/:mal_id' element={<AnimePage/>} onUpdate={() => window.scrollTo(0, 0)}/>
      

    </Routes>
    </>
  );
}

export default App;
