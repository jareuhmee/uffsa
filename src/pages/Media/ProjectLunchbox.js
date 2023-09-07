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
          <div className='podcast-vid'>
            <div className='vid-container'>
              {/* Use recap vid or AASA promo */}
              <iframe className='vid'
                width={1280}
                height={720}
                src="https://www.youtube.com/embed/kR7sjG_PDCA?si=vtbaAuSb7GzJjv7x"
                title="Project Lunchbox Episode 1: First Year Survival Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              />
            </div>
          </div>

          {/* <iframe
            src="https://open.spotify.com/embed/show/4S2aANBcTLopN467oTCX8W?utm_source=generator"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className='podcast'
          /> */}
        </div>
      </section>

    </>
    );
}

export default ProjectLunchbox;