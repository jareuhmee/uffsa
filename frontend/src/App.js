import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';

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
import WebInterns from './pages/Programs/WEB INTERNS/WebInterns';

import Leadership from './pages/Leadership/Leadership';

import Media from './pages/Media/Media'

import Shop from './pages/Shop/Shop';
import OrderPage from './pages/Shop/sections/order-pages/OrderPage';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      const subpagePath = hash.substring(1);
      if (subpagePath.startsWith('/')) {
        navigate(subpagePath);
      }
    }
  }, [navigate]);

  return null;
}

const AUTH_PATHS = ['/login', '/signup'];

function AppContent() {
  const location = useLocation();
  const isAuthPage = AUTH_PATHS.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dance" element={<Dance />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/philanthropy" element={<Philanthropy />} />

        <Route path="/aka" element={<AKA />} />
        <Route path="/maffia" element={<MAFFIA />} />
        <Route path="/fsa+" element={<FsaPlus />} />
        <Route path="/web-interns" element={<WebInterns />} />

        <Route path="/leadership" element={<Leadership />} />

        <Route path="/media" element={<Media />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<OrderPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;