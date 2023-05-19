import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './EventCard.css';

const EventCard = ({image, title, date, address, description}) => {
    return ( 
      <div className='event-card'>
        <div className='event-card-container' />

        
        <img className="event-image" src={image} alt="Event"/>

        <div className='event-text-container'>
            <h1 className='event-title'>{title}</h1>
            <h2 className='event-date'>{date}</h2>
            <h3 className='event-address'> <FaMapMarkerAlt /> {address}</h3>

            <p className='event-description'>{description}</p>
        </div>

      </div>
  );
}

export default EventCard;