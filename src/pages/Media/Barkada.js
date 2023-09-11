import React from 'react';
import './Barkada.css';

const BarkadaNewsletter = () => {  
    return (<>
    <section className='barkada-hero'>
        <p>Barkada Newsletter</p>
      </section>

        <section className='barkada-section'>
          <div className='barkada-container'>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "154.5455%",
                paddingBottom: 0,
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                marginTop: "1.6em",
                marginBottom: "0.9em",
                overflow: "hidden",
                borderRadius: 8,
                willChange: "transform"
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAFsVSRfJUQ/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
            <a
              href="https://www.canva.com/design/DAFsVSRfJUQ/view?utm_content=DAFsVSRfJUQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              target="_blank"
              rel="noopener"
            >
              Fall GBM 1 Barkada
            </a>{" "}
          </div>
        </section>
    </> 
  );
}

export default BarkadaNewsletter;