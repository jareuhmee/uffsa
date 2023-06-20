import React from 'react';
import logo from './logo.jpg';
import './ProjectLunchbox.css';

const ProjectLunchbox = () => {  
    return (<>

      <section className='projectLunchbox-hero'>
        {/* <img src={logo} alt='Logo' /> */}
        <p>PROJECT</p>
        <p>LUNCHBOX</p>
      </section>
    
      <section className='projectLunchbox-section'>
        <div className='podcast-container'>
          <iframe
            src="https://open.spotify.com/embed/show/4S2aANBcTLopN467oTCX8W?utm_source=generator"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className='podcast'
          />
        </div>


        {/* <div className="maffia-description">
          <div className='temp-text-container'>
            Embed podcast <br /><br />
            Link spotify and soundcloud <br /><br />
            Link philanthropy subpage, MAFFIA, chairs <br /><br />
          </div>
        </div> */}
      </section>


    </>
    );
}

export default ProjectLunchbox;