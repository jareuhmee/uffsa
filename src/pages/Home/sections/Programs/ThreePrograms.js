import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './ThreePrograms.css';

import AKATitle from '../../../../components/titles/AKA Title/AKATitle';
import MaffiaTitle from '../../../../components/titles/MAFFIA Title/MaffiaTitle';
import FsaPlusTitle from '../../../../components/titles/FSA+ Title/FsaPlusTitle';

const ThreePrograms = () => {
  return (
    <section className="programs-section" id="programs">
      <h1 className='programs-section-title'>Three Programs</h1>
      
      <div className="programs-container">
        
        <HashLink className="program dance-program" to="/aka#" style={{ backgroundColor: 'var(--yellow)' }}>
          <div className="program-header">
            <AKATitle />
          </div>
            <p className="program-text">
              Our big/little mentorship program.
            </p>
        </HashLink>

        <HashLink className="program culture-program" to="/maffia#" style={{ backgroundColor: '#1e1e1e' }}>
          <div className="program-header">
            <MaffiaTitle />
          </div>
            <p className="program-text">
              Our first-year involvement program.
            </p>
        </HashLink>

        <HashLink className="program sports-program" to="/fsa+#" style={{ backgroundColor: 'white' }}>
          <div className="program-header"> 
            <FsaPlusTitle />
          </div>
            <p className="program-text" style={{ color: 'black' }}>
              Our academic and career support program.
            </p>
        </HashLink>
      </div>
        
      

    </section>
  );
}

export default ThreePrograms;