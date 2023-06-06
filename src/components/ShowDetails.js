// src/components/ShowDetails.js

import React from 'react';
import MovieBookingForm from '../components/MovieBookingForm';

const ShowDetails = ({ show, onBackClick }) => {
  return (
    <div className="show-details-container">
      <img className="show-details-image" src={show.image?.original} alt={show.name} />
      <h2 className="show-details-title">{show.name}</h2>
      <h5 className="show-details-summary">{show.summary}</h5>
      <button className="show-details-button" onClick={onBackClick}>
        Back
      </button>
      <MovieBookingForm movieName={show.name} />
    </div>
  );
};

export default ShowDetails;

