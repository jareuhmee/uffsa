import React from 'react';
import './E-Board.css';

import temp from '../../../components/Header/logo2.png'

import EVP from '../photos/evp.jpeg';
import VPF from '../photos/vpf.jpeg';
import IVP from '../photos/ivp.jpeg';
import VPMC from '../photos/vpmc.jpeg';
import VPM2 from '../photos/vpm2.jpeg';
import VPMM from '../photos/vpmm.jpeg';
import VPEA from '../photos/vpea.jpeg';

const EBoard = () => {  
    return (
        <section className='eboard-section' id='eboard'>
            <h1 className='eboard-section-title title'>Executive Board</h1>
            <div className='eboard-container'>
                <a href='https://www.instagram.com/rockyvillanuevaa/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Rocky Villanueva</h1>
                  <img src={temp} alt='Executive President' />
                  <h2>Executive President</h2>
                </a>

                <a href='https://www.instagram.com/_andrew_bishop_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Andrew Bishop</h1>
                  <img src={EVP} alt='Executive Vice President' />
                  <h2>Executive Vice President</h2>
                </a>

                <a href='https://www.instagram.com/tessar_29/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Theresse Racpan</h1>
                  <img src={VPF} alt='Vice President of Finance' />
                  <h2>Vice President of Finance</h2>
                </a>

                <a href='https://www.instagram.com/johannahtador/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Johannah Tador</h1>
                  <img src={IVP} alt='Vice President of Internal Affairs' />
                  <h2>Vice President of Internal Affairs</h2>
                </a>

                <a href='https://www.instagram.com/nhiwah/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Jannila De Asis</h1>
                  <img src={temp} alt='Vice President of Cultural Affairs' />
                  <h2>Vice President of Cultural Affairs</h2>
                </a>

                <a href='https://www.instagram.com/jenzennnnnn/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Jenzen Fernan</h1>
                  <img src={temp} alt='Vice President of Cultural Affairs' />
                  <h2>Vice President of Cultural Affairs</h2>
                </a>

                <a href='https://www.instagram.com/donutboyeats/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Thomas Kaw</h1>
                  <img src={VPMC} alt='Vice President of Mass Communications' />
                  <h2>Vice President of Mass Communications</h2>
                </a>

                <a href='https://www.instagram.com/ekyza.uwu/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Elyza Navarro</h1>
                  <img src={temp} alt='Vice President of Mass Communications' />
                  <h2>Vice President of Mass Communications</h2>
                </a>

                <a href='https://www.instagram.com/rhysesampang/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Rhyse Sampang</h1>
                  <img src={temp} alt='Vice President of Membership' />
                  <h2>Vice President of Membership</h2>
                </a>

                <a href='https://www.instagram.com/rsunn_7/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Rafael Sunga</h1>
                  <img src={VPM2} alt='Vice President of Membership' />
                  <h2>Vice President of Membership</h2>
                </a>

                <a href='https://www.instagram.com/_stingrayvin_/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Rayvin Velasco</h1>
                  <img src={VPMM} alt='Vice President of Multimedia' />
                  <h2>Vice President of Multimedia</h2>
                </a>

                <a href='https://www.instagram.com/nicellec/' target="_blank" rel="noopener noreferrer" className='eboard-card'>
                  <h1>Nicelle Casenas</h1>
                  <img src={VPEA} alt='Vice President of External Affairs' />
                  <h2>Vice President of External Affairs</h2>
                </a>
            </div>
        </section>
    );
}

export default EBoard;