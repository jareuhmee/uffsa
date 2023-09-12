import React from 'react';
import './Archive.css';

const Archive = () => {  
    return (<>
          
          <section className="archive-section" id="archive">
            <h1 className='media-title title'>
              Archive
            </h1>

            <div className='archive-section__container'>
              

              <div>
                <h1 className='title'> Fall GBM 1 — Powerpuff Pinoys </h1>
                
                <div className='slides-container'>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingTop: "56.2500%",
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
                      src="https://www.canva.com/design/DAFrLum-lb0/view?embed"
                      allowFullScreen="allowfullscreen"
                      allow="fullscreen"
                    ></iframe>
                  </div>

                  <a
                    href="https://www.canva.com/design/DAFrLum-lb0/view?utm_content=DAFrLum-lb0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener"
                  >
                    Slides
                  </a>
                  {" | "}
                  <a
                    href="https://drive.google.com/drive/folders/1JoU_Pnrf-8zD-0mGk5ehn_ECkLcMM4g-?usp=drive_link"
                    target="_blank"
                    rel="noopener"
                  >
                    Photos
                  </a>

                </div>
                <br />
              </div>

              <div>
                <h1 className='title'> Old GBM Slides </h1>
                <a 
                  href='https://prezi.com/user/tmsul3egujuf/'
                  target="_blank"
                  rel="noopener"
                >
                  Part 1
                </a>
                {" | "}
                <a 
                  href='https://prezi.com/user/otpu-un8ug9w/'
                  target="_blank"
                  rel="noopener"
                >
                  Part 2
                </a>
                <br /><br />
              </div>

              
              <div>
                <h1 className='title'> Other </h1>
                <a 
                  href='https://vimeo.com/uffsaalumni'
                  target="_blank"
                  rel="noopener"
                >
                  FSA Documentary and More
                </a>
                <br /> <br />

                <a 
                  href='https://docs.google.com/document/d/13tK8iccWfOXyG9kFqucYMV4XaYlzVXd7aJGaccSacuM/'
                  target="_blank"
                  rel="noopener"
                > 
                  UFFSA Constitution
                </a>
              </div>

            </div>
          </section>
    </> 
  );
}

export default Archive;