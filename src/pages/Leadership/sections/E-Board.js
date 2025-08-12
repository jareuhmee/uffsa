import React from 'react';
import './E-Board.css';

import Default from './default.png';
import Brian from '../photos/brian.jpg';
import Chadrick from '../photos/chadrick.JPG';
import Gianna from '../photos/gianna.png';
import Sam from '../photos/sam.jpeg';
import Mia from '../photos/mia.jpeg';
import Katheri from '../photos/katheri.png';
import Max from '../photos/max.JPEG';
import Dom from '../photos/dom.png';
import Matt from '../photos/matt.jpeg';
import Bekzod from '../photos/bekzod.jpeg';

const EBoard = () => {
  return (
    <section className='eboard-section' id='eboard'>
      <h1 className='eboard-section-title title'>Executive Board</h1>
      <div className='eboard-container'>

        <a href='https://www.instagram.com/samanthabwin/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Sam} alt='Samantha Baldwin' />
          <div className='eboard-card__text'>
            <h1>Samantha Baldwin</h1>
            <h2>Executive President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/bluebrainedbeing/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Brian} alt='Brian Paz' />
          <div className='eboard-card__text'>
            <h1>Brian Paz</h1>
            <h2>Executive Vice President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/giannaaag124/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Gianna} alt='Gianna Guerrero' />
          <div className='eboard-card__text'>
            <h1>Gianna Guerrero</h1>
            <h2>VP of Finance</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/yeematt/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Matt} alt='Matthew Yee' />
          <div className='eboard-card__text'>
            <h1>Matthew Yee</h1>
            <h2>VP of Internal Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/miahernandez331/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Mia} alt='Maria Angeline (Mia) Hernandez' />
          <div className='eboard-card__text'>
            <h1>Maria Angeline (Mia) Hernandez</h1>
            <h2>VP of Cultural Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/katx3ri/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Katheri} alt='Katheri Almeda' />
          <div className='eboard-card__text'>
            <h1>Katheri Almeda</h1>
            <h2>VP of Mass Communications</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/angie.7284/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Dom} alt='Dominique Fernandez' />
          <div className='eboard-card__text'>
            <h1>Dominique Fernandez</h1>
            <h2>VP of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/chadrick_penalosa/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Chadrick} alt='Chadrick Penalosa' />
          <div className='eboard-card__text'>
            <h1>Chadrick Penalosa</h1>
            <h2>VP of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/mskelton_4/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Max} alt='Max Skelton' />
          <div className='eboard-card__text'>
            <h1>Max Skelton</h1>
            <h2>VP of Multimedia</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/bombzod/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Bekzod} alt='Bekzod Ismatulla' />
          <div className='eboard-card__text'>
            <h1>Bekzod Ismatulla</h1>
            <h2>VP of External Affairs</h2>
          </div>
        </a>

      </div>
    </section>
  );
}

export default EBoard;
