import React from 'react';
import './Home.css'
import './Flag.css';

import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';

import backgroundImage from './background.png';

function Home() {
    return (
      <>
      <Hero 
        color = "var(--red)"
        background = {backgroundImage}
        title = "Filipino Student Association"
        subtitle = "at the University of Florida"
        text = "A home away from home for anyone, not just Filipinos."
      >
        <p>Isang Pamilya. Isang Diwa. Isang Mahal.</p>
      </Hero>
      
      <div id="about">
        <h1 className="title">About Us</h1>
        <br></br>
        <p>
          The Filipino Student Association (FSA) at the University of Florida is a home away from home for anyone, not just Filipinos. <br/><br/>

          From the Def Talent Jam dance competition in the fall to the Barrio Fiesta cultural show in the spring, FSA hosts a wide variety of 
          events that immerse its members in Filipino culture, both modern and traditional. In addition to hosting dance and cultural events, 
          FSA also participates in intramural sports such as basketball, flag football, volleyball, tennis, and many more. FSA is also devoted 
          to giving back to the community and to those in need through their philanthropy fundraisers, events, and month-long event, Gawad 
          Kalinga month. <br/><br/>

          FSA is dance.<br/><br/>
          FSA is culture.<br/><br/>
          FSA is sports.<br/><br/>
          FSA is philanthropy.<br/><br/>

          And above all else, FSA is family.
        </p>
      </div>

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