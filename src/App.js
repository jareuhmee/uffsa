import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;