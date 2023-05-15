import React from 'react';
import { Link } from 'react-router-dom';
import './FourPillars.css';

import danceLogo from '../../../assets/logos/dance.png';
import cultureLogo from '../../../assets/logos/culture.png';
import sportsLogo from '../../../assets/logos/sports.png';
import philanthropyLogo from '../../../assets/logos/philanthropy.png';

const FourPillars = () => {
  return (
    <section className="pillars-section" id="pillars">
      <h1 className='pillars-section-title'>Our Pillars</h1>
      
      <div className="pillars-container">
        
        <Link className="pillar dance-pillar" to="/dance" style={{ backgroundColor: '#eb8f9a' }}>
          <div className="pillar-header">
            <img className="pillar-logo" src={danceLogo} alt="dance logo"/>
            <h1 className='pillar-title'>DANCE</h1>
          </div>
            <p className="pillar-text">
              UFFSA's elite dance team. 
              From the Shadows of the Stadium to the Grounds at which we stomp come dances that have shocked the Gator Nation since 1986. 
              Come join our passion and our history as a part of the FSA family.
              All are welcome! 
              We focus on modern styles of dance, cultural Filipino dances, and just enjoying the company of our favorite people!
            </p>
        </Link>

        <Link className="pillar culture-pillar" to="/culture" style={{ backgroundColor: 'var(--red)' }}>
          <div className="pillar-header">  
            <img className="pillar-logo" src={cultureLogo} alt="culture logo" />
            <h1 className='pillar-title'>CULTURE</h1>
          </div>
            <p className="pillar-text">
              Mabuhay! 
              We will be posting information about Filipino culture, Filipino history, and current events from the Philippines! 
              We will also posting information about our huge fall culture event, Filipino American History Month. 
              Also, get ready for the other big spring culture event, Barrio Fiesta! 
              Get ready for a year of Filipino culture!
            </p>
        </Link>

        <Link className="pillar sports-pillar" to="/sports" style={{ backgroundColor: 'var(--blue)' }}>
          <div className="pillar-header"> 
            <img className="pillar-logo" src={sportsLogo} alt="sports logo" />
            <h1 className='pillar-title'>SPORTS</h1>
          </div>
            <p className="pillar-text">
              SPOOOORTSSS!
              Do you want to take a break from the grind of your classes? Why not bond with your pamilya and play some sports!
              We compete and have fun in everything we do.
              Everyone is welcome, and anyone can join.
              Everyone has a sport they're good at, they just don't know it.
              Be prepared for updates in the near future, and get your teams ready!
            </p>
        </Link>

        <Link className="pillar philanthropy-pillar" to="/philanthropy" style={{ backgroundColor: '#333333' }}>
          <div className="pillar-header">   
            <img className="pillar-logo" src={philanthropyLogo} alt="philanthropy logo" />
            <h1 className='pillar-title'>PHILANTHROPY</h1>
          </div>
            <p className="pillar-text">
              As a family-oriented organization, we believe it is important to give back to our community. 
              There are many families and individuals who are in need; 
              a little help from our pamilya (family) can make a big impact on their lives. 
              Even though every little thing counts, we strive to do our best to provide the most diligent service. 
              We hope to leave smiles on their faces and UFFSA in their hearts.
            </p>
        </Link>
      </div>
        
      

    </section>
  );
}

export default FourPillars;