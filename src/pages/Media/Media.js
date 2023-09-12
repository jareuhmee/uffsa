import React from 'react';

import BarkadaNewsletter from './sections/Barkada';
import ProjectLunchbox from './sections/ProjectLunchbox';
import Archive from './sections/Archive';

import './Media.css';

const Media = () => {  
    return (
    <>
      <section className='media-hero'>
        <p> MEDIA </p>
      </section>

      <BarkadaNewsletter />

      <ProjectLunchbox />

      <Archive />
    </> 
  );
}

export default Media;