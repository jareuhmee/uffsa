import React from "react";
import "./Events.css";

import { HashLink } from "react-router-hash-link";

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <div className="events-list">
          <h1 className="events-title title">Upcoming Events</h1>

          <h2 className="events-list__header title">☀️Summer B Edition: GoFest!☀️</h2>
          <p>
            <p>
            Want to join in on the fun but have no idea what’s going on? 
            Have no fear, the NMG is here! We’d love to have you at our events this GoFest weekend, so come check it out!
            Make sure to check the main post on <strong>@uffsa’s</strong> page and follow <strong>@uffsafirst_years </strong>for future guides and first-year posts‼️
            </p>

            𖤓°⋆.ೃ࿔*:･𖤓°⋆.ೃ࿔*:･𖤓°⋆.ೃ࿔*:･

          </p>
          <div className="events-info">
            <p>📅 Date: Thursday, March 28</p>
            <p>📍 Location: McCarty Hall A G186</p>
            <p>🚪 Doors Open: 5:30 PM</p>
            <p>🌟 Show Starts: 6:00 PM</p>
          </div>
          <br />
          <a
            href="https://www.instagram.com/p/DL5cY0YOX_o/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="events-button">Instagram Post</button>
          </a>
          {/* <a
            href="https://docs.google.com/spreadsheets/d/1N9__exTivZmFryQ-6OSXCSmtiF4rHmO8OLfjp8rFMP8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="events-button">Voter Eligibility</button>
          </a> */}
          <br />

          {/* <h2 className="events-list__header title">Last GBM</h2>
          <HashLink smooth to="/media#archive">
            Powerpuff Pinoys
          </HashLink>
          <br /> */}

          {/* <h2 className='events-list__header title'>
            Fall Events
          </h2>
          <p>
            AASA <br />
            FAHM <br />
            AKA <br />
            DTJ <br />
            Adobowl <br />
            Semi-Formal
          </p> */}
        </div>

        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F5C52A&ctz=America%2FNew_York&showPrint=0&showDate=1&showNav=1&showTitle=0&showTabs=0&showCalendars=1&showTz=0&src=NjliZGNmZjFlOWY2ZjUxZDNkNmM4MTYzNjdkNGFjOTZiYmY2YjJlYTEwMGE0YTQ1MmRiZjljZDlkMzg4ZDU5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NmNjZDhjNjliZTZjOGNiOTllYjk0ZDNmY2I1MGU3ODlkMmRjMGYzODBlYTFlYzdiNTI1MDRhNTViYWM5NmY1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dWZmc2EuZGFuY2VAZ21haWwuY29t&color=%23E4C441&color=%237986CB&color=%23E67C73"
          className="events-calendar"
          title="calendar"
        />
      </div>
    </section>
  );
};

export default Events;
