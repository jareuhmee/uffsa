import React from 'react';
import './E-Board.css';

import Andrew from '../photos/eboard/Andrew.jpg';
import Elyza from '../photos/eboard/Elyza.jpg';
import Jannila from '../photos/eboard/Jannila.jpg';
import Jenzen from '../photos/eboard/Jenzen.jpg';
import Johannah from '../photos/eboard/Johannah.jpg';
import Nicelle from '../photos/eboard/Nicelle.jpg';
import Rafael from '../photos/eboard/Rafael.jpg';
import Rayvin from '../photos/eboard/Rayvin.jpg';
import Rhyse from '../photos/eboard/Rhyse.jpg';
import Rocky from '../photos/eboard/Rocky.jpg';
import Theresse from '../photos/eboard/Theresse.jpg';
import Thomas from '../photos/eboard/Thomas.jpg';

import temp from '../../../components/Header/logo2.png';


const EBoard = () => {
  return (
    <section className='eboard-section' id='eboard'>
      <h1 className='eboard-section-title title'>Executive Board</h1>
      <div className='eboard-container'>
        <a href='https://www.instagram.com/rockyvillanuevaa/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Rocky} alt='Rocky Villanueva' />
          <div className='eboard-card__text'>
            <h1>Rocky Villanueva</h1>
            <h2>Executive President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/_andrew_bishop_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Andrew} alt='Andrew Bishop' />
          <div className='eboard-card__text'>
            <h1>Andrew Bishop</h1>
            <h2>Executive Vice President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/tessar_29/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Theresse} alt='Theresse Racpan' />
          <div className='eboard-card__text'>
            <h1>Theresse Racpan</h1>
            <h2>Vice President of Finance</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/johannahtador/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Johannah} alt='Johannah Tador' />
          <div className='eboard-card__text'>
            <h1>Johannah Tador</h1>
            <h2>Vice President of Internal Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/nhiwah/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Jannila} alt='Jannila De Asis' />
          <div className='eboard-card__text'>
            <h1>Jannila De Asis</h1>
            <h2>Vice President of Cultural Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/jenzennnnnn/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Jenzen} alt='Jenzen Fernan' />
          <div className='eboard-card__text'>
            <h1>Jenzen Fernan</h1>
            <h2>Vice President of Cultural Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/donutboyeats/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Thomas} alt='Thomas Kaw' />
          <div className='eboard-card__text'>
            <h1>Thomas Kaw</h1>
            <h2>Vice President of Mass Communications</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/ekyza.uwu/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Elyza} alt='Elyza Navarro' />
          <div className='eboard-card__text'>
            <h1>Elyza Navarro</h1>
            <h2>Vice President of Mass Communications</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/rhysesampang/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Rhyse} alt='Rhyse Sampang' />
          <div className='eboard-card__text'>
            <h1>Rhyse Sampang</h1>
            <h2>Vice President of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/rsunn_7/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Rafael} alt='Rafael Sunga' />
          <div className='eboard-card__text'>
            <h1>Rafael Sunga</h1>
            <h2>Vice President of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/_stingrayvin_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Rayvin} alt='Rayvin Velasco' />
          <div className='eboard-card__text'>
            <h1>Rayvin Velasco</h1>
            <h2>Executive President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/nicellec/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Nicelle} alt='Nicelle Casenas' />
          <div className='eboard-card__text'>
            <h1>Nicelle Casenas</h1>
            <h2>Vice President of External Affairs</h2>
          </div>
        </a>
      </div>
    </section>
  );
}

export default EBoard;