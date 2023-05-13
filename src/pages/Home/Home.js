import React from 'react';
import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';
import './Home.css'
import './Flag.css';

import WaveDivider from '../../components/Dividers/Waves';

function Home() {
    return (
      <>
        <Hero />
        <WaveDivider></WaveDivider>
        

        <section className="about-section" id="about">
          <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
              The Filipino Student Association (FSA) at the University of Florida is a home away from home for anyone, not just Filipinos. 

              From the Def Talent Jam dance competition in the fall to the Barrio Fiesta cultural show in the spring, FSA hosts a wide variety of 
              events that immerse its members in Filipino culture, both modern and traditional. In addition to hosting dance and cultural events, 
              FSA also participates in intramural sports such as basketball, flag football, volleyball, tennis, and many more. FSA is also devoted 
              to giving back to the community and to those in need through their philanthropy fundraisers, events, and month-long event, Gawad 
              Kalinga month. 

              FSA is dance. 
              FSA is culture. 
              FSA is sports. 
              FSA is philanthropy. 

              And above all else, FSA is family.
            </p>
          </div>
        </section>



        <div id="home-pillars">
          <h1 className='title'> Our Pillars</h1>
          <Cards />

        </div>

        
        <div id="section-flag">
          <div className="flag-container">
            <div className="triangle"></div>
            <div className="trapezoid top"></div>
            <div className="trapezoid bottom"></div>
          </div>
        </div>
      </>
    );
}

export default Home;