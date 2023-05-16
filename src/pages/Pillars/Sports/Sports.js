import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';

import './Sports.css';

import sportsLogo from '../../../assets/logos/sports.png';

const Sports = () => {  
    return (<>
        <PillarHero 
            logo = {sportsLogo} 
            backgroundColor = {'var(--blue)'} 
            title="UFFSA SPORTS"
        />
    </> 
  );
}

export default Sports;