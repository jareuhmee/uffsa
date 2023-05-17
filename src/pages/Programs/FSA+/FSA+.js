import React from 'react';
import FsaPlusTitle from '../../../components/titles/FSA+ Title/FsaPlusTitle';

import './FSA+.css';

const FsaPlus = () => {  
    return (<>
        <div>
          <FsaPlusTitle />
          <div className='fsaplus-description' />
        </div>
    </> 
  );
}

export default FsaPlus;