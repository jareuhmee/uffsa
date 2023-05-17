import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import './Culture.css';

import cultureLogo from '../../../assets/logos/culture.png';

const Culture = () => {  
    return (<>
        <PillarHero 
            logo = {cultureLogo} 
            backgroundColor = {'var(--red)'} 
            title="UFFSA CULTURE"
        />

        <PillarDescription 
            backgroundColor={"#f5f2f0"}
            content="Welcome to the UFFSA culture page! We will be posting information about Filipino culture, Filipino history, and current events from the Philippines! We will also posting information about our huge fall culture event, Filipino American History Month. Also, get ready for the other big spring culture event, Barrio Fiesta! Get ready for a year of Filipino culture!"
        />

        <PillarSignatureEvents />
        <PillarRegularActivities />
    </> 
  );
}

export default Culture;