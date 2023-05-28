import React from 'react';
import Typewriter from "typewriter-effect";
import { HashLink } from 'react-router-hash-link';
import './Hero.css';

const Hero = () => {  
  return (<>
    <section className="hero-section">

      <div className="hero-background" />

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

          <div className='hero-buttons'>
            <HashLink smooth to="/#events">
              <button className="hero-button hero-button-primary">
                Events
              </button>
            </HashLink>
            
            <a href='https://linktr.ee/uffsa' target="_blank" rel="noopener noreferrer">
              <button className="hero-button">
                Linktree
              </button>
            </a>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}

export default Hero;