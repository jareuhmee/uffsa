import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import EventAccordion from '../../../components/EventAccordion/EventAccordion';
import EventCard from '../../../components/events/EventCard';


import './Sports.css';

import sportsLogo from '../../../assets/logos/sports.png';
import adobowl from './adobowl.jpeg';
import ssg from './ssg.jpg';

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

        <PillarSignatureEvents>
            <div className='event-container'>
                <EventAccordion
                    backgroundColor="var(--blue)"
                    header="Adobowl"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--blue)"
                    header="Southern Survival Games (SSG)"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />

                {/* <EventCard
                    title="Adobowl"
                    date="FALL | October 22, 2023"
                    address="Flavet Field"
                    description=""
                    image={adobowl}
                />

                <EventCard
                    title="Southern Survival Games"
                    date="SPRING | April 2024"
                    address="Squirrel Ridge Park"
                    description=""
                    image={ssg}
                /> */}
            </div>
        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <div className='event-container'>
                <EventAccordion
                    backgroundColor="var(--blue)"
                    header="Intramural Sports"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--blue)"
                    header="Tailgating"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--blue)"
                    header="Tournaments"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                {/* <EventCard
                    title="Intramural Sports"
                    date=""
                    address=""
                    description=""
                />

                <EventCard
                    title="Tailgating"
                    date=""
                    address=""
                    description=""
                />

                <EventCard
                    title="Tournaments"
                    date=""
                    address=""
                    description=""
                /> */}
            </div>
        </PillarRegularActivities>

    </> 
  );
}

export default Sports;