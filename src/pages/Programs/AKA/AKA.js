import React from 'react';
import AKATitle from '../../../components/titles/AKA Title/AKATitle';

import './AKA.css';

const AKA = () => {  
    return (<>
        <div className='aka-page'>
          <AKATitle color="white" />

          <div className='aka-description'>
            <div className='aka-description__container'>
                AKA (Ate/Kuya/Ading) is the Filipino Student Association's mentorship program here at UF. Our Membership Team will do their best to pair you with an "Ading" (little) or a "Kuya" (big brother) or an "Ate" (big sister) that best suits you!
                <br /><br />
                We encourage you to be as specific and descriptive as possible so we can create the best pamilya for you!
                <br /><br />

                Deadline to submit: PAST — STAY TUNED FOR RAKA IN THE SPRING
                <br /><br />
                Once you submit your application, find out your pairing(s) at AKA Reveal after FAHM Opening Ceremony on September 24th at Lake Wauburg. We hope to see you there!
                <br /><br />

              </div>

              <div className='aka-vid'>
                <div className='vid-container'>
                  <iframe className='vid'
                    width={1280}
                    height={720}
                    src="https://www.youtube.com/embed/RtLWP24r8mA?si=RI62JiN7anEfJDjG"
                    title="AKA 2023: Across the PINOY-VERSE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  />
                </div>
              </div>

              <div className='aka-button__container'>

                <a href='https://docs.google.com/spreadsheets/d/1FmL6qIt6ziWTvkx4nsdmgOy1C7dCz9DOtPYvMeWumv4/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                    <button className="aka-button title">
                      AKA Pairings
                    </button>
                </a>

                <a href='https://drive.google.com/drive/folders/1KJb04ZV5mhX48P1wkiic38-620ffASxu?usp=drive_link' target="_blank" rel="noopener noreferrer">
                    <button className="aka-button title">
                      AKA Photos
                    </button>
                </a>
              </div>

              {/* <div className='temp-text-container'>
                AKA Description: Our big/little mentorship program <br /><br />
                Embed application <br /><br />
                Event info on AKA/RAKA weeks and woodser <br /><br />
                Feature Pair of the Month + link application <br /><br />
                Embed Pamilya Spotlights from Instagram <br /><br />
                AKA (Ate/Kuya/Ading) is the Filipino Student Association's mentorship program here at UF. Our Membership Team will do their best to pair you with an "Ading" (little) or a "Kuya" (big brother) or an "Ate" (big sister) that best suits you!

                We encourage you to be as specific and descriptive as possible so we can create the best pamilya for you!

                Deadline to submit: FRIDAY, SEPTEMBER 15th @ 11:59PM

                Once you submit your application, find out your pairing(s) at AKA Reveal after FAHM Opening Ceremony on September 24th at Lake Wauburg. We hope to see you there!
              </div> */}
            </div>

        </div>
    </> 
  );
}

export default AKA;