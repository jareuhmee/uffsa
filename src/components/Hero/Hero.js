import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import './Hero.css'

const Hero = ({ color, background, title, subtitle, text, button, link, children }) => {
  let heroButton;
  let heroText;

  if (button) {
    heroButton = (
      <ScrollLink to={link} offset={-50} smooth={true} duration={500}>
        <button className="hero-button">
          {button}
        </button>
      </ScrollLink>
    );
  }

  if (text) {
    heroText = (
      <div className="hero-text">{text}</div>
    );
  }

  
  return (
    <section className="hero" style={{ backgroundColor: color }}>
      <div className="hero-background" style={{ backgroundImage: `url(${background})` }}></div>
      <h1 className="hero-title">{title}</h1>
      <h1 className="hero-subtitle">{subtitle}</h1>
      <br /><br />
      {heroText}
      {heroButton}
      {children}
    </section>
  );
}

export default Hero;