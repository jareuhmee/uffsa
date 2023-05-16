import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';

import './Dance.css';

import danceLogo from '../../../assets/logos/dance.png';

const Dance = () => {  
    return (<>
        <PillarHero 
            logo={danceLogo} 
            backgroundColor={'#eb8f9a'} 
            title="UFFSA DANCE"
        />
    </> 
  );
}

export default Dance;