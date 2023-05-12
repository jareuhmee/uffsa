import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  return (
    <div className="card-container">
        
      <Link to="/dance">
        <div className="card" id="dance-card">
          <button className='title'>DANCE</button>
        </div>
      </Link>

      <Link to="/culture">
        <div className="card" id="culture-card">
          <button className='title'>CULTURE</button>
        </div>
      </Link>

      <Link to="/sports">
        <div className="card" id="sports-card">
          <button className='title'>SPORTS</button>
        </div>
      </Link>

      <Link to="/philanthropy">
        <div className="card" id="philanthropy-card">
            <button className='title'>PHILANTHROPY</button>
        </div>
      </Link>

    </div>
  );
}

export default Cards;