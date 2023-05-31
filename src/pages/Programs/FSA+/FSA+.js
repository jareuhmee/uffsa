import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import FsaPlusTitle from '../../../components/titles/FSA+ Title/FsaPlusTitle';

import './FSA+.css';

const FsaPlus = () => {  
    return (<>
        <div className='fsaplus-page'>

          <section className='fsaplus-hero'>
            <FsaPlusTitle />

            <div className='fsaplus-hero__buttons'>
              <div className='fsaplus-hero__fb-buttons'>
                <a href='https://www.facebook.com/groups/fsaacademics/' target="_blank" rel="noopener noreferrer">
                  <button>
                    <FaFacebook /> FSA+
                  </button>
                </a>

                <a href='https://www.facebook.com/groups/UFFSA.Alumni/' target="_blank" rel="noopener noreferrer">
                  <button>
                    <FaFacebook /> UFFSA Alumni
                  </button>
                </a>

                <a href='https://www.facebook.com/groups/FSAnetworking/' target="_blank" rel="noopener noreferrer">
                  <button>
                    <FaFacebook /> FSA Networking
                  </button>
                </a>
              </div>

              <a href='https://www.linkedin.com/company/filipino-student-association-at-uf/' target="_blank" rel="noopener noreferrer">
                <button>
                  <FaLinkedin /> Filipino Student Association at UF
                </button>
              </a>
            </div>
          </section>


          <section className='fsaplus-description'>

            <div className='fsaplus-sticky-container'>
                <div className='fsaplus-sticky-note'>
                  <h1 className='title'> Study Socials: </h1>
                  <p className='title'> Next Event: TBD </p>
                </div>

                <div className='fsaplus-sticky-note'>
                  <h1 className='title'> Class Connector </h1>
                  <p className='title'> Form </p>
                  <p className='title'> Spreadsheet </p>
                </div>

                <div className='fsaplus-sticky-note'>
                  <h1 className='title'> FSA+ Library </h1>
                  <p className='title'> Submission Form </p>
                  <p className='title'> Google Drive of Notes </p>
                </div>
            </div>

            <div className='temp-text-container'>
              FSA+ Description: Our career & academic support program<br /><br />
              Group chats (use uffsa discord): class recommendations, sharing surveys for papers/research projects, requested majors/tracks  <br /><br />
              Asian-Interest Professional Organizations: UF HEAL, UF SASE, UF AAUSLA, UF ABSA <br /><br />
              Other Resources: Scholarships, internships/research, career fairs, study edge, smokin notes  <br /><br />
            </div>

          </section>

        </div>
    </> 
  );
}

export default FsaPlus;