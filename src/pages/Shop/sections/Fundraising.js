import React from 'react';
import './Fundraising.css';

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
          <div>
            <h2 className='title'>[COMING SOON]</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fundraising;