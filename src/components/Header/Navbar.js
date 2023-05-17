import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.png';

function Navbar(props) {
    const { isSmallDevice, toggleLogo } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    let list1 = (
        <ul className="navbar-list">
          <li className="navbar-dropdown">
            <HashLink smooth to="/#" className="navbar-link" onClick={handleMenuToggle}>
              HOME
            </HashLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink smooth to="/#about" className="navbar-link" onClick={handleMenuToggle}>
                  ABOUT
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/#involvement" className="navbar-link" onClick={handleMenuToggle}>
                  INVOLVEMENT
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/#calendar" className="navbar-link" onClick={handleMenuToggle}>
                  CALENDAR
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="navbar-dropdown">
            <HashLink smooth to="/#pillars" className="navbar-link" onClick={handleMenuToggle}>
              PILLARS
            </HashLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink smooth to="/dance#" className="navbar-link" onClick={handleMenuToggle}>
                  DANCE
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/culture#" className="navbar-link" onClick={handleMenuToggle}>
                  CULTURE
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/sports#" className="navbar-link" onClick={handleMenuToggle}>
                  SPORTS
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/philanthropy#" className="navbar-link" onClick={handleMenuToggle}>
                  PHILANTHROPY
                </HashLink>
              </li>
            </ul>
          </li>

          <li className="navbar-dropdown">
            <NavLink className="navbar-link" onClick={handleMenuToggle}>
              PROGRAMS
            </NavLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink to="/aka#" className="navbar-link" onClick={handleMenuToggle}>
                  AKA / RAKA
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink to="/maffia#" className="navbar-link" onClick={handleMenuToggle}>
                  MAFFIA
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink to="/fsa+#" className="navbar-link" onClick={handleMenuToggle}>
                  FSA+
                </HashLink>
              </li>
            </ul>
          </li>
        </ul>
      );
    
      let list2 = (
        <ul className="navbar-list">
          <li className="navbar-dropdown">
            <NavLink className="navbar-link" onClick={handleMenuToggle}>
              LEADERSHIP
            </NavLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <NavLink to="/eboard" className="navbar-link" onClick={handleMenuToggle}>
                  EXECUTIVE BOARD
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/cboard" className="navbar-link" onClick={handleMenuToggle}>
                  CHAIR BOARD
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/committees" className="navbar-link" onClick={handleMenuToggle}>
                  EVENT COMMITTEES
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="navbar-dropdown">
            <NavLink className="navbar-link" onClick={handleMenuToggle}>
              MEDIA
            </NavLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <NavLink to="/barkada" className="navbar-link" onClick={handleMenuToggle}>
                  BARKADA NEWSLETTER
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/project-lunchbox" className="navbar-link" onClick={handleMenuToggle}>
                  PROJECT LUNCHBOX
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/gallery" className="navbar-link" onClick={handleMenuToggle}>
                  GALLERY
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/archive" className="navbar-link" onClick={handleMenuToggle}>
                  ARCHIVE
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="navbar-dropdown">
            <NavLink className="navbar-link" onClick={handleMenuToggle}>
              SHOP
            </NavLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <NavLink to="/fundraising" className="navbar-link" onClick={handleMenuToggle}>
                  FUNDRAISING
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/apparel" className="navbar-link" onClick={handleMenuToggle}>
                  APPAREL
                </NavLink>
              </li>
              <li className="navbar-subitem">
                <NavLink to="/threads-of-hope" className="navbar-link" onClick={handleMenuToggle}>
                  THREADS OF HOPE
                </NavLink>
              </li>
            </ul>
          </li>
          
        </ul>
      );

      let logoWidth = toggleLogo ? 6 : 3;
      let navbar;

      if (isSmallDevice) {
        navbar = (
            <nav className="navbar">
                <div className="navbar-logo">
                    <HashLink smooth to="/#">
                        <img src={logo} id="logo" alt="Logo" style={{ width: '3rem' }} />
                    </HashLink>
                </div>

                <div className="navbar-menu-toggle" onClick={handleMenuToggle}>
                  <div className={`navbar-menu-icon ${isMenuOpen ? 'active' : ''}`} />
                </div>

                <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`} id="linkList">
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
                  <HashLink smooth to="/#">
                      <img src={logo} id="logo" alt="Logo" style={{ width: `${logoWidth}rem` }} />
                  </HashLink>
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