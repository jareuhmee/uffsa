import React from 'react';
import './C-Board.css';

import Amada from '../photos/cboard/Amada.jpg'
import Ambrose from '../photos/cboard/Ambrose.jpg'
import Ana from '../photos/cboard/Ana.jpg'
import Gavin from '../photos/cboard/Gavin.jpg'
import Gracie from '../photos/cboard/Gracie.jpg'
import Kay from '../photos/cboard/Kay.JPG'
import Sabrina from '../photos/cboard/Sabrina.jpg'
import Brandon from '../photos/cboard/Brandon.jpg'
import Rayvin from '../photos/cboard/Rayvin.jpg'
import Reinalisa from '../photos/cboard/Reinalisa.jpg'
import Rocky from '../photos/cboard/Rocky.jpg'
import Ezequiel from '../photos/cboard/Ezequiel.jpg'
import Megan from '../photos/cboard/Megan.jpg'
import Wynn from '../photos/cboard/Wynn.JPG'
import Lynette from '../photos/cboard/Lynette.jpg'
import Jaden from '../photos/cboard/Jaden.jpg'
import Zoe from '../photos/cboard/Zoe.JPG'

import Default from './default.png';
import temp from '../../../components/Header/logo2.png';


const CBoard = () => {
  return (
    <section className='cboard-section' id='cboard'>
      <h1 className='cboard-section-title title'>Chair Board</h1>
      <div className='cboard-container'>
        <a href='https://www.instagram.com/brandon_almaria/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Brandon} alt='Brandon Almaria' />
          <div className='cboard-card__text'>
            <h1>Brandon Almaria</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/qracielucas/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Gracie} alt='Gracie Lucas' />
          <div className='cboard-card__text'>
            <h1> Gracie Lucas</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/tinfoilducks/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Default} alt='Christina Maribbay' />
          <div className='cboard-card__text'>
            <h1>Christina Maribbay</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/karl_dreyes/' target="_blank" rel="noopener noreferrer" className='cboard-card acheesyment-card'>
          <img src={Rocky} alt='Rocky Villanueva' />
          <div className='cboard-card__text'>
            <h1>Rocky Villanueva</h1>
            <h2>Senior Advisor</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/ace_linem/' target="_blank" rel="noopener noreferrer" className='cboard-card culture-card'>
          <img src={Default} alt='Aceline Manganti' />
          <div className='cboard-card__text'>
            <h1>Aceline Manganti</h1>
            <h2>Culture Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/amada.starr/' target="_blank" rel="noopener noreferrer" className='cboard-card culture-card'>
          <img src={Amada} alt='Amada Starr' />
          <div className='cboard-card__text'>
            <h1>Amada Starr</h1>
            <h2>Culture Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/palasiguegavin/' target="_blank" rel="noopener noreferrer" className='cboard-card culture-card'>
          <img src={Gavin} alt='Gavin Palasigue' />
          <div className='cboard-card__text'>
            <h1>Gavin Palasigue</h1>
            <h2>Culture Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/_hayden.pat/' target="_blank" rel="noopener noreferrer" className='cboard-card philanthropy-card'>
          <img src={Default} alt='Hayden Patalinghug' />
          <div className='cboard-card__text'>
            <h1>Hayden Patalinghug</h1>
            <h2>Philanthropy Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/ez_bau/' target="_blank" rel="noopener noreferrer" className='cboard-card philanthropy-card'>
          <img src={Ezequiel} alt='Ezequiel Bautista' />
          <div className='cboard-card__text'>
            <h1>Ezequiel Bautista</h1>
            <h2>Philanthropy Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/pl_avo/' target="_blank" rel="noopener noreferrer" className='cboard-card advocacy-card'>
          <img src={Sabrina} alt='Sabrina LaVopa' />
          <div className='cboard-card__text'>
            <h1>Sabrina LaVopa</h1>
            <h2>Advocacy Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/dana.j05/' target="_blank" rel="noopener noreferrer" className='cboard-card dance-card'>
          <img src={Default} alt='Dana Johnson' />
          <div className='cboard-card__text'>
            <h1>Dana Johnson</h1>
            <h2>Dance Coordinator</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/dana.j05/' target="_blank" rel="noopener noreferrer" className='cboard-card dance-card'>
          <img src={Default} alt='Lance Mallari' />
          <div className='cboard-card__text'>
            <h1>Lance Mallari</h1>
            <h2>Dance Coordinator</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/meganabando_/' target="_blank" rel="noopener noreferrer" className='cboard-card dance-card'>
          <img src={Megan} alt='Megan Abando' />
          <div className='cboard-card__text'>
            <h1>Megan Abando</h1>
            <h2>Dance Coordinator</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/ana_docuyanan' target="_blank" rel="noopener noreferrer" className='cboard-card sports-card'>
          <img src={Ana} alt='Ana Docuyanan' />
          <div className='cboard-card__text'>
            <h1>Ana Docuyanan</h1>
            <h2>Sports Coordinator</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/r.einalisa' target="_blank" rel="noopener noreferrer" className='cboard-card sports-card'>
          <img src={Reinalisa} alt='Reinalisa Anonuevo' />
          <div className='cboard-card__text'>
            <h1>Reinalisa Anonuevo</h1>
            <h2>Sports Coordinator</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/kaysiason/' target="_blank" rel="noopener noreferrer" className='cboard-card fundraising-card'>
          <img src={Kay} alt='Kayleen Siason' />
          <div className='cboard-card__text'>
            <h1>Kayleen Siason</h1>
            <h2>Fundraising Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/renvambry/' target="_blank" rel="noopener noreferrer" className='cboard-card fundraising-card'>
          <img src={Ambrose} alt='Ambrose Carbunar' />
          <div className='cboard-card__text'>
            <h1>Ambrose Carbunar</h1>
            <h2>Fundraising Chair</h2>
          </div>
        </a>
        <a href='' target="_blank" rel="noopener noreferrer" className='cboard-card multimedia-card'>
          <img src={Rayvin} alt='Rayvin Velasco' />
          <div className='cboard-card__text'>
            <h1>Rayvin Velasco</h1>
            <h2>Multimedia Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/haileyyphm/' target="_blank" rel="noopener noreferrer" className='cboard-card multimedia-card'>
          <img src={Default} alt=' Hailey Pham' />
          <div className='cboard-card__text'>
            <h1>Hailey Pham</h1>
            <h2>Multimedia Chair</h2>
          </div>
        </a>
        <a href='' target="_blank" rel="noopener noreferrer" className='cboard-card multimedia-card'>
          <img src={Wynn} alt='Wynn Iong' />
          <div className='cboard-card__text'>
            <h1>Wynn Iong</h1>
            <h2>Multimedia Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/zoezchu/' target="_blank" rel="noopener noreferrer" className='cboard-card masscom-card'>
          <img src={Zoe} alt='Zoe Chu' />
          <div className='cboard-card__text'>
            <h1>Zoe Chu</h1>
            <h2>Mass Comms. Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/lynette_hemingway/' target="_blank" rel="noopener noreferrer" className='cboard-card masscom-card'>
          <img src={Lynette} alt='Lynette Hemingway' />
          <div className='cboard-card__text'>
            <h1>Lynette Hemingway</h1>
            <h2>Mass Comms. Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/jaden.delapaz/' target="_blank" rel="noopener noreferrer" className='cboard-card masscom-card'>
          <img src={Jaden} alt='Jaden Delapaz' />
          <div className='cboard-card__text'>
            <h1>Jaden Delapaz</h1>
            <h2>Mass Comms. Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/mjuliannna/' target="_blank" rel="noopener noreferrer" className='cboard-card webmaster-card'>
          <img src={Default} alt='MJ Tady' />
          <div className='cboard-card__text'>
            <h1>MJ Tady</h1>
            <h2>Webmaster</h2>
          </div>
        </a>
      </div>
    </section>
  );
}

export default CBoard;