import {Routes, Route} from 'react-router-dom';
import Landing from './pages/landing-page';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />

    </Routes>
    </>
  );
}

export default App;
