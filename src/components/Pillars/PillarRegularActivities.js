import React from 'react';
import './PillarRegularActivities.css';


const PillarRegularActivities = ({children}) => {
  return (
    <section className="pillar-regular-activities-section">
      <h1 className="pillar-regular-activities-title title">Regular Activities</h1>
      <div className="pillar-regular-activities-container">
        {children}
      </div>
    </section>
  );
}

export default PillarRegularActivities;