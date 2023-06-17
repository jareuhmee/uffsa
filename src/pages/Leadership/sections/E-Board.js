import React from 'react';
import './E-Board.css';

import temp from '../../../components/Header/logo2.png'

import EVP from '../photos/eboard/evp.jpeg';
import VPF from '../photos/eboard/vpf.jpeg';
import IVP from '../photos/eboard/ivp.jpeg';
import VPMC from '../photos/eboard/vpmc.jpeg';
import VPM2 from '../photos/eboard/vpm2.jpeg';
import VPMM from '../photos/eboard/vpmm.jpeg';
import VPEA from '../photos/eboard/vpea.jpeg';

const EBoard = () => {  
    return (
        <section className='eboard-section' id='eboard'>
            <h1 className='eboard-section-title title'>Executive Board</h1>
            <div className='eboard-container'>
                <a href='https://www.instagram.com/rockyvillanuevaa/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={temp} alt='Executive President' />
                  <div className='cboard-card__text'>
                    <h1>Rocky Villanueva</h1>
                    <h2>Executive President</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/_andrew_bishop_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={EVP} alt='Executive Vice President' />
                  <div className='cboard-card__text'>
                    <h1>Andrew Bishop</h1>
                    <h2>Executive Vice President</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/tessar_29/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={VPF} alt='Vice President of Finance' />
                  <div className='cboard-card__text'>
                    <h1>Theresse Racpan</h1>
                    <h2>Vice President of Finance</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/johannahtador/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={IVP} alt='Vice President of Internal Affairs' />
                  <div className='cboard-card__text'>
                    <h1>Johannah Tador</h1>
                    <h2>Vice President of Internal Affairs</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/nhiwah/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={temp} alt='Vice President of Cultural Affairs' />
                  <div className='cboard-card__text'>
                    <h1>Jannila De Asis</h1>
                    <h2>Vice President of Cultural Affairs</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/jenzennnnnn/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={temp} alt='Vice President of Cultural Affairs' />
                  <div className='cboard-card__text'>
                    <h1>Jenzen Fernan</h1>
                    <h2>Vice President of Cultural Affairs</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/donutboyeats/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={VPMC} alt='Vice President of Mass Communications' />
                  <div className='cboard-card__text'>
                    <h1>Thomas Kaw</h1>
                    <h2>Vice President of Mass Communications</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/ekyza.uwu/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={temp} alt='Vice President of Mass Communications' />
                  <div className='cboard-card__text'>
                    <h1>Elyza Navarro</h1>
                    <h2>Vice President of Mass Communications</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/rhysesampang/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={temp} alt='Vice President of Membership' />
                  <div className='cboard-card__text'>
                    <h1>Rhyse Sampang</h1>
                    <h2>Vice President of Membership</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/rsunn_7/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={VPM2} alt='Vice President of Membership' />
                  <div className='cboard-card__text'>
                    <h1>Rafael Sunga</h1>
                    <h2>Vice President of Membership</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/_stingrayvin_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={VPMM} alt='Vice President of Multimedia' />
                  <div className='cboard-card__text'>
                    <h1>Rayvin Velasco</h1>
                    <h2>Executive President</h2>
                  </div>
                </a>

                <a href='https://www.instagram.com/nicellec/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <img src={VPEA} alt='Vice President of External Affairs' />
                  <div className='cboard-card__text'>
                    <h1>Nicelle Casenas</h1>
                    <h2>Vice President of External Affairs</h2>
                  </div>
                </a>
            </div>
        </section>
    );
}

export default EBoard;