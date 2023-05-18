import React from 'react';
import './PillarRegularActivities.css';


const PillarRegularActivities = ({children}) => {
  return (
    <section className="pillar-regular-activities-section">
      <h1 className="pillar-regular-activities-title title">Regular Activities</h1>
      {/* <div className="pillar-regular-activities-container">
        <p className="pillar-regular-activities-text">
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
      </div> */}
      {children}
    </section>
  );
}

export default PillarRegularActivities;