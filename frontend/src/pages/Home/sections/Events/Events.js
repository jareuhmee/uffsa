import React from "react";
import "./Events.css";

import { HashLink } from "react-router-hash-link";
import { FaLink, FaInstagram, FaRegCalendar } from 'react-icons/fa';

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <h1 className="events-title title">☔ April Events ☔</h1>
        <div className="event-grid">
          <div className="event-card">
            <h2 className="event-card-title title">👤 Pinoy Note: Shadow GBM 👤</h2>
            <p className="event-card-description">
              Beware of the Notebook ✍️ and the Shinigami who likes Apples… See the shadows of current board members…⚫️ try to 
              find who is behind this in Death Note written with a Filipino twist. Are you ready to see the chaos of the 
              notebook⁉️ Come out to FSA’s Shadow GBM with Executive Board election nominations will be right after!!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Wednesday, April 1st</p>
              <p>📍 Location: CSE E222</p>
              <p>🚪 Doors Open: 5:30 PM</p>
              <p>🕑 Event Starts: 6:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DWUg5vXEbJz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">✏️ E-Board Nominations ✏️</h2>
            <p className="event-card-description">
              It’s that time of year! If you want to get involved on FSA’s executive board for the upcoming 2026-2027 school year, 
              make sure to come to our Shadow GBM and stay afterwards for nominations!
            </p>
            <p className="event-description-separator">⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆◯⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆</p>
            <div className="events-info">
              <p>📅 Date: Wednesday, April 1st</p>
              <p>📍 Location: CSE E222</p>
              <p>🕑 Event Starts: After Shadow GBM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DWcEbRlEYJ5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🎤 WIT Karaoke Social 🎤</h2>
            <p className="event-card-description">
              Are YOU interested in being one of the interns behind uffsa.net? 🧑‍💻 Do YOU like to sing? Good news! Come out 
              to our karaoke social to learn more about the program, meet current interns, and have a fun time! Even if you’re 
              not looking to join the program next semester, we still encourage you all to sing your heart out with us!
            </p>
            <p className="event-description-separator">-ˋˏ ༻❁༺༻❁༺༻❁༺༻❁༺༻❁༺ ˎˊ-</p>
            <div className="events-info">
              <p>📅 Date: Thursday, April 2nd</p>
              <p>📍 Location: Stage 7 Karaoke | 4110 SW 34th St</p>
              <p>🕑 Time: 7:00 - 9:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DWl-PHCDUoD/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🎾 Sports Social 🎾</h2>
            <p className="event-card-description">
              Join EMPRESS and the Filipino Student Association for a fun afternoon of movement and wellness. Meet new people and 
              support your well-being through exercise!
            </p>
            <p className="event-description-separator">*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚</p>
            <div className="events-info">
              <p>📅 Date: Sunday, April 5th</p>
              <p>📍 Location: Westside Recreation Center Basketball Courts</p>
              <p>🕑 Time: 2:00 - 4:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DWWdC5QEQDS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

        </div>
        <section className='events-description'>
          <div className='events-calendar__container' id='events'>
            <h1 className='title'>Events Calendar</h1>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=c_e54f2747e1492f344b5d9f1fff1fe7bad869036ae95ef33a8b49f04576a56fbc%40group.calendar.google.com&ctz=America%2FNew_York"
                className="events-calendar"
                title="calendar"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Events;