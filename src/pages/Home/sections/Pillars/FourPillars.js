import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './FourPillars.css';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import danceLogo from '../../../../assets/logos/dance.png';
import cultureLogo from '../../../../assets/logos/culture.png';
import sportsLogo from '../../../../assets/logos/sports.png';
import philanthropyLogo from '../../../../assets/logos/philanthropy.png';

const FourPillars = () => {
  return (
    <section className="pillars-section" id="pillars">
      <h1 className='pillars-section-title'>Four Pillars</h1>
      
      <div className="pillars-container">
        
        <HashLink className="pillar dance-pillar" to="/dance#" style={{ backgroundColor: 'var(--white)' }}>
          <img className="pillar-logo" src={danceLogo} alt="dance logo"/>
          <h1 className='pillar-title title'>Dance</h1>
          <ArrowForwardIosSharpIcon className="pillar-arrow" />
        </HashLink>

        <HashLink className="pillar culture-pillar" to="/culture#" style={{ backgroundColor: 'var(--red)' }}>
          <img className="pillar-logo" src={cultureLogo} alt="culture logo" />
          <h1 className='pillar-title title'>Culture</h1>
          <ArrowForwardIosSharpIcon className="pillar-arrow" />
        </HashLink>

        <HashLink className="pillar sports-pillar" to="/sports#" style={{ backgroundColor: 'black' }}>
          <img className="pillar-logo" src={sportsLogo} alt="sports logo" />
          <h1 className='pillar-title title'>Sports</h1>
          <ArrowForwardIosSharpIcon className="pillar-arrow" />
        </HashLink>

        <HashLink className="pillar philanthropy-pillar" to="/philanthropy#" style={{ backgroundColor: '#35106a' }}>
          <img className="pillar-logo" src={philanthropyLogo} alt="philanthropy logo" />
          <h1 className='pillar-title title'>Philanthropy</h1>
          <ArrowForwardIosSharpIcon className="pillar-arrow" />
        </HashLink>
      </div>
        
      

    </section>
  );
}

export default FourPillars;