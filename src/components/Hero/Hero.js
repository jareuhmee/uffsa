import React from 'react';
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import './Hero.css';

const Hero = () => {  
  return (<>
    <section className="hero" style={{ backgroundColor: 'var(--red)' }}>
      <div className="hero-background"></div>
      <div className="hero-text">
        <h1 className="hero-title">UFFSA</h1>
        <h1 className="hero-subtitle">Filipino Student Association at the University of Florida</h1>
        <br></br><br></br>
        <div className="hero-description">
          A home away from home for anyone, not just Filipinos.
          <Typewriter
            options={{
              strings: ['Isang Pamilya.', 'Isang Diwa.', 'Isang Mahal.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <ScrollLink to="home-pillars" offset={-50} smooth={true} duration={500}>
          <button className="hero-button">
            Get Involved
          </button>
        </ScrollLink>
      </div>

      

    </section>
    </>
  );
}

export default Hero;