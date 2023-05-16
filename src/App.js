import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';

import Dance from './pages/Pillars/Dance/Dance';
import Culture from './pages/Pillars/Culture/Culture';
import Sports from './pages/Pillars/Sports/Sports';
import Philanthropy from './pages/Pillars/Philanthropy/Philanthropy';

import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/philanthropy" element={<Philanthropy />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;