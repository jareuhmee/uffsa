import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  return (
    <div className="card-container">
        
      <div className="card" id="dance-card">
        <Link to="/dance">
            <button className='title'>DANCE</button>
        </Link>
      </div>

      <div className="card" id="culture-card">
        <Link to="/culture">
            <button className='title'>CULTURE</button>
        </Link>
      </div>

      <div className="card" id="sports-card">
        <Link to="/sports">
            <button className='title'>SPORTS</button>
        </Link>
      </div>

      <div className="card" id="philanthropy-card">
        <Link to="/philanthropy">
            <button className='title'>PHILANTHROPY</button>
        </Link>
      </div>

    </div>
  );
}

export default Cards;