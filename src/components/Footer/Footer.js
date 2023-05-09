import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/uffsa" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/groups/UFFSA" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/uffsa" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://discord.gg/eHrQk9vfGr" target="_blank" rel="noreferrer"><FaDiscord/></a>
        <a href="https://www.youtube.com/@UFFSA" target="_blank" rel="noreferrer"><FaYoutube/></a>
      </div>
    </footer>
  );
}

export default Footer;
