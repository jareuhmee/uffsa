import React from 'react'; 
import './Archive.css';
import MangoFestImage from '../../../assets/images/mango.png'; 

const Archive = () => {
  return (
    <>
      <section className="archive-section" id="archive">
        <h1 className="media-title title">Archive</h1>

        <div className="archive-section__container">
          <div>
            <h1 className="title">Summer GBM — MangoFest 🥭</h1>

       
            <div
              className="pdf-card"
              style={{
                width: '400px',     
                margin: '0 auto',   
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={MangoFestImage}
                alt="Summer GBM — MangoFest🥭"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Links */}
            <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
              <a
                href="https://www.canva.com/design/DAGr3gXNmoo/3b0GTO6thcfYp39Rmt94AQ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slides
              </a>
              {' | '}
              <a
                href="https://drive.google.com/drive/folders/1JoU_Pnrf-8zD-0mGk5ehn_ECkLcMM4g-?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Archive;
