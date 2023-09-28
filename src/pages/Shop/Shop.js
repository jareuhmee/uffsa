import React from 'react';

import { IoLogoVenmo } from "react-icons/io5";

import './Shop.css';

const Shop = () => {  
    return (<>
        <div>
          <div className="shop-description">
            <div className='temp-text-container'>
              <h1>
                [WIP]
              </h1>
              Fundraising event info <br /><br />
              UFFSA Apparel forms <a href='https://sites.google.com/view/uffsa-apparel/'>[OLD SITE]</a> <br /><br />
              Threads of Hope / <a href='http://uffsahaiyan.weebly.com/'>Philanthropy efforts</a> <br /><br />
              
              <a href='https://account.venmo.com/u/uffsafinance' target="_blank" rel="noopener noreferrer">
                  <button className='shop-button'>
                      <IoLogoVenmo /> Venmo
                  </button>
              </a>
            </div>
          </div>
        </div>
    </> 
  );
}

export default Shop;