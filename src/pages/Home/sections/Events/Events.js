import React from 'react';
import './Events.css';


const Events = () => {
  return (
    <section className="events-section" id="events">

      <div className="events-container">

        <div className='events-list'>
          <h1 className="events-title title">
            Upcoming Events
          </h1>

          <h2 className='events-list__header title'>
            Next GBM
          </h2>
          <p>
            September 7, 2023
          </p> <br />

          <h2 className='events-list__header title'>
            Fall Events
          </h2>
          <p>
            AASA <br />
            FAHM <br />
            AKA <br />
            DTJ <br />
            Adobowl <br />
            Semi-Formal
          </p>


          <h2 className='events-list__header title'>
            [WIP]
          </h2>

        </div>

        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F5C52A&ctz=America%2FNew_York&title=UFFSA%20Calendars&showTitle=0&showTz=0&showPrint=0&showTabs=0&src=YWFzdS51ZkBnbWFpbC5jb20&src=dWZmc2EuZGFuY2VAZ21haWwuY29t&color=%23D50000&color=%234285F4"
          className="events-calendar"
          title="calendar"
        />
      </div>
    </section>
  );
}

export default Events;