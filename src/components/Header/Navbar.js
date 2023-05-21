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
                  GET INVOLVED
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/#events" className="navbar-link" onClick={handleMenuToggle}>
                  EVENTS
                </HashLink>
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
            <HashLink smooth to="/#programs" className="navbar-link" onClick={handleMenuToggle}>
              PROGRAMS
            </HashLink>
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
            <HashLink smooth to="/leadership#" className="navbar-link" onClick={handleMenuToggle}>
              LEADERSHIP
            </HashLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink smooth to="/leadership#eboard" className="navbar-link" onClick={handleMenuToggle}>
                  EXECUTIVE BOARD
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/leadership#cboard" className="navbar-link" onClick={handleMenuToggle}>
                  CHAIR BOARD
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/leadership#committees" className="navbar-link" onClick={handleMenuToggle}>
                  EVENT COMMITTEES
                </HashLink>
              </li>
            </ul>
          </li>
          <li className="navbar-dropdown">
            <NavLink className="navbar-link" onClick={handleMenuToggle}>
              MEDIA
            </NavLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink to="/barkada-newsletter#" className="navbar-link" onClick={handleMenuToggle}>
                  BARKADA NEWSLETTER
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink to="/project-lunchbox#" className="navbar-link" onClick={handleMenuToggle}>
                  PROJECT LUNCHBOX
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink to="/archive#" className="navbar-link" onClick={handleMenuToggle}>
                  ARCHIVE
                </HashLink>
              </li>
            </ul>
          </li>

          <li className="navbar-dropdown">
            <HashLink to="/shop#" className="navbar-link" onClick={handleMenuToggle}>
              SHOP
            </HashLink>
            <ul className={`navbar-sublist ${isSmallDevice ? 'navbar-accordion' : ''}`}>
              <li className="navbar-subitem">
                <HashLink smooth to="/shop#fundraising" className="navbar-link" onClick={handleMenuToggle}>
                  FUNDRAISING EVENTS
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/shop#apparel" className="navbar-link" onClick={handleMenuToggle}>
                  APPAREL
                </HashLink>
              </li>
              <li className="navbar-subitem">
                <HashLink smooth to="/shop#philanthropy" className="navbar-link" onClick={handleMenuToggle}>
                  THREADS OF HOPE
                </HashLink>
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