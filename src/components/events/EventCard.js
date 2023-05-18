import React from 'react';
import './EventCard.css';



const EventCard = ({image, title, date, address, description}) => {
    return ( 
      <div className='event-card'>
        <div className='event-image-container'>
            <img className="event-image" src={image} alt="Event Image"/>
        </div>

        <div className='event-text'>
            <h3 className='event-date'>{date}</h3>
            <h1 className='event-title'>{title}</h1>
            <h2 className='event-address'>{address}</h2>

            <p className='event-description'>{description}</p>
        </div>

      </div>
  );
}

export default EventCard;