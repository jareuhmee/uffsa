import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import EventCard from '../../../components/events/EventCard';

import './Philanthropy.css';

import philanthropyLogo from '../../../assets/logos/philanthropy.png';
import GK from './GK.jpeg';

const Philanthropy = () => {  
    return (<>
        <PillarHero 
            logo = {philanthropyLogo} 
            backgroundColor = {'#333333'} 
            title="UFFSA PHILANTHROPY"
        />

        <PillarDescription 
            backgroundColor={"#f5f2f0"}
            content="Thank you for your interest in joining University of Florida's Filipino Student Association's Community Service.
                As a family-oriented organization, we believe it is important to give back to our community. There are many families and individuals who are in need; a little help from our pamilya (family) can make a big impact on their lives. Even though every little thing counts, we strive to do our best to provide the most diligent service. We hope to leave smiles on their faces and UFFSA in their hearts."
        />

        <PillarSignatureEvents>
            <div className='event-container'>
                <EventCard
                    title="Gawad Kalinga Month"
                    date="SPRING | March 2024"
                    address="Gainesville"
                    description=""
                    image={GK}
                />
            </div>
        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <div className='event-container'>
                <EventCard
                    title="Project Lunchbox"
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

                <EventCard
                    title="Fundraising"
                    date=""
                    address=""
                    description=""
                />
            </div>
        </PillarRegularActivities>

    </> 
  );
}

export default Philanthropy;