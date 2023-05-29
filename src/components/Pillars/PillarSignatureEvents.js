import React from 'react';
import './PillarSignatureEvents.css'


const PillarSignatureEvents = ({children}) => {
  return (
    <section className="pillar-signature-events-section">
      <h1 className="pillar-signature-events-title title">
        Signature Events
      </h1>

      <div className='pillar-signature-events-container'>
        {children}
      </div>
    </section>
  );
}

export default PillarSignatureEvents;