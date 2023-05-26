import React from 'react';
import './MaffiaTitle.css';

import star from './star.png';

const MaffiaTitle = ({ color }) => {  
    return (
      <div className='maffia-title-container'>
        <div className='maffia-title' style={{ color }}>
          <div className='maffia-left-box' />
          <div className='maffia-right-box' />
          <img src={star} alt="star"/>
          <h1>MAFFIA</h1>
        </div>
      </div>
  );
}

export default MaffiaTitle;