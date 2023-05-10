import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar(props) {
    const { isSmallDevice, toggleLogo } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    let list1 = (
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
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
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
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
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
      );
    
      let list2 = (
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
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
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
      );

      let logoWidth = toggleLogo ? 6 : 4;

      let navbar;

      if (isSmallDevice) {
        navbar = (
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo" style={{ width: '3rem' }} />
                    </Link>
                </div>

                <div className="navbar__menu-toggle" onClick={handleMenuToggle}>
                  <span className="navbar__menu-icon"></span>
                </div>

                <ul className={`navbar__list ${isMenuOpen ? 'active' : ''}`} id="linkList">
                  {list1.props.children}
                  {list2.props.children}
                </ul>
            </nav>
        );
      }
      else {
        navbar = (
            <nav className="navbar">
                {list1}
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo" style={{ width: `${logoWidth}rem` }} />
                    </Link>
                </div>
                {list2}
            </nav>
        );
      }

    return (
        <>
            {navbar}
        </>
    );
}

export default Navbar;