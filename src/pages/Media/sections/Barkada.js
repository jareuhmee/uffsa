import React from 'react';
import './Barkada.css';

// Add new Barkadas here (just append an object)
const BARKADAS = [
  { id: 'DAFsVSRfJUQ', title: 'Fall GBM 1 Barkada' },
  { id: 'DAGQ4praPPg', title: 'Summer GBM Barkada' },
  // { id: 'NEW_ID_HERE', title: 'Your Next Barkada' },
];

// Helper to build Canva URLs
const embedUrl = (id) => `https://www.canva.com/design/${id}/view?embed`;
const viewUrl  = (id) => `https://www.canva.com/design/${id}/view?utm_content=${id}&utm_campaign=designshare&utm_medium=embeds&utm_source=link`;

const BarkadaCard = ({ id, title }) => (
  <div className="barkada-card">
    <div className="barkada-embed">
      <iframe
        loading="lazy"
        title={title}
        src={embedUrl(id)}
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: '0' }}
      />
    </div>
    <a className="barkada-link" href={viewUrl(id)} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </div>
);

const BarkadaNewsletter = () => {
  return (
    <section className="barkada-section" id="barkada">
      <h1 className="media-title title">Barkada Newsletter</h1>

      <div className="barkada-grid">
        {BARKADAS.map((b) => (
          <BarkadaCard key={b.id} id={b.id} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default BarkadaNewsletter;
