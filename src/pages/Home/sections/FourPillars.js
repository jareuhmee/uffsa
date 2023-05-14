import React from 'react';
import { Link } from 'react-router-dom';
import './FourPillars.css';
import danceLogo from '../../../assets/logos/dance.png';
import cultureLogo from '../../../assets/logos/culture.png';
import sportsLogo from '../../../assets/logos/sports.png';
import philanthropyLogo from '../../../assets/logos/philanthropy.png';

const FourPillars = () => {
  return (
    <section className="pillars-section">
      <h1 className='pillars-section-title'>Our Pillars</h1>
        
      <Link className="pillar-container" to="/dance" style={{ backgroundColor: 'rgba(235,143,154,1)' }}>
          <h1 className='pillar-title main-title'>DANCE</h1>
          <img className="pillar-logo" src={danceLogo}/>
          <p className="pillar-text"></p>
      </Link>

      <Link className="pillar-container" to="/culture" style={{ backgroundColor: 'var(--red)' }}>
          <h1 className='pillar-title main-title'>CULTURE</h1>
          <img className="pillar-logo" src={cultureLogo} />
          <p className="pillar-text"></p>
      </Link>

      <Link className="pillar-container" to="/sports" style={{ backgroundColor: 'var(--blue)' }}>
          <h1 className='pillar-title main-title'>SPORTS</h1>
          <img className="pillar-logo" src={sportsLogo} />
          <p className="pillar-text"></p>
      </Link>

      <Link className="pillar-container" to="/philanthropy" style={{ backgroundColor: 'black' }}>
          <h1 className='pillar-title main-title'>PHILANTHROPY</h1>
          <img className="pillar-logo" src={philanthropyLogo} />
          <p className="pillar-text"></p>
      </Link>

    </section>
  );
}

export default FourPillars;