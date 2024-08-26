import React from 'react';
import './PillarDescription.css';

const PillarDescription = ({ backgroundColor, content, style}) => {  
  return (
    <section className="pillar-description-section" style={{ backgroundColor }}>
       <p className="pillar-description-content" style={style}>
        {content}
      </p>
    </section>
  );
}

export default PillarDescription;