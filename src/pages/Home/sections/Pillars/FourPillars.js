import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './FourPillars.css';

import danceLogo from '../../../../assets/logos/dance.png';
import cultureLogo from '../../../../assets/logos/culture.png';
import sportsLogo from '../../../../assets/logos/sports.png';
import philanthropyLogo from '../../../../assets/logos/philanthropy.png';

const FourPillars = () => {
  return (
    <section className="pillars-section" id="pillars">
      <h1 className='pillars-section-title'>Four Pillars</h1>
      
      <div className="pillars-container">
        
        <HashLink className="pillar dance-pillar" to="/dance#" style={{ backgroundColor: '#eb8f9a' }}>
          <div className="pillar-header">
            <h1 className='pillar-title title'>Dance</h1>
            <img className="pillar-logo" src={danceLogo} alt="dance logo"/>
          </div>
            <p className="pillar-text">
              Join our award-winning dance 
              troupe; all are welcome! We 
              focus on modern styles of 
              dance, cultural Filipino dances, 
              and just enjoying the company 
              of our favorite people!
            </p>
        </HashLink>

        <HashLink className="pillar culture-pillar" to="/culture#" style={{ backgroundColor: 'var(--red)' }}>
          <div className="pillar-header">
            <h1 className='pillar-title title'>Culture</h1>
            <img className="pillar-logo" src={cultureLogo} alt="culture logo" />
          </div>
            <p className="pillar-text">
              UFFSA is all about educating its 
              members about Filipino-
              American culture, Filipino 
              history, and current events 
              from the Philippines. Come out 
              to any of our events and see 
              what we have to offer!
            </p>
        </HashLink>

        <HashLink className="pillar sports-pillar" to="/sports#" style={{ backgroundColor: 'var(--blue)' }}>
          <div className="pillar-header"> 
            <h1 className='pillar-title title'>Sports</h1>
            <img className="pillar-logo" src={sportsLogo} alt="sports logo" />
          </div>
            <p className="pillar-text">
              SPOOOORTSSS! We compete 
              and have fun in everything we 
              do. Everyone is welcome, and 
              anyone can join. Everyone has a 
              sport they're good at, they just 
              don't know it.
            </p>
        </HashLink>

        <HashLink className="pillar philanthropy-pillar" to="/philanthropy#" style={{ backgroundColor: '#333333' }}>
          <div className="pillar-header">
            <h1 className='pillar-title title'>Philanthropy</h1>
            <img className="pillar-logo" src={philanthropyLogo} alt="philanthropy logo" />
          </div>
            <p className="pillar-text">
            As a family-oriented 
            organization, we believe it is 
            important to give back to our 
            community. There are many 
            people who are in need; a little 
            help from our pamilya can 
            make a big impact.
            </p>
        </HashLink>
      </div>
        
      

    </section>
  );
}

export default FourPillars;