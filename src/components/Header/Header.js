import React, { useState, useEffect } from 'react';
import './Header.css';
import Navbar from './Navbar';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [toggleLogo, setToggleLogo] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleDeviceSize();
    window.addEventListener("resize", handleDeviceSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleDeviceSize);
    };
  }, []);

  const handleScroll = () => {
    const newScrollPosition = window.pageYOffset;
    setScrollPosition(newScrollPosition);
  };

  const handleDeviceSize = () => {
    const width = window.innerWidth;
    setIsSmallDevice(width <= 768);
  };

  if (scrollPosition > 110 && toggleLogo)
    setToggleLogo(false);
  else if (scrollPosition < 10 && !toggleLogo)
    setToggleLogo(true);

    
  let opacity = toggleLogo ? 1 : 0;

  if (isSmallDevice) {

  }
  else {

  }

  return (
    <>
    <div id="header">
      <Navbar 
        scrollPosition = {scrollPosition}
        isSmallDevice = {isSmallDevice}
        toggleLogo = {toggleLogo}
      />
      
      <div id="background" className="fade-out" style={{ opacity: opacity }}>
        <div id="divider" />
      </div>
    </div>
    </>
  );
}

export default Header;
