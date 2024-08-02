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
import cultureLogo from '../../../assets/logos/culture.png';
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
            content="Welcome to the UFFSA culture page! We will be posting information about Filipino culture, Filipino history, and current events from the Philippines! We will also posting information about our huge fall culture event, Filipino American History Month. Also, get ready for the other big spring culture event, Barrio Fiesta! Get ready for a year of Filipino culture!"
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
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
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
                <HashLink to="https://www.facebook.com/groups/UFFSA/" className="button fb-button" style={{ backgroundColor: 'var(--blue)' }} target="_blank" rel="noopener noreferrer">
                    <img className="fb-logo" src={fbLogo} alt="fb logo" />
                    <h1 className="button-title title">UF FSA Facebook</h1>
                    <ArrowForwardIosSharpIcon className="button-arrow" />
                </HashLink>
            </TabPanel>

            <TabPanel value={regularActivitiesValue} index={1}>
                <h2>MAFFIA</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.  Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </p>
            </TabPanel>

        </PillarRegularActivities>

    </> 
  );
}

export default Culture;