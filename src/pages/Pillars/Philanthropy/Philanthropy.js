import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';

import './Philanthropy.css';

import philanthropyLogo from '../../../assets/logos/philanthropy.png';

const Philanthropy = () => {  
    return (<>
        <PillarHero 
            logo = {philanthropyLogo} 
            backgroundColor = {'#333333'} 
            title="UFFSA PHILANTHROPY"
        />
    </> 
  );
}

export default Philanthropy;