import React from 'react';
// import PillarHero from '../../../components/Pillars/PillarHero';
// import PillarDescription from '../../../components/Pillars/PillarDescription';
// import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
// import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import TabPanel from '../../../components/TabPanel/TabPanel';
import { HashLink } from 'react-router-hash-link';
import { FaInstagram } from 'react-icons/fa';

import '../Pillars.css';
import './Sports.css';

import sportsLogo from '../../../assets/logos/sports.png';
// import adobowl from './adobowl.jpeg';
// import ssg from './ssg.jpg';


const Sports = () => {
    // const [signatureEventsValue, setSignatureEventsValue] = React.useState(0);
    // const [regularActivitiesValue, setRegularActivitiesValue] = React.useState(0);

    // const handleSignatureEventsChange = (event, newValue) => {
    //     setSignatureEventsValue(newValue);
    // };

    // const handleRegularActivitiesChange = (event, newValue) => {
    //     setRegularActivitiesValue(newValue);
    // };

    return (<>
        <section className="pillar-hero sports-hero">
            <div className='pillar-hero__main'>
                <img className="pillar-hero__logo" src={sportsLogo} alt="logo" />
                <h1 className="pillar-hero__title title">UFFSA SPORTS</h1>
            </div>

            <div className='pillar-hero__buttons'>
                <a href='https://linktr.ee/uffsasports' target="_blank" rel="noopener noreferrer">
                    <button>
                        Linktree
                    </button>
                </a>
                <a href='https://www.instagram.com/uffsasports/' target="_blank" rel="noopener noreferrer">
                    <button>
                        <FaInstagram /> Instagram
                    </button>
                </a>
                <HashLink smooth to="/sports#events">
                    <button className="">
                        Calendar
                    </button>
                </HashLink>
            </div>
        </section>

        {/* <PillarDescription 
            backgroundColor={'var(--white)'}
            content="Year after year UFFSA brings together its finest athletes to participate in UF intramural sports. During the Fall semester, 7 on 7 flag football is king. The largest crowds gather around SW fields for the games and the FSA crowds are among the largest of them all. Everyone is welcome to play and learn the sport with FSA’s best. There are men’s, women’s, and coed teams. Anyone interested in starting an FSA team in another intramural sport should contact the FSA Sports coordinator for direction."
        /> */}

        <section className='sports-description'>
            <div className='sports-calendar__container' id='events'>
                <h1 className='title'>Sports Calendar</h1>
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&ctz=America%2FNew_York&showPrint=0&showDate=1&showNav=1&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=NmNjZDhjNjliZTZjOGNiOTllYjk0ZDNmY2I1MGU3ODlkMmRjMGYzODBlYTFlYzdiNTI1MDRhNTViYWM5NmY1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB"
                    className="sports-calendar"
                    title="calendar"
                />
                <HashLink smooth to="/home#events">
                    <button className="calendar-button">
                        Other Calendars
                    </button>
                </HashLink>
            </div>
        </section>

        {/* <PillarSignatureEvents>
            <Tabs 
                value={signatureEventsValue}
                onChange={handleSignatureEventsChange}
                centered
                textColor='var(--blue)'
                className='sports-tabs'
            >
                <Tab label="Adobowl" />
                <Tab label="SSG" />
            </Tabs>

            <TabPanel value={signatureEventsValue} index={0}>
                <h2>Adobowl</h2>
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
                <h2>Southern Survival Games</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.  Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>
        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <Tabs 
                value={regularActivitiesValue}
                onChange={handleRegularActivitiesChange}
                centered
                textColor='var(--blue)'
                className='sports-tabs'
            >
                <Tab label="Intramurals" />
                <Tab label="Tailgating" />
                <Tab label="Tournaments" />
            </Tabs>

            <TabPanel value={regularActivitiesValue} index={0}>
                <h2>Intramural Sports</h2>
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
                <h2>Tailgating</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo 
                    lobortis eget. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>
            <TabPanel value={regularActivitiesValue} index={2}>
                <h2>Collaborative Tournaments</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
            </TabPanel>
        </PillarRegularActivities> */}



    </>
    );
}

export default Sports;