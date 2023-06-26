import React from 'react';
import './ProjectLunchbox.css';

const ProjectLunchbox = () => {  
    return (<>

      <section className='projectLunchbox-hero'>
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
      </section>

    </>
    );
}

export default ProjectLunchbox;