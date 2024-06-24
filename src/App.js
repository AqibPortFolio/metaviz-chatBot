
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';


function App() {
  return (
  <>
 <BrowserRouter>
<Header/>
 <Routes>
<Route path='/' element={<Hero/>}/>

 </Routes>

<Footer/>
 </BrowserRouter>
  </>
  );
}

export default App;
