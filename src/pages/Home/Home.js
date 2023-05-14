import React from 'react';
import Hero from '../../components/Hero/Hero';
import FourPillars from './sections/FourPillars';
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
            <h1 className="about-title">About UFFSA</h1>
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

        {/* <FourPillars></FourPillars> */}



        <Cards />

        <section className="events-section">
          <div className="events-container">
            
            <h1 className="title">Events</h1>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F5C52A&ctz=America%2FNew_York&title=UFFSA%20Calendars&showTitle=0&showTz=0&showPrint=0&showTabs=0&src=YWFzdS51ZkBnbWFpbC5jb20&src=dWZmc2EuZGFuY2VAZ21haWwuY29t&color=%23D50000&color=%234285F4"
              className="calendar"
              title="calendar"
            />
          </div>
        </section>

        
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