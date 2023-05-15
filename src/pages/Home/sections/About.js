import React from 'react';
import './About.css';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1 className="about-title title">About UFFSA</h1>
        <p className="about-text">
          The Filipino Student Association (FSA) at the University of Florida is a home away from home for anyone, not just Filipinos. 

          From the Def Talent Jam dance competition in the fall to the Barrio Fiesta cultural show in the spring, FSA hosts a wide variety of 
          events that immerse its members in Filipino culture, both modern and traditional. In addition to hosting dance and cultural events, 
          FSA also participates in intramural sports such as basketball, flag football, volleyball, tennis, and many more. FSA is also devoted 
          to giving back to the community and to those in need through their philanthropy fundraisers, events, and month-long event, Gawad 
          Kalinga month. 

          FSA is dance. 
          FSA is culture. 
          FSA is sports. 
          FSA is philanthropy. 

          And above all else, FSA is family.
        </p>
      </div>

      <div className='about-vid'>
        <div className='vid-container'>
          {/* Use recap vid or AASA promo */}
          <iframe className='vid'
            width={1280}
            height={720}
            src="https://www.youtube.com/embed/yro1VBUmkac"
            title="FSA 2021-2022 Recap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          />
        </div>
      </div>
    </section>
  );
}

export default About;