import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  return (
    <section className="pillars-section">
      <h1 className="pillars-title">Our Pillars</h1>

      <div className="card-container">
          
        <Link to="/dance">
          <div className="card" id="dance-card">
            <h1 className='card-title'>DANCE</h1>
          </div>
        </Link>

        <Link to="/culture">
          <div className="card" id="culture-card">
            <h1 className='card-title'>CULTURE</h1>
          </div>
        </Link>

        <Link to="/sports">
          <div className="card" id="sports-card">
            <h1 className='card-title'>SPORTS</h1>
          </div>
        </Link>

        <Link to="/philanthropy">
          <div className="card" id="philanthropy-card">
              <h1 className='card-title'>PHILANTHROPY</h1>
          </div>
        </Link>

      </div>
    </section>
    
  );
}

export default Cards;