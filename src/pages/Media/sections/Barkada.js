import React from 'react';
import './Barkada.css';

const BARKADAS = [
  { src: 'DAFsVSRfJUQ', title: 'Fall GBM 1 Barkada' },
  { src: 'https://www.canva.com/design/DAGv01nF0_Q/gNM0lMEhnyV3wHR3BWyqdg/view', title: 'MangoFest Barkada' },
];

const toEmbedUrl = (input) => {
  if (/^https?:\/\//i.test(input)) {
    try {
      const u = new URL(input);
      const path = u.pathname.replace(/\/(edit|present|preview)$/, '/view').replace(/\/view$/, '/view');
      return `https://www.canva.com${path}?embed`;
    } catch {
      return input;
    }
  }
  const id = String(input).trim();
  return `https://www.canva.com/design/${id}/view?embed`;
};

const toViewUrl = (input) => {
  if (/^https?:\/\//i.test(input)) {
    try {
      const u = new URL(input);
      const path = u.pathname.replace(/\/(edit|present|preview)$/, '/view').replace(/\/view$/, '/view');
      const parts = path.split('/').filter(Boolean);
      const designId = parts[1] || '';
      return `https://www.canva.com${path}?utm_content=${designId}&utm_campaign=designshare&utm_medium=embeds&utm_source=link`;
    } catch {
      return input;
    }
  }
  const id = String(input).trim();
  return `https://www.canva.com/design/${id}/view?utm_content=${id}&utm_campaign=designshare&utm_medium=embeds&utm_source=link`;
};

const BarkadaCard = ({ src, title }) => (
  <div className="barkada-card">
    <div className="barkada-embed">
      <iframe
        loading="lazy"
        title={title}
        src={toEmbedUrl(src)}
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <a className="barkada-link" href={toViewUrl(src)} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </div>
);

const BarkadaNewsletter = () => {
  return (
    <section className="barkada-section" id="barkada">
      <h1 className="media-title title">Barkada Newsletter</h1>
      <div className="barkada-grid">
        {BARKADAS.map((b, i) => (
          <BarkadaCard key={i} src={b.src} title={b.title} />
        ))}
      </div>
    </section>
  );
};

export default BarkadaNewsletter;
