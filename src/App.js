import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';

import Dance from './pages/Pillars/Dance/Dance';
import Culture from './pages/Pillars/Culture/Culture';
import Sports from './pages/Pillars/Sports/Sports';
import Philanthropy from './pages/Pillars/Philanthropy/Philanthropy';

import AKA from './pages/Programs/AKA/AKA';
import MAFFIA from './pages/Programs/MAFFIA/MAFFIA';
import FsaPlus from './pages/Programs/FSA+/FSA+';


function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const subpagePath = hash.substring(1);
      navigate(subpagePath);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dance" element={<Dance />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/philanthropy" element={<Philanthropy />} />

        <Route path="/aka" element={<AKA />} />
        <Route path="/maffia" element={<MAFFIA />} />
        <Route path="/fsa+" element={<FsaPlus />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;