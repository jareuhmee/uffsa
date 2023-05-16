import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import './Philanthropy.css';

import philanthropyLogo from '../../../assets/logos/philanthropy.png';

const Philanthropy = () => {  
    return (<>
        <PillarHero 
            logo = {philanthropyLogo} 
            backgroundColor = {'#333333'} 
            title="UFFSA PHILANTHROPY"
        />

        <PillarDescription 
            backgroundColor={"whitesmoke"}
            content="Thank you for your interest in joining University of Florida's Filipino Student Association's Community Service.
                As a family-oriented organization, we believe it is important to give back to our community. There are many families and individuals who are in need; a little help from our pamilya (family) can make a big impact on their lives. Even though every little thing counts, we strive to do our best to provide the most diligent service. We hope to leave smiles on their faces and UFFSA in their hearts."
        />

        <PillarSignatureEvents />
        <PillarRegularActivities />
    </> 
  );
}

export default Philanthropy;