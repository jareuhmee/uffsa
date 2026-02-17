import React from 'react';
import './Fundraising.css';

import image1 from './photos/image1.jpeg';
import image2 from './photos/image2.jpeg';
import image3 from './photos/image3.jpeg';
const Fundraising = () => {
  const style = {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: 8,
    willChange: 'transform',
  };

  return (
    <>
      <section className="fundraising-section" id="fundraising">
        <h1 className='shop-title title'>
          Fundraising Events
        </h1>
        <div className='fundraising-container'>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
            <img
              src={image1}
              alt="Fundraising Event 1"
              style={{ maxWidth: '70%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)', marginTop: '20px' }}
            />
            <img
              src={image2}
              alt="Fundraising Event 2"
              style={{ maxWidth: '70%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)', marginTop: '20px' }}
            />
            <img
              src={image3}
              alt="Fundraising Event 3"
              style={{ maxWidth: '70%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)', marginTop: '20px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}


export default Fundraising;