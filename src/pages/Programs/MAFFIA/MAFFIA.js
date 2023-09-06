import React from 'react';
import './MAFFIA.css';

import MaffiaTitle from '../../../components/titles/MAFFIA Title/MaffiaTitle';

const MAFFIA = () => {  
    return (<>
        <div className='maffia-page'>
          <MaffiaTitle color='white' />

          <section className="maffia-description">
            <div className='maffia-description__container'>
              <p>
                MAFFIA (Membership And FSA First-year Involvement Alliance) is the perfect way for new members to get involved and find their niche within FSA. Within it they will gain firsthand leadership experience and develop valuable skills all while connecting with new and old members of the PAMILYA!
              </p>

              <p>
                This program gives the opportunity to network and learn how FSA runs behind the scenes with the help of E-Board members and Chairs. Although MAFFIA is geared towards new members and Freshmen, ALL are welcome and encouraged to join! 
              </p>

              <p>
                MAFFIA is divided into 4 sub-programs: Culture, Mass Communications, Multimedia, and Philanthropy. Over the course of the Fall semester, members will be distributed amongst these sub-programs and will rotate every GBM/show so each MAFFIA member has the opportunity to experience each program. 
              </p>

              <br />

              <a href='https://docs.google.com/forms/d/e/1FAIpQLSevYv9vuYBKO5oha0Ov7kOnObTdrq8eKVuP7uVmlnZke0IanQ/viewform' target="_blank" rel="noopener noreferrer">
                APPLY NOW!
              </a>
            </div>
            
            {/* <div className='temp-text-container'>
              MAFFIA Description: Our first-year involvement program (Membership and FSA First-year Involvement Alliance) <br /><br />
              Embed Application <br /><br />
              Describe Rotations, feature recent work: Multimedia, Culture, Mass Communications, Philanthropy <br /><br />
            </div> */}
          </section>

        </div>
    </> 
  );
}

export default MAFFIA;