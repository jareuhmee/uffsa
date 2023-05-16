import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import './Dance.css';

import danceLogo from '../../../assets/logos/dance.png';


const Dance = () => {  
    return (<>
        <PillarHero 
            logo={danceLogo} 
            backgroundColor={'#eb8f9a'} 
            title="UFFSA DANCE"
        />

        <PillarDescription 
            backgroundColor={"whitesmoke"}
            content="FSA Dance has a rich tradition dating back from when the Filipino Student Association at UF was founded in 1986. FSA has showcased the beautiful traditional dances of the Philippines, and in addition, FSA has led the pack with its excellence and highly entertaining modern dances, second to none. From the regionally notorious Def Talent Jam, to the PhilFest competition, and from the highly esteemed Asian American Student Assembly, to the back-to-roots Barrio Fiesta, FSA Dance touches a variety of dance styles and levels throughout the year."
        />

        <PillarSignatureEvents />
        <PillarRegularActivities />
    </> 
  );
}

export default Dance;