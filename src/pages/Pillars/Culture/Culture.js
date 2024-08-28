import React from 'react';
import { HashLink } from 'react-router-hash-link';

import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import TabPanel from '../../../components/TabPanel/TabPanel';

import './Culture.css';

import fbLogo from '../../../pages/Pillars/Culture/fb_logo.png';
// import igLogo from '../../../pages/Pillars/Culture/ig_logo.png'
import cultureLogo from '../../../assets/logos/culture.png';
import FacebookBlogImage from './UFFSA CULTURE.jpg';
import Barrio2324 from './barrio2324.jpg';
// import FAHM from './FAHM.jpeg';
// import barrio from './barrio.jpeg';


const Culture = () => {  
    const [signatureEventsValue, setSignatureEventsValue] = React.useState(0);
    const [regularActivitiesValue, setRegularActivitiesValue] = React.useState(0);

    const handleSignatureEventsChange = (event, newValue) => {
        setSignatureEventsValue(newValue);
    };

    const handleRegularActivitiesChange = (event, newValue) => {
        setRegularActivitiesValue(newValue);
    };

    return (<>
        <PillarHero 
            logo = {cultureLogo} 
            backgroundColor = {'var(--red)'} 
            title="UFFSA CULTURE"
        />

        <PillarDescription 
            backgroundColor={'var(--white)'}
            content="Welcome to the UFFSA Culture Page! 
                        We will be posting information about Filipino culture, history, and current events from the Philippines. 
                        Stay tuned for updates on our big fall event, Filipino American History Month, 
                        as well as our major spring event, Barrio Fiesta. Get ready for a year filled with Filipino culture!"
        />

        <PillarSignatureEvents>
            <Tabs 
                value={signatureEventsValue}
                onChange={handleSignatureEventsChange}
                centered
                textColor='var(--red)'
                className='culture-tabs'
            >
                <Tab label="FAHM" />
                <Tab label="Barrio Fiesta" />
            </Tabs>

            <TabPanel value={signatureEventsValue} index={0}>
                <h2>Filipino American History Month</h2>

                <p> Filipino-American History Month (FAHM) is a month-long celebration of 
                    Filipino culture from September to October. The opening ceremony kicks 
                    off the month with a day filled with coming together as a community, 
                    celebrating our collective heritage! During the ceremony, we will be 
                    having modern and cultural dances from the UF Filipino Student Association, 
                    live singing performances, delicious food, and a presentation about Filipino culture. 
                    We will also be having our Ate-Kuya-Ading reveal towards the end, 
                    where we match first years with mentors within FSA to help guide them throughout 
                    the year and onwards.

                </p>
                <p> Throughout the month, we host a variety of theme-related small events that 
                    promote community for those interested in immersing themselves in Filipino 
                    history and forming new bonds with fellow members. Nearing the end of the month, 
                    we host the closing ceremony with an evening brimming with unforgettable performances 
                    and opportunities for attendees to further embrace one another, expanding the Pamilya. 
                    Following our closing event, the annual Def Talent Jam competition takes place alongside 
                    other surprises!
                </p>
                <p> Filipino American History Month (FAHM) is celebrated every October to
                    recognize the contributions of Filipino Americans to the United States.
                    The month of October was chosen to commemorate the arrival of the first
                    Filipinos to the US on October 18, 1587. It is celebrated and recognized
                    throughout the US, with Congress officially recognizing FAHM in November
                    of 2009.
                </p>
            </TabPanel>
            
            <TabPanel value={signatureEventsValue} index={1}>
                <h2>Barrio Fiesta</h2>
                <p> Barrio Fiesta is a day-long event during the spring semester in celebration of 
                    members of the Filipino community! There, participants can engage in a 
                    cultural festival with stage performances, games with audience participation, 
                    and intermission for food and merch stalls. Unique to this gathering, 
                    there is a fashion show, during which models display a multitude of traditional clothing.
                </p>
                <img 
                    src={Barrio2324}
                    alt="BARRIO FIESTA" 
                    style={{ width: '100%', marginTop: '20px' }} 
                />
            </TabPanel>

        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <Tabs 
                value={regularActivitiesValue}
                onChange={handleRegularActivitiesChange}
                centered
                textColor='var(--red)'
                className='culture-tabs'
            >
                <Tab label="Blogs" />
                <Tab label="MAFFIA" />
            </Tabs>

            <TabPanel value={regularActivitiesValue} index={0}>
                <h2>Facebook Blogs</h2>
                <p> Join our Facebook group  <a href="https://www.facebook.com/groups/uffsaculture/" target="_blank">"UFFSA CULTURE"</a> to be updated on major events we are hosting or 
                    celebrating this year! We are excited to showcase 
                    what we have planned to both new members of the group 
                    and our beloved alumni. Hope to see you become a member! 
                </p>
                <img 
                    src={FacebookBlogImage}
                    alt="UFFSA CULTURE" 
                    style={{ width: '100%', marginTop: '20px' }} 
                />
                <HashLink to="https://www.facebook.com/groups/UFFSA/" className="button fb-button" style={{ backgroundColor: 'var(--blue)' }} target="_blank" rel="noopener noreferrer">
                    <img className="fb-logo" src={fbLogo} alt="fb logo" />
                    <h1 className="button-title title">UF FSA Facebook</h1>
                    <ArrowForwardIosSharpIcon className="button-arrow" />
                </HashLink>
            </TabPanel>

            <TabPanel value={regularActivitiesValue} index={1}>
                <h2>MAFFIA</h2>
                <p> Want to work behind-the-scenes? Join MAFFIA! 
                    Our program is suited for first-time Pamilya members 
                    to get more involved with planning our wonderful FAHM activities 
                    and memorable culture segments for the GBMs!
                    Work alongside other MAFFIA members and We-Board to 
                    not only produce a great event, but to also gain bonds 
                    that could last a lifetime. 
                    Be sure to be on the look-out for MAFFIA applications 
                    that will be posted on our Instagram <a href="https://www.instagram.com/uffsa" target="_blank">(UFFSA)</a>.
                </p>
            </TabPanel>

        </PillarRegularActivities>

    </> 
  );
}

export default Culture;