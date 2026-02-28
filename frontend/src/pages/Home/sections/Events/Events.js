import React from "react";
import "./Events.css";

import { HashLink } from "react-router-hash-link";
import { FaLink, FaInstagram, FaRegCalendar } from 'react-icons/fa';

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <h1 className="events-title title">💕 February Events 💕</h1>
        <div className="event-grid">
          <div className="event-card">
            <h2 className="event-card-title title">🎵 GBM 2: Mahal La Land 🎵</h2>
            <p className="event-card-description">
              Don’t waste your lovely night 🌙, come check out our second spring GBM and dance along with your fellow FSA members 
              at Mahal La Land! Join us for a night of singing tunes 🎤🎶, walking down a city of stars, and following your 
              dreams✨🌌💫. After we reach our “The End”, stick around for our RAKA Reveal, then join us for a bittersweet snack 
              at Blaze Pizza for a slice of luck to carry on with your life’s journey!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Monday, February 16th</p>
              <p>📍 Location: LIT 101</p>
              <p>🎵 Event Starts: 5:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DUoAQGFkRVq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">👾 Kirby's RAKA-Venture 👾</h2>
            <p className="event-card-description">
              Go on cool adventures like Kirby and his friends for RAKA 2026 (Ate, Kuya, Ading - translated from Big Sister, 
              Big Brother, Little Sibling)! RAKA Week is FSA’s annual tradition of forging new bonds with Ates and Kuyas who 
              want to help their Adings branch out into their dreamland! Whether you’re more of a star, waddledee, or anyone in 
              between, join us for our RAKA reveal and second day activity with your new bigs. Apply now and gain pamilya–Kirby style!
            </p>
            <p className="event-description-separator">⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆◯⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆</p>
            <div className="events-info">
              <p>📅 Date: February 16-17th</p>
              <p>📍 Location: Retiz Room 2215</p>
              <p>🍴 Event Starts: After GBM 2</p>
            </div>
            <a
              href="https://www.instagram.com/p/DT3WFhGEbM1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🔊 Woodser Weekend 🔊</h2>
            <p className="event-card-description">
              Maybe exams are stressing you out 😵‍💫 and your mind needs some clarity 🙂‍↕️. Don’t ISOlate yourself in your room 
              stressed ❌ — instead, stay the night at this years…WOODSER WEEKEND happening on Saturday, February 21st. 
              Enjoy a night full of activities 🎯, bonding along the warm campfire 🔥, and did we mention FREE FOOD??
              With trails to embark 🌿, the night to light up 🌌, and springs to relax and enjoy, there’s something for 
              everyone to enjoy!
            </p>
            <p className="event-description-separator">*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚</p>
            <div className="events-info">
              <p>📅 Date: February 21-22nd</p>
              <p>📍 Location: Ichetuknee Cabins</p>
              <p>💌 Event Starts: 6:30 - 7:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DUD8w45kSFG/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">‼️ Barrio ‼️</h2>
            <p className="event-card-description">
              Barrio Fiesta is the University of Florida Filipino Student Association’s biggest cultural event of the spring 
              semester. Members of UFFSA and the Gainesville community come together to celebrate the Filipino culture through 
              a variety of performances like traditional dance, singing, and many more. More info coming soon!
            </p>
            <p className="event-description-separator">-ˋˏ ༻❁༺༻❁༺༻❁༺༻❁༺༻❁༺ ˎˊ-</p>
            <div className="events-info">
              <p>📅 Date: Saturday, February 28th</p>
            </div>
            <a
              href="https://www.instagram.com/p/DURrC36jVS6/"
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