import React from 'react';
import './PillarDescription.css';

const PillarDescription = ({ backgroundColor, content}) => {  
  return (
    <section className="pillar-description-section" style={{ backgroundColor }}>
       <p className="pillar-description-content">
        {content}
      </p>
    </section>
  );
}

export default PillarDescription;