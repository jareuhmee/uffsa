import React from 'react';
import './AKATitle.css';


const AKATitle = ({ color }) => {  
    return (
      <div className='aka-title-container'>
        <div className='aka-title'>
          <h1 style={{ color }}>Ate Kuya Ading</h1>
        </div>
      </div>
  );
}

export default AKATitle;