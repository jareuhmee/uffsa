import React from 'react';
import backgroundImage from './background.png';
import './Home.css';

function Home() {
  return (
    <>
    <div className="home">
      <div className="overlay">
        <img id="fsapic" src={backgroundImage} />
        <h1 className="title">University of Florida<br />Filipino Student Association</h1>
      </div>
    </div>

    <div className="container">
      <p>
          The Filipino Student Association (FSA) at the University of Florida is a home away from home for anyone, not just Filipinos.
          From the Def Talent Jam dance competition in the fall to the Barrio Fiesta cultural show in the spring, FSA hosts a wide variety of 
          events that immerse its members in Filipino culture, both modern and traditional. In addition to hosting dance and cultural events, 
          FSA also participates in intramural sports such as basketball, flag football, volleyball, tennis, and many more. FSA is also devoted 
          to giving back to the community and to those in need through their philanthropy fundraisers, events, and month-long event, Gawad Kalinga month.<br /><br />
          FSA is dance.<br /><br />
          FSA is culture.<br /><br />
          FSA is sports.<br /><br />
          FSA is philanthropy.<br /><br />
          And above all else, FSA is family.
      </p>
    </div>
    </>
  );
}

export default Home;
