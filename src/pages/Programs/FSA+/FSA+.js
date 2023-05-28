import React from 'react';
import FsaPlusTitle from '../../../components/titles/FSA+ Title/FsaPlusTitle';

import './FSA+.css';

const FsaPlus = () => {  
    return (<>
        <div className='fsaplus-page'>

          <section className='fsaplus-hero'>
            <FsaPlusTitle />
          </section>


          <div className='fsaplus-description'>
            <div className='temp-text-container'>
              FSA+ Description: Our academic and career support program<br /><br />
              Embed Class Connector Form & Spreadsheet (Members can submit schedules to find others taking same courses) <br /><br />
              Study Social Dates — Collaborate with Membership <br /><br />
              FB Pages: FSA+ FaceBook, FSA Networking, UFFSA Alumni <br /><br />
              <a href='https://www.linkedin.com/company/filipino-student-association-at-uf/'>UFFSA LinkedIn</a> <br /><br />
              Asian-Interest Professional Organizations: UF HEAL, UF SASE, UF AAUSLA, UF ABSA <br /><br />
              Other Resources: Scholarships, internships, drive of packets/notes <br /><br />
            </div>
          </div>
        </div>
    </> 
  );
}

export default FsaPlus;