import React from 'react'; 
import './Archive.css';
import MangoFestImage from '../../../assets/images/mango.png'; 

const Archive = () => {
  return (
    <section className="archive-section" id="archive">
      <h1 className="media-title title">Archive</h1>

      <div className="archive-section__container">
        <div>
          <h1 className="title">Summer GBM — MangoFest 🥭</h1>

          <a
            href="https://www.canva.com/design/DAGr3gXNmoo/3b0GTO6thcfYp39Rmt94AQ/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="pdf-card">
              <img
                src={MangoFestImage}
                alt="Summer GBM — MangoFest🥭"
              />
            </div>
          </a>

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
              href="https://drive.google.com/drive/folders/1normIOfSoA_y-zEtaD3gOYmYrpI6zyvZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
