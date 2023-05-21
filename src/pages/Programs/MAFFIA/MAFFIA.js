import React from 'react';
import './MAFFIA.css';

import MaffiaTitle from '../../../components/titles/MAFFIA Title/MaffiaTitle';

const MAFFIA = () => {  
    return (<>
        <div className='maffia-page'>
          <MaffiaTitle />
          <div className="maffia-description">
            <div className='temp-text-container'>
              MAFFIA Description: Our first-year involvement program (Membership and FSA First-year Involvement Alliance) <br /><br />
              Embed Application <br /><br />
              Describe Rotations, feature recent work: Multimedia, Culture, Mass Communications, Philanthropy <br /><br />
            </div>
          </div>
        </div>
    </> 
  );
}

export default MAFFIA;