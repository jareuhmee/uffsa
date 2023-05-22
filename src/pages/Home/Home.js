import React from 'react';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import FourPillars from './sections/Pillars/FourPillars';
import ThreePrograms from './sections/Programs/ThreePrograms';
import Events from './sections/Events/Events';

import './Home.css'
import './Flag.css';

import WaveDivider from '../../components/Dividers/Waves';

function Home() {
    return (
      <>
        <Hero />
        <WaveDivider />
        
        <About />

        <section className='involvement-section' id="get-involved">
          {/* <h1 className='involvement-section-title title'>
            Get Involved
          </h1>
          <p className='involvement-section-text'>
            Check out our pillars and programs!
          </p> */}


          <FourPillars />
          <ThreePrograms />
        </section>
        

        <Events />
        
        {/* <div id="section-flag">
          <div className="flag-container">
            <div className="triangle"></div>
            <div className="trapezoid top"></div>
            <div className="trapezoid bottom"></div>
          </div>
        </div> */}
      </>
    );
}

export default Home;