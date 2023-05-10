import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleLogo, setToggleLogo] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const newScrollPosition = window.pageYOffset;
    setScrollPosition(newScrollPosition);
  };

  if (scrollPosition > 110 && toggleLogo) {
    setToggleLogo(false);
  } else if (scrollPosition < 10 && !toggleLogo) {
    setToggleLogo(true);
  }

  let logoWidth = toggleLogo ? 6 : 4;
  let opacity = toggleLogo ? 1 : 0;

  return (
    <>
    <div id="header">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link navbar__brand">
              ABOUT
            </Link>
          </li>
          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <NavLink activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              PILLARS
            </NavLink>
            <ul className="navbar__sublist">
              <li className="navbar__subitem">
                <NavLink to="/dance" activeclassname="navbar__link--active" className="navbar__link">
                  DANCE
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/culture" activeclassname="navbar__link--active" className="navbar__link">
                  CULTURE
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/sports" activeclassname="navbar__link--active" className="navbar__link">
                  SPORTS
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/philanthropy" activeclassname="navbar__link--active" className="navbar__link">
                  PHILANTHROPY
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <NavLink activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              PROGRAMS
            </NavLink>
            <ul className="navbar__sublist">
              <li className="navbar__subitem">
                <NavLink to="/aka" activeclassname="navbar__link--active" className="navbar__link">
                  AKA / RAKA
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/maffia" activeclassname="navbar__link--active" className="navbar__link">
                  MAFFIA
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/fsa+" activeclassname="navbar__link--active" className="navbar__link">
                  FSA+
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} id="logo" alt="Logo" style={{ width: `${logoWidth}rem` }} />
          </Link>
        </div>

        <ul className="navbar__list">
          <li className="navbar__item navbar__dropdown">
            <NavLink to="/contact" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              EVENTS
            </NavLink>
          </li>
          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <NavLink activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              MEDIA
            </NavLink>
            <ul className="navbar__sublist">
              <li className="navbar__subitem">
                <NavLink to="/barkada" activeclassname="navbar__link--active" className="navbar__link">
                  BARKADA NEWSLETTER
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/project-lunchbox" activeclassname="navbar__link--active" className="navbar__link">
                  PROJECT LUNCHBOX
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/archive" activeclassname="navbar__link--active" className="navbar__link">
                  ARCHIVE
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="navbar__item navbar__dropdown">
            <NavLink to="/merch" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              MERCHANDISE
            </NavLink>
          </li>
        </ul>
      </nav>
      

      <div id="background" className="fade-out" style={{ opacity: opacity }}>
        <div id="divider" />
      </div>
    </div>
    </>
  );
}

export default Header;
