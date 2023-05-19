import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import EventCard from '../../../components/events/EventCard';

import './Dance.css';

import danceLogo from '../../../assets/logos/dance.png';
import AASA from './aasa.jpeg';
import DTJ from './dtj.jpeg';
import PhilFest from './philfest.jpeg';


const Dance = () => {  
    return (<>
        <PillarHero 
            logo={danceLogo} 
            backgroundColor={'#eb8f9a'} 
            title="UFFSA DANCE"
        />

        <PillarDescription 
            backgroundColor={"#f5f2f0"}
            content="FSA Dance has a rich tradition dating back from when the Filipino Student Association at UF was founded in 1986. FSA has showcased the beautiful traditional dances of the Philippines, and in addition, FSA has led the pack with its excellence and highly entertaining modern dances, second to none. From the regionally notorious Def Talent Jam, to the PhilFest competition, and from the highly esteemed Asian American Student Assembly, to the back-to-roots Barrio Fiesta, FSA Dance touches a variety of dance styles and levels throughout the year."
        />

        <PillarSignatureEvents>
            <div className='event-container'>
                <EventCard
                    title="Asian American Student Assembly"
                    date="FALL | August 26, 2023 AT 6 PM"
                    address="Phillips Center"
                    description=""
                    image={AASA}
                />

                <EventCard
                    title="Def Talent Jam"
                    date="FALL | October 21, 2023 AT 6 PM"
                    address="Phillips Center"
                    description=""
                    image={DTJ}
                />

                <EventCard
                    title="PhilFest"
                    date="SPRING | APRIL, 2024"
                    address="Tampa"
                    description=""
                    image={PhilFest}
                />
            </div>
        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <div className='event-container'>
                <EventCard
                    title="Dance Workshops"
                    date=""
                    address=""
                    description=""
                />

                <EventCard
                    title="Traditions"
                    date=""
                    address=""
                    description=""
                />

                <EventCard
                    title="Collaborative Showcases"
                    date=""
                    address=""
                    description=""
                />
            </div>
        </PillarRegularActivities>
        
    </> 
  );
}

export default Dance;