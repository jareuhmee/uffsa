import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';


import './Sports.css';

import sportsLogo from '../../../assets/logos/sports.png';

const Sports = () => {  
    return (<>
        <PillarHero 
            logo = {sportsLogo} 
            backgroundColor = {'var(--blue)'} 
            title="UFFSA SPORTS"
        />

        <PillarDescription 
            backgroundColor={"#f5f2f0"}
            content="Year after year UFFSA brings together its finest athletes to participate in UF intramural sports. During the Fall semester, 7 on 7 flag football is king. The largest crowds gather around SW fields for the games and the FSA crowds are among the largest of them all. Everyone is welcome to play and learn the sport with FSA’s best. There are men’s, women’s, and coed teams. Anyone interested in starting an FSA team in another intramural sport should contact the FSA Sports coordinator for direction."

        />

        <PillarSignatureEvents />
        <PillarRegularActivities />
    </> 
  );
}

export default Sports;