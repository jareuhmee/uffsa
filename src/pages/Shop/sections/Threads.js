import React from 'react';
import './Threads.css';

const Threads = () => {
  return (
    <>
      <section className="threads-section" id="threads">
        <h1 className='shop-title title'>
          Threads of Hope
        </h1>
        <div className="threads-desc">
          <h2>Supporting a better future for families in the Philippines.</h2>
          <br></br>
          UFFSA stands with families in the Philippines who face the harsh realities of poverty, where children are often pushed into desperate situations just to provide for their families. In the face of such challenges, we believe in providing dignified work opportunities that allow families to stay together, avoid exploitation, and pursue education, thus breaking the cycle of poverty.
          <br></br>
          <br></br>
          There is still much more to be done, and your donation and time can make a significant difference in the lives of these families. Please consider supporting UFFSA's efforts to empower communities and create lasting change. Your contribution will help us continue our mission and bring hope to those in need.
          <br></br>
          <br></br>
        </div>
        <div className='threads-button'>
          <a href='https://threadsofhope.com/about/#:~:text=Threads%20of%20Hope%20is%20a,basic%20needs%20for%20their%20families.' target="_blank" rel="noopener noreferrer">
            <button className="threads-button title">
              Threads of Hope
            </button>
          </a>
        </div>
      </section>   
    </>
  );
}

export default Threads;
