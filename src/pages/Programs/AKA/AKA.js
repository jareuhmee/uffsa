import React from 'react';
import AKATitle from '../../../components/titles/AKA Title/AKATitle';

import './AKA.css';

const AKA = () => {  
    return (<>
        <div>
          <AKATitle />
        </div>

        <div className='aka-description'>

          <div className='temp-text-container'>
            AKA Description: Our big/little mentorship program <br /><br />
            Embed application <br /><br />
            Event info on AKA/RAKA weeks and woodser <br /><br />
            Feature Pair of the Month + link application <br /><br />
            Embed Pamilya Spotlights from Instagram <br /><br />
          </div>
        </div>
    </> 
  );
}

export default AKA;