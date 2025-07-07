import React from 'react';
import './C-Board.css';

import Lynette from '../photos/lynette.jpg';
import Abby from '../photos/abby.jpg';
import Ava from '../photos/ava.jpeg';
import Azille from '../photos/azille.jpeg';
import Gahyun from '../photos/gahyun.jpeg';
import Jaden from '../photos/jaden.png';
import Jane from '../photos/jane.jpeg';
import Jasmine from '../photos/jasmine.jpeg';
import Jerry from '../photos/jerry.png';
import Kate from '../photos/kate.jpeg';
import Laura from '../photos/laura.jpeg';
import Luke from '../photos/luke.jpg';
import Mari from '../photos/mari.png';
import Justin from '../photos/justin.jpeg';
import Iya from '../photos/iya.JPG';
import Mason from '../photos/mason.png';
import Default from './default.png';

const CBoard = () => {
  return (
    <section className='cboard-section' id='cboard'>
      <h1 className='cboard-section-title title'>Chair Board</h1>
      <div className='cboard-container'>
        <a href='https://www.instagram.com/horton.elliejane/' target="_blank" rel="noopener noreferrer" className='cboard-card fundraising-card'>
          <img src={Jane} alt='Ellie-Jane Horton' />
          <div className='cboard-card__text'>
            <h1>Ellie-Jane Horton</h1>
            <h2>Fundraising Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/krzeczkowski/' target="_blank" rel="noopener noreferrer" className='cboard-card fundraising-card'>
          <img src={Kate} alt='Kathryn Rzeckzkowski' />
          <div className='cboard-card__text'>
            <h1>Kathryn Rzeckzkowski</h1>
            <h2>Fundraising Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/liamcervante/' target="_blank" rel="noopener noreferrer" className='cboard-card philanthropy-card'>
          <img src={Default} alt='Liam Cervantes' />
          <div className='cboard-card__text'>
            <h1>Liam Cervantes</h1>
            <h2>Philanthropy Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/lukevalianmalobay/' target="_blank" rel="noopener noreferrer" className='cboard-card dance-card'>
          <img src={Luke} alt='Luke Valian Malobay' />
          <div className='cboard-card__text'>
            <h1>Luke Valian Malobay</h1>
            <h2>Dance Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/mnavas/' target="_blank" rel="noopener noreferrer" className='cboard-card dance-card'>
          <img src={Mari} alt='María Elisa Navas' />
          <div className='cboard-card__text'>
            <h1>María Elisa Navas</h1>
            <h2>Dance Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/kusa.zz/' target="_blank" rel="noopener noreferrer" className='cboard-card senioradvisor-card'>
          <img src={Justin} alt='Justin Fernandez' />
          <div className='cboard-card__text'>
            <h1>Justin Fernandez</h1>
            <h2>Senior Advisor</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/iyagarcera/' target="_blank" rel="noopener noreferrer" className='cboard-card culture-card'>
          <img src={Iya} alt='Iya Garcera' />
          <div className='cboard-card__text'>
            <h1>Iya Garcera</h1>
            <h2>Culture Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/ava.pham/' target="_blank" rel="noopener noreferrer" className='cboard-card masscommunications-card'>
          <img src={Ava} alt='Ava Pham' />
          <div className='cboard-card__text'>
            <h1>Ava Pham</h1>
            <h2>Mass Communications Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/az.latras/' target="_blank" rel="noopener noreferrer" className='cboard-card masscommunications-card'>
          <img src={Azille} alt='Azille Latras' />
          <div className='cboard-card__text'>
            <h1>Azille Latras</h1>
            <h2>Mass Communications Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/gahyunkim/' target="_blank" rel="noopener noreferrer" className='cboard-card masscommunications-card'>
          <img src={Gahyun} alt='Gahyun Kim' />
          <div className='cboard-card__text'>
            <h1>Gahyun Kim</h1>
            <h2>Mass Communications Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/lynette_hemingway/' target="_blank" rel="noopener noreferrer" className='cboard-card webmaster-card'>
          <img src={Lynette} alt='Lynette Hemingway' />
          <div className='cboard-card__text'>
            <h1>Lynette Hemingway</h1>
            <h2>Webmaster Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/ajohnson20/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Abby} alt='Abigail Johnson' />
          <div className='cboard-card__text'>
            <h1>Abigail Johnson</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/asaclayan/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Default} alt='Alexandra Saclayan' />
          <div className='cboard-card__text'>
            <h1>Alexandra Saclayan</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/e.maneja/' target="_blank" rel="noopener noreferrer" className='cboard-card rush-card'>
          <img src={Default} alt='Elijah Maneja' />
          <div className='cboard-card__text'>
            <h1>Elijah Maneja</h1>
            <h2>Rush Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/masonbaptist/' target="_blank" rel="noopener noreferrer" className='cboard-card multimedia-card'>
          <img src={Mason} alt='Mason Baptist' />
          <div className='cboard-card__text'>
            <h1>Mason Baptist</h1>
            <h2>Multimedia Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/jerry.phan/' target="_blank" rel="noopener noreferrer" className='cboard-card multimedia-card'>
          <img src={Jerry} alt='Jerry Phan' />
          <div className='cboard-card__text'>
            <h1>Jerry Phan</h1>
            <h2>Multimedia Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/lauravuonglu/' target="_blank" rel="noopener noreferrer" className='cboard-card advocacy-card'>
          <img src={Laura} alt='Laura Vuong' />
          <div className='cboard-card__text'>
            <h1>Laura Vuong</h1>
            <h2>Advocacy Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/jadenramos/' target="_blank" rel="noopener noreferrer" className='cboard-card sports-card'>
          <img src={Jaden} alt='Jaden Ramos' />
          <div className='cboard-card__text'>
            <h1>Jaden Ramos</h1>
            <h2>Sports Chair</h2>
          </div>
        </a>
        <a href='https://www.instagram.com/jas.esca8/' target="_blank" rel="noopener noreferrer" className='cboard-card sports-card'>
          <img src={Jasmine} alt='Jasmine Escandor' />
          <div className='cboard-card__text'>
            <h1>Jasmine Escandor</h1>
            <h2>Sports Chair</h2>
          </div>
        </a>
      </div>
    </section>
  );
};

export default CBoard;
