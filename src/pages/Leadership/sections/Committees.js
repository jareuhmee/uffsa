import React from 'react';
import './Committees.css';

import EventAccordion from '../../../components/EventAccordion/EventAccordion';

const Committees = () => {
  return (
    <section className='committees-section' id='committees'>
      <h1 className='committees-section-title title'>Event Committees</h1>
      <div className='committees-container'>

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Asian American Student Assembly (AASA) Committee"
          body={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Def Talent Jam (DTJ) Committee"
          body={
            <>
              <p>
                <strong>Def Talent Jam (DTJ)</strong> is a tremendous weekend hosted by UFFSA since 1993, 
                where Filipino Student Organizations and other dance organizations from across the Southeast Region 
                come to Gainesville for competitions of sports and dance, but most importantly to celebrate our pride.
              </p>
              <p>
                The dance competition is surrounded by many other events hosted by UFFSA, including FAHM Closing, 
                our Adobowl Flag Football Competition, and Dance Workshop hosted by the headliner.
              </p>
              <p>
                Each year, Def Talent Jam is orchestrated around an exceptional theme that helps set the stage 
                for the dancers coming from all different backgrounds, resulting in amazing performances and 
                different storylines all fueled by passion.
              </p>
              <p>
                Past themes include <em>A Night at the Cinema</em>, <em>Mahal Ko</em>, and <em>Ultimatum</em>.
              </p>
            </>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Filipino American History Month (FAHM) Committee"
          body={
            <>
              <p><strong>Logistics:</strong></p>
              <p>
                Participate in all things logistics! As a member of this committee, you will be tasked with 
                handling the behind-the-scenes and ins and outs of a show. Your responsibilities will range 
                from facilitating performer auditions, establishing schedules, crafting the event’s show order 
                and program, assisting with the tech script, overseeing lighting and sound, and overall, making 
                sure the show progresses seamlessly.
              </p>

              <p><strong>Decorations:</strong></p>
              <p>
                Spice up our venues with decorations! As a member of this committee, you will play a big role in 
                creating the event’s ambiance and vibe. Your responsibilities will include crafting decorations 
                such as stage adornments, table centerpieces, chair decorations, skit props, and a photo booth.
              </p>

              <p><strong>Skit:</strong></p>
              <p>
                Show off uniquely Filipino stories with the skit! As a member of this committee, you can get involved 
                with the show itself as an actor, work behind-the-scenes as a script writer, or show off your amazing 
                skills and do both! As a skit script writer, you will be tasked with utilizing your writing prowess 
                and creating a script that leaves a lasting impression on the audience. As a skit actor, you will be 
                tasked with making the script come to life, engaging the audience and captivating the audience that 
                will watch the story you will portray.
              </p>
            </>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Semi-Formal Committee"
          body={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Barrio Fiesta Committee"
          body={
            <>
              <p><strong>Logistics:</strong></p>
              <p>
                Participate in all things logistics! As a member of this committee, you will be tasked with 
                handling the behind-the-scenes and ins and outs of a show. Your responsibilities will range 
                from facilitating performer auditions, establishing schedules, crafting the event’s show order 
                and program, assisting with the tech script, overseeing lighting and sound, and overall, making 
                sure the show progresses seamlessly.
              </p>

              <p><strong>Decorations:</strong></p>
              <p>
                Spice up our venues with decorations! As a member of this committee, you will play a big role in 
                creating the event’s ambiance and vibe. Your responsibilities will include crafting decorations 
                such as stage adornments, table centerpieces, chair decorations, skit props, and a photo booth.
              </p>

              <p><strong>Skit:</strong></p>
              <p>
                Show off uniquely Filipino stories with the skit! As a member of this committee, you can get involved 
                with the show itself as an actor, work behind-the-scenes as a script writer, or show off your amazing 
                skills and do both! As a skit script writer, you will be tasked with utilizing your writing prowess 
                and creating a script that leaves a lasting impression on the audience. As a skit actor, you will be 
                tasked with making the script come to life, engaging the audience and captivating the audience that 
                will watch the story you will portray.
              </p>

              <p><em>These apply for FAHM Opening, FAHM Closing, and Barrio.</em></p>
            </>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Gawad Kalinga (GK) Month Committee"
          body={
            <p>
              Gawad Kalinga (GK) Month is a philanthropic initiative held each March, where FSA hosts a series of events to raise funds in support of empowering underprivileged communities in the Philippines! 
              It’s a meaningful time for the FSA community in Gainesville to come together and make a positive impact for Filipinos back home. 
              Each year, GK Month is guided by a unique theme that highlights the spirit and mission of the initiative. 
              Past events have included Pie-Milya, restaurant fundraisers, dance workshops, and advocacy workshops.
            </p>
          }
        />

        <EventAccordion
          backgroundColor="var(--dark-gray)"
          header="Formal Committee"
          body={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, 
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          }
        />

      </div>
    </section>
  );
};

export default Committees;
