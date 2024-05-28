import React from 'react';
import './Apparel.css';
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.png';

const Apparel = () => {
  return (
    <>
      <section className="apparel-section" id="apparel">
        <h1 className='shop-title title'>Apparel</h1>
        <br></br>
        <div className='apparel-vid'>
          <div className='vid-container'>
            <iframe
              className='vid'
              width={573}
              height={322}
              src="https://www.youtube.com/embed/Nz9HftguTRc"
              title="✰ UFFSA Recap // 2017-2018 ✰"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <br></br>
          <div className='apparel-section__container'>
            <div>
              <div className='slides-container'>
                <div className='image-container'>
                  <img src={Image1} alt="Image 1" className="apparel-image"/>
                  <p className='image-caption'>ASA 2016 Apparel</p> 
                </div>
                <div className='image-container'>
                  <img src={Image2} alt="Image 2" className="apparel-image"/>
                  <p className='image-caption'>ASA 2016 Apparel</p> 
                </div>
                <div className='image-container'>
                  <img src={Image3} alt="Image 3" className="apparel-image"/>
                  <p className='image-caption'>Woodser 2017 </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apparel;
