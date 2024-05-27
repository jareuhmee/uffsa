import React from 'react';
import Apparel from './sections/Apparel';
import Fundraising from './sections/Fundraising';
import Threads from './sections/Threads';
import './Shop.css';

const Shop = () => {
  return (
    <>
    <div className='shop-main'>
      <section className='shop-sub'>
        <p> SHOP </p>
      </section>
        <div className='shop-description'>
          <br />
        </div>
        <Fundraising />
        <Apparel />
        <Threads />
      </div>
    </>
  );
}

export default Shop;