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
        <ul className="navbar__list">
          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <HashLink smooth to="/#" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              HOME
            </HashLink>
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
              <li className="navbar__subitem">
                <HashLink smooth to="/#about" activeclassname="navbar__link--active" className="navbar__link">
                  ABOUT
                </HashLink>
              </li>
              <li className="navbar__subitem">
                <HashLink smooth to="/#involvement" activeclassname="navbar__link--active" className="navbar__link">
                  INVOLVEMENT
                </HashLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/#calendar" activeclassname="navbar__link--active" className="navbar__link">
                  CALENDAR
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <HashLink smooth to="/#pillars" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              PILLARS
            </HashLink>
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
              <li className="navbar__subitem">
                <HashLink smooth to="/dance#" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
                  DANCE
                </HashLink>
              </li>
              <li className="navbar__subitem">
                <HashLink smooth to="/culture#" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
                  CULTURE
                </HashLink>
              </li>
              <li className="navbar__subitem">
                <HashLink smooth to="/sports#" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
                  SPORTS
                </HashLink>
              </li>
              <li className="navbar__subitem">
                <HashLink smooth to="/philanthropy#" activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
                  PHILANTHROPY
                </HashLink>
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
          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <NavLink activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              LEADERSHIP
            </NavLink>
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
              <li className="navbar__subitem">
                <NavLink to="/eboard" activeclassname="navbar__link--active" className="navbar__link">
                  EXECUTIVE BOARD
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/cboard" activeclassname="navbar__link--active" className="navbar__link">
                  CHAIR BOARD
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/committees" activeclassname="navbar__link--active" className="navbar__link">
                  EVENT COMMITTEES
                </NavLink>
              </li>
            </ul>
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
                <NavLink to="/gallery" activeclassname="navbar__link--active" className="navbar__link">
                  GALLERY
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/archive" activeclassname="navbar__link--active" className="navbar__link">
                  ARCHIVE
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="navbar__item navbar__dropdown pillars-dropdown">
            <NavLink activeclassname="navbar__link--active" className="navbar__link navbar__dropdown-toggle">
              SHOP
            </NavLink>
            <ul className={`navbar__sublist ${isSmallDevice ? 'navbar__accordion' : ''}`}>
              <li className="navbar__subitem">
                <NavLink to="/fundraising" activeclassname="navbar__link--active" className="navbar__link">
                  FUNDRAISING
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/apparel" activeclassname="navbar__link--active" className="navbar__link">
                  APPAREL
                </NavLink>
              </li>
              <li className="navbar__subitem">
                <NavLink to="/threads-of-hope" activeclassname="navbar__link--active" className="navbar__link">
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
                  <HashLink smooth to="/#">
                        <img src={logo} id="logo" alt="Logo" style={{ width: `${logoWidth}rem` }} />
                    </HashLink>
                </div>
                {list2}
            </nav>
        );
      }

    return (
      <>{navbar}</>
    );
}

export default Navbar;