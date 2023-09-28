import React from 'react';
import './About.css';

import { IoDocumentText } from 'react-icons/io5'


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className='about-vid'>
        <div className='vid-container'>
          {/* Use recap vid or AASA promo */}
          <iframe className='vid'
            width={1280}
            height={720}
            src="https://www.youtube.com/embed/eFda4wkMEgw"
            title="FSA Promo 2020"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          />
        </div>
      </div>

      <div className="about-container">
        <h1 className="about-title title">About UFFSA</h1>

        <div className='about-text'>
          <h2 className='about-text__intro'>
            The Filipino Student Association (FSA) at the University of Florida is a home away from home for all students, whether you're Filipino or not. 
          </h2>
          
          <p>
            You're not only building friendships that last a lifetime in FSA, you're joining a 
            pamilya. From the Def Talent Jam dance competition to the Barrio 
            Fiesta cultural show, from the annual Adobowl tournament to Gawad Kalinga Month, FSA hosts a wide variety of events that immerse its 
            members into our four pillars: dance, culture, sports, and philanthropy. 
          </p>
          <p>Since there are so many ways to get involved, it is easy for members to find their niche within FSA. Join the pamilya today!</p>
        </div>

        <a href='https://docs.google.com/document/d/13tK8iccWfOXyG9kFqucYMV4XaYlzVXd7aJGaccSacuM/' target="_blank" rel="noopener"> 
          <button className='constitution-button'> 
            <IoDocumentText /> FSA Constitution
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;