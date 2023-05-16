import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';

import './Culture.css';

import cultureLogo from '../../../assets/logos/culture.png';

const Culture = () => {  
    return (<>
        <PillarHero 
            logo = {cultureLogo} 
            backgroundColor = {'var(--red)'} 
            title="UFFSA CULTURE"
        />
    </> 
  );
}

export default Culture;