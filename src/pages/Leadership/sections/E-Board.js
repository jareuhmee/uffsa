import React from 'react';
import './E-Board.css';

import Bree from '../photos/eboard/Bree.jpg'
import Jenzen from '../photos/eboard/Jenzen.jpg';
import Rafael from '../photos/eboard/Rafael.jpg';
import Sara from '../photos/eboard/Sara.jpg'
import Ceyan from '../photos/eboard/Ceyan.jpg';
import Matt from '../photos/eboard/Matt.jpg'
import Theresse from '../photos/eboard/Theresse.jpg';
import Juliana from '../photos/eboard/Juliana.JPG'
import Brian from '../photos/eboard/Brian.JPG'
import Sam from '../photos/eboard/Sam.jpg'
import Kori from '../photos/eboard/Kori.JPG'
import Default from './default.png';

import temp from '../../../components/Header/logo2.png';


const EBoard = () => {
  return (
    <section className='eboard-section' id='eboard'>
      <h1 className='eboard-section-title title'>Executive Board</h1>
      <div className='eboard-container'>
        <a href='https://www.instagram.com/rsunn_7/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Rafael} alt='Rafael Sunga' />
          <div className='eboard-card__text'>
            <h1>Rafael Sunga</h1>
            <h2>Executive President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/jenzennnnnn/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Jenzen} alt='Jenzen Fernan' />
          <div className='eboard-card__text'>
            <h1>Jenzen Fernan</h1>
            <h2>Executive Vice President</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/bree.ocampo/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Bree} alt='Bree Ocampo' />
          <div className='eboard-card__text'>
            <h1>Bree Ocampo</h1>
            <h2>Vice President of Finance</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/tessar_29/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Theresse} alt='Theresse Racpan' />
          <div className='eboard-card__text'>
            <h1>Theresse Racpan</h1>
            <h2>Vice President of Internal Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/julianaxisabel/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Juliana} alt='Juliana Delgado' />
          <div className='eboard-card__text'>
            <h1>Juliana Delgado</h1>
            <h2>Vice President of Cultural Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/bluebrainedbeing/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Brian} alt='Brian Paz' />
          <div className='eboard-card__text'>
            <h1>Brian Paz</h1>
            <h2>Vice President of Cultural Affairs</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/_ceyan/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Ceyan} alt='Ceyan Ang' />
          <div className='eboard-card__text'>
            <h1>Ceyan Ang</h1>
            <h2>Vice President of Mass Communications</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/sarabellum__/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Sara} alt='Sara Escobar' />
          <div className='eboard-card__text'>
            <h1>Sara Escobar</h1>
            <h2>Vice President of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/samanthabwin/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Sam} alt='Samantha Baldwin' />
          <div className='eboard-card__text'>
            <h1>Samantha Baldwin</h1>
            <h2>Vice President of Membership</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/yeematt/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Matt} alt='Matthew Yee' />
          <div className='eboard-card__text'>
            <h1>Matthew Yee</h1>
            <h2>Vice President of Multimedia</h2>
          </div>
        </a>

        <a href='https://www.instagram.com/korixverges/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
          <img src={Kori} alt='Kori Verges' />
          <div className='eboard-card__text'>
            <h1>Kori Verges</h1>
            <h2>Vice President of External Affairs</h2>
          </div>
        </a>
      </div>
    </section>
  );
}

export default EBoard;