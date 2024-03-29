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

            <TabPanel value={signatureEventsValue} index={0}>
                <h2>Asian American Student Assembly</h2>
                <h4>August 26 @ UF Curtis M. Philips Center</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>
            <TabPanel value={signatureEventsValue} index={1}>
                <h2>Def Talent Jam</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
            </TabPanel>
            <TabPanel value={signatureEventsValue} index={2}>
                <h2>Philfest</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
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
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>
            <TabPanel value={regularActivitiesValue} index={1}>
                <h2>Traditions</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>
            <TabPanel value={regularActivitiesValue} index={2}>
                <h2>Collaborative Showcases</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
            </TabPanel>

        </PillarRegularActivities>
        
    </> 
  );
}

export default Dance;