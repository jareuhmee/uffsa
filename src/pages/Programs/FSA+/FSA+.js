import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import FsaPlusTitle from '../../../components/titles/FSA+ Title/FsaPlusTitle';

import HEAL from './org logos/HEAL.png';
import SASE from './org logos/SASE.png';
import AAUSLA from './org logos/AAUSLA.png';
import ABSA from './org logos/ABSA.png';

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


          <section className='fsaplus-main-resources'>
            <h1 className='fsaplus-main-resources-title title'>FSA+ Resources</h1>

            <div className='fsaplus-sticky-container'>
                <div className='fsaplus-sticky-note'>
                  <h1 className='title'> Study Socials </h1>
                  <p className='title'> Next Event: TBD </p>
                  <p className='title'> Location: TBD </p>
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
          </section>


          <section className='fsaplus-other-orgs'>

            <div className='fsaplus-other-orgs__board'>

              <h1 className='fsaplus-other-orgs-title title'>Asian-Interest Professional Organizations</h1>

              <div className='fsaplus-org-container'>
                <a href='https://www.instagram.com/ufheal/' target="_blank" rel="noopener noreferrer" className='fsaplus-org-card'>
                  <h1 className='title'>UF HEAL</h1>
                  <img src={HEAL} alt='HEAL' />
                </a>

                <a href='https://www.instagram.com/ufsase/' target="_blank" rel="noopener noreferrer" className='fsaplus-org-card'>
                  <h1 className='title'>UF SASE</h1>
                  <img src={SASE} alt='SASE' />
                </a>

                <a href='https://www.instagram.com/uf_aausla/' target="_blank" rel="noopener noreferrer" className='fsaplus-org-card'>
                  <h1 className='title'>UF AAUSLA</h1>
                  <img src={AAUSLA} alt='AAUSLA' />
                </a>

                <a href='https://www.instagram.com/uf.absa/' target="_blank" rel="noopener noreferrer" className='fsaplus-org-card'>
                  <h1 className='title'>UF ABSA</h1>
                  <img src={ABSA} alt='ABSA' />
                </a>
              </div>

            </div>
          </section>


          <section className='fsaplus-description'>
            <div className='temp-text-container'>
              FSA+ Description: Our career & academic support program<br /><br />
              Group chats (use uffsa discord): class recommendations, sharing surveys for papers/research projects, requested majors/tracks  <br /><br />
              Other Resources: Scholarships, internships/research, career fairs, study edge, smokin notes  <br /><br />
            </div>
          </section>

        </div>
    </> 
  );
}

export default FsaPlus;