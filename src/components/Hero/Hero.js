import React from 'react';
import './Hero.css'

const Hero = ({ color, background, title, subtitle, text }) => {
    return (
      <section className="hero" style={{ backgroundColor: color }}>
        <div className="hero-background" style={{ backgroundImage: `url(${background})` }}></div>
        <h1 className="hero-title">{title}</h1>
        <h1 className="hero-subtitle">{subtitle}</h1>
        <br />
        <p className="hero-text">{text}</p>
      </section>
    );
}

export default Hero;