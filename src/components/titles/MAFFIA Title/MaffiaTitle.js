import React from 'react';
import './MaffiaTitle.css';

import star from './star.png';

const MaffiaTitle = () => {  
    return (
      <div className='maffia-title-container'>
        <div className='maffia-title'>
          <div className='maffia-left-box' />
          <div className='maffia-right-box' />
          <img src={star} alt="star"/>
          <h1>MAFFIA</h1>
        </div>
      </div>
  );
}

export default MaffiaTitle;