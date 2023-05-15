import React from 'react';
import Typewriter from "typewriter-effect";
import { HashLink } from 'react-router-hash-link';
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

          <HashLink smooth to="/#involvement" >
            <button className="hero-button">
              Get Involved
            </button>
          </HashLink>
        </div>
      </div>

    </section>
    </>
  );
}

export default Hero;