import React from 'react';
import PillarHero from '../../../components/Pillars/PillarHero';
import PillarDescription from '../../../components/Pillars/PillarDescription';
import PillarSignatureEvents from '../../../components/Pillars/PillarSignatureEvents';
import PillarRegularActivities from '../../../components/Pillars/PillarRegularActivities';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../../components/TabPanel/TabPanel';

import './Philanthropy.css';

import philanthropyLogo from '../../../assets/logos/philanthropy.png';
// import GK from './GK.jpeg';


const Philanthropy = () => {
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
            logo = {philanthropyLogo} 
            backgroundColor = {'#35106a'} 
            title="UFFSA PHILANTHROPY"
        />

        <PillarDescription 
            backgroundColor={'var(--white)'}
            content="Thank you for your interest in joining University of Florida's Filipino Student Association's Community Service.
                As a family-oriented organization, we believe it is important to give back to our community. There are many families and individuals who are in need; a little help from our pamilya (family) can make a big impact on their lives. Even though every little thing counts, we strive to do our best to provide the most diligent service. We hope to leave smiles on their faces and UFFSA in their hearts."
        />

        <PillarSignatureEvents>
            <Tabs 
                value={signatureEventsValue}
                onChange={handleSignatureEventsChange}
                centered
                textColor='var(--dark-gray)'
                className='philanthropy-tabs'
            >
                <Tab label="GK Month" />
            </Tabs>

            <TabPanel value={signatureEventsValue} index={0}>
                <h2>Gawad Kalinga Month</h2>
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

        </PillarSignatureEvents>

        
        <PillarRegularActivities>
            <Tabs 
                value={regularActivitiesValue}
                onChange={handleRegularActivitiesChange}
                centered
                textColor='var(--dark-gray)'
                className='philanthropy-tabs'
            >
                <Tab label="Podcasts" />
                <Tab label="MAFFIA" />
                <Tab label="Fundraising" />
            </Tabs>

            <TabPanel value={regularActivitiesValue} index={0}>
                <h2>Project Lunchbox</h2>
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
            <TabPanel value={regularActivitiesValue} index={2}>
                <h2>Fundraising</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
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

export default Philanthropy;