import React from 'react';
import '../../pages/Pillars/Pillars.css';

const PillarHero = ({ backgroundColor, logo, title }) => {  
  return (
    <section className="pillar-hero" style={{ backgroundColor }}>
      <div className='pillar-hero__main'>
        <img className="pillar-hero__logo" src={logo} alt="logo"/>
        <h1 className="pillar-hero__title title">{title}</h1>
      </div>
    </section>
  );
}

export default PillarHero;