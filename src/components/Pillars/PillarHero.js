import React from 'react';
import './PillarHero.css';

const PillarHero = ({ backgroundColor, logo, title }) => {  
  return (
    <section className="pillar-hero-section" style={{ backgroundColor }}>
      <img className="pillar-hero-logo" src={logo} alt="logo"/>
      <h1 className="pillar-hero-title title">{title}</h1>            
    </section>
  );
}

export default PillarHero;