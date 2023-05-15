import React from 'react';
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import './Hero.css';

const Hero = () => {  
  return (<>
    <section className="hero-section">

      <div className="hero-background"></div>

      <div className="hero">
        <div className="hero-textbox">

          <h1 className="hero-subtitle title">University of Florida</h1>
          <h1 className="hero-title title">Filipino Student Association</h1>
          
          <div className="hero-description">
            <Typewriter className="hero-typewriter"
              options={{
                strings: ['Isang Pamilya.', 'Isang Diwa.', 'Isang Mahal.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <ScrollLink to="events-section" offset={-50} smooth={true} duration={500}>
            <button className="hero-button">
              Get Involved
            </button>
          </ScrollLink>
        </div>
      </div>

    </section>
    </>
  );
}

export default Hero;