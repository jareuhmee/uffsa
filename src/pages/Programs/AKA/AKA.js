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

                Deadline to submit: FRIDAY, SEPTEMBER 15th @ 11:59PM
                <br /><br />
                Once you submit your application, find out your pairing(s) at AKA Reveal after FAHM Opening Ceremony on September 24th at Lake Wauburg. We hope to see you there!
                <br /><br />

              </div>

              <div className='apply-button__container'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeiQclNIP2ruwBGAadFk7GMakF7EDzTUiocgvXreGh34KAzzw/viewform' target="_blank" rel="noopener noreferrer">
                    <button className="apply-button title">
                      APPLY NOW!
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