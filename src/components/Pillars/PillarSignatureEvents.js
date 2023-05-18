import React from 'react';
import './PillarSignatureEvents.css'


const PillarSignatureEvents = ({children}) => {
  return (
    <section className="pillar-signature-events-section">
      <h1 className="pillar-signature-events-title title">
        Signature Events
      </h1>

      {children}
    </section>
  );
}

export default PillarSignatureEvents;