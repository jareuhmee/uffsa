import React from 'react';
import './Committees.css';

import EventAccordion from '../../../components/EventAccordion/EventAccordion';

const EBoard = () => {  
    return (
        <section className='committees-section' id='committees'>
            <h1 className='committees-section-title title'>Event Committees</h1>
            <div className='committees-container'>
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Asian American Student Assembly (AASA) Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Def Talent Jam (DTJ) Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Filipino American History Month (FAHM) Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Semi-Formal Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Barrio Fiesta Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Gawad Kalinga (GK) Month Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
                <EventAccordion
                    backgroundColor="var(--dark-gray)"
                    header="Formal Committee"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget."
                />
            </div>
        </section>
    );
}

export default EBoard;