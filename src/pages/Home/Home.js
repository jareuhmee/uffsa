import React from 'react';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import FourPillars from './sections/Pillars/FourPillars';
import ThreePrograms from './sections/Programs/ThreePrograms';
import Events from './sections/Events/Events';

import './Home.css'
import './Flag.css';

import WaveDivider from '../../components/Dividers/Waves';
import { HashLink } from 'react-router-hash-link';

function Home() {
    return (
      <>
        <Hero />
        <WaveDivider />
        
        <About />

        <section className='involvement-section' id="get-involved">

          <div className='involvement-section-text'>
            <h1 className='involvement-section-title title'>
              Get Involved
            </h1>
            <p className='involvement-section-paragraph'>
              Find your home by exploring our  <HashLink smooth to="/#pillars">pillars</HashLink> and  <HashLink smooth to="/#programs">programs</HashLink>, or simply join us at any of our upcoming <HashLink smooth to="/#events">events</HashLink>!
            </p>
          </div>

          <FourPillars />
          <ThreePrograms />
        </section>
        

        <Events />
      </>
    );
}

export default Home;