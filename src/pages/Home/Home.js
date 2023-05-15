import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from './sections/About';
import FourPillars from './sections/FourPillars';
import './Home.css'
import './Flag.css';

import WaveDivider from '../../components/Dividers/Waves';

function Home() {
    return (
      <>
        <Hero />
        <WaveDivider />
        
        <About />
        <FourPillars />


        <section className="events-section" id="involvement">
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