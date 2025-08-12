import React from 'react';

import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../../components/TabPanel/TabPanel';
import { FaInstagram, FaDiscord } from 'react-icons/fa';

import '../Pillars.css';
import './Dance.css';

import danceLogo from '../../../assets/logos/dance.png';
import aasa24 from '../../../pages/Pillars/Dance/aasa24.jpg';
import dtj from '../../../pages/Pillars/Dance/dtj.jpg';
import philfest2024 from '../../../pages/Pillars/Dance/2024_philfest.jpg';
import InstagramPost from "../../../components/InstaPosts/InstagramPost";

// import AASA from './aasa.jpeg';
// import DTJ from './dtj.jpeg';
// import PhilFest from './philfest.jpeg';


const Dance = () => {
    const [signatureEventsValue, setSignatureEventsValue] = React.useState(0);
    const [regularActivitiesValue, setRegularActivitiesValue] = React.useState(0);

    const handleSignatureEventsChange = (event, newValue) => {
        setSignatureEventsValue(newValue);
    };

    const handleRegularActivitiesChange = (event, newValue) => {
        setRegularActivitiesValue(newValue);
    };

    return (<>
        {/* <PillarHero 
            logo={danceLogo} 
            backgroundColor={'white'} 
            title="UFFSA DANCE"
        /> */}

        <section className="pillar-hero dance-hero">
            <div className='pillar-hero__main'>
                <img className="pillar-hero__logo" src={danceLogo} alt="logo" />
                <h1 className="pillar-hero__title title dance-hero__text">UFFSA DANCE</h1>
            </div>

            <div className='pillar-hero__buttons'>
                <a href='https://www.instagram.com/uffsawolfpack/' target="_blank" rel="noopener noreferrer">
                    <button className='dance-hero__button'>
                        <FaInstagram /> Instagram
                    </button>
                </a>
                <a href='https://discord.gg/DJRMYDHdJp' target="_blank" rel="noopener noreferrer">
                    <button className='dance-hero__button'>
                        <FaDiscord /> Discord
                    </button>
                </a>
            </div>
        </section>

        {/* <PillarDescription 
            backgroundColor={'var(--white)'}
            content="FSA Dance has a rich tradition dating back from when the Filipino Student Association at UF was founded in 1986. FSA has showcased the beautiful traditional dances of the Philippines, and in addition, FSA has led the pack with its excellence and highly entertaining modern dances, second to none. From the regionally notorious Def Talent Jam, to the PhilFest competition, and from the highly esteemed Asian American Student Assembly, to the back-to-roots Barrio Fiesta, FSA Dance touches a variety of dance styles and levels throughout the year."
        /> */}


        <PillarSignatureEvents>

            <Tabs 
                value={signatureEventsValue}
                onChange={handleSignatureEventsChange}
                centered
                textColor='var(--pink)'
                className='dance-tabs'
            >
                <Tab label="AASA" />
                <Tab label="DTJ" />
                <Tab label="Philfest" />
            </Tabs>

<TabPanel value={signatureEventsValue} index={1}>
  <section className="event-section">
    <h2 className="event-title">Def Talent Jam</h2>

    <p className="event-blurb">
      Hosted by UFFSA, along with the University of Florida Filipino Student Alumni Association (UFFSAA),
      <strong> Def Talent Jam (DTJ)</strong> is one of the Southeast’s most anticipated events. This talent competition
      brings FSAs and dance organizations from across the East Coast to battle it out for prizes, trophies, and, most importantly, pride.
      Created in 1993, DTJ has grown from humble beginnings to an event enjoyed by thousands each year.
      The weekend features UFFSA’s FAHM Closing Ceremony and the Adobowl flag football tournament, a headliner‑led dance
      workshop, and a showcase competition to decide the best of the best. 
    </p>

    <div className="event-badges">
      <span className="badge">Est. 1993</span>
      <span className="badge">FAHM Closing</span>
      <span className="badge">Adobowl</span>
      <span className="badge">Headliner Workshop</span>
      <span className="badge">Showcase Competition</span>
    </div>
    <div className="event-blurb">DTJ’s highly anticipated set is open for students from all years to sign up for. Make sure to sign up and immerse yourself in an unforgettable experience!</div>    
    <br></br>
    <div className="winners-card">
      <h3 className="winners-title">Congratulations to the 2024 Winners!</h3>
      <ul className="winners-list">
        <li><span className="place">1st Place:</span> <span className="team">FSU CapitILL State</span></li>
        <li><span className="place">2nd Place:</span> <span className="team">USF Forging a Movement</span></li>
        <li><span className="place">3rd Place:</span> <span className="team">UCF Fresh Off the Beat</span></li>
        <li><span className="place">Fan Favorite Exhibition Team:</span> <span className="team">Komodo Dance</span></li>
      </ul>
    </div>

    <figure className="event-figure">
      <InstagramPost url="https://www.instagram.com/p/DC40hG1IaUE/" />
      <figcaption className="event-caption">Def Talent Jam — Southeast Filipino Dance Showcase</figcaption>
    </figure>
  </section>
</TabPanel>
<TabPanel value={signatureEventsValue} index={0}>
  <section className="event-section">
    <h2 className="event-title">AASA</h2>

    <p className="event-blurb">
      AASA, or the <strong>Asian American Student Assembly</strong>, is an annual event hosted by the Asian American Student Union (AASU). 
      This highly anticipated event gathers asian communities from across the University of Florida together at the beginning of the fall semester for a night of exciting performances and amazingly crafted videos to showcase their organizations to the wider UF community and incoming freshman students. 
      <p>UFFSA Wolfpack participates in AASA annually by performing a set to showcase our pillar of dance. 
      Additionally, we aim to advertise our organization through our intro video, which features segments from each of our pillars: culture, philanthropy, sports, and dance. </p>
      <p>Participating in AASA is limited to second-years and above, and more information can be found on <strong>@ufaasa</strong> and <strong>@uffsawolfpack</strong> on Instagram.</p>
    </p>

    <figure className="event-figure">
      <InstagramPost url="https://www.instagram.com/p/DNLzzlhO_Sg/?img_index=1" />
    </figure>
  </section>
</TabPanel>
<TabPanel value={signatureEventsValue} index={2}>
  <section className="event-section">
    <h2 className="event-title">Philfest</h2>

    <p className="event-blurb">
      Philfest, also known as Philfest Revolution, is a dance competition that UFFSA Wolfpack participates in during the spring semester. 
      Based in Tampa, the competition features dance crews from across the state of Florida for an all-out battle of passion, movement, and culture. 
      This event has been a large part of UFFSA Wolfpack’s recent history and has been a way to embrace our Filipino heritage in the southern region of Florida. 
      <p>Philfest is open to students from all years, so make sure to sign up for the next competition!</p>
    </p>
  </section>
</TabPanel>

        </PillarSignatureEvents>        
        <PillarRegularActivities>

            <Tabs 
                value={regularActivitiesValue}
                onChange={handleRegularActivitiesChange}
                centered
                textColor='var(--pink)'
                className='dance-tabs'
            >
                <Tab label="Workshops" />
                <Tab label="Traditions" />
                <Tab label="Collabs" />
            </Tabs>

            <TabPanel value={regularActivitiesValue} index={0}>
                <h2>Dance Workshops</h2>
                <p> Back-to-School Workshops will be held on September 6th!
                    More information regarding location and times will be released soon.
                 </p>
            </TabPanel>

            <TabPanel value={regularActivitiesValue} index={1}>
                <h2>Traditions</h2>
                <p> Traditions will be held on September 6th! </p>
            </TabPanel>

            <TabPanel value={regularActivitiesValue} index={2}>
                <h2>Collaborative Showcases</h2>
                <p> Stay tuned for more updates! </p>
            </TabPanel>

        </PillarRegularActivities>
        
    </> 
  );
}

export default Dance;