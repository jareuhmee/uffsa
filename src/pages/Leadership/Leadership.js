import React from 'react';
import './Leadership.css';
import EBoard from './sections/E-Board';

const Leadership = () => {  
  return (
    <div className='leadership-page'>
      <div className="leadership-description">
        <div className='temp-text-container'>
          Description: There are many leadership opportunities... <br /><br />
          Applications, info on shadow GBM and link to MAFFIA <br /><br />
          Executive Board: Display as indivual cards, role descriptions, link E-Board intro video <br /><br />
          Chair Board: Cards, C-Board intro video <br /><br />
          Event Committees: FAHM, DTJ, Semi-Formal, Barrio, GK, Formal  <br /><br />
        </div>
      </div>

      <EBoard />
    </div>
  );
}

export default Leadership;