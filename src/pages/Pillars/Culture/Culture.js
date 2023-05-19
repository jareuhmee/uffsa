import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import EventCard from '../../../components/events/EventCard';

import './Culture.css';

import cultureLogo from '../../../assets/logos/culture.png';
import FAHM from './FAHM.jpeg';
import barrio from './barrio.jpeg';

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

        <PillarSignatureEvents>
            <div className='event-container'>
                <EventCard
                    title="Filipino American History Month"
                    date="FALL | October 2023"
                    address="Phillips Center"
                    description=""
                    image={FAHM}
                />

                <EventCard
                    title="Barrio Fiesta"
                    date="SPRING | March 4, 2024 AT 12:45 PM"
                    address="Gator Wesley Foundation"
                    description=""
                    image={barrio}
                />
            </div>
        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <div className='event-container'>
                <EventCard
                    title="Blogs"
                    date=""
                    address=""
                    description=""
                />

                <EventCard
                    title="Presentations"
                    date=""
                    address=""
                    description=""
                />
            </div>
        </PillarRegularActivities>

    </> 
  );
}

export default Culture;