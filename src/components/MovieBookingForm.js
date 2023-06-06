// src/components/MovieBookingForm.js

import React, { useState } from 'react';

const MovieBookingForm = ({ movieName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form submission logic or save the data to local/session storage
    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    // Clear the form inputs
    setName('');
    setEmail('');

    window.alert('Form submitted successfully!');
  };

  return (
    <div className="movie-booking-form-container">
      <h3 className="movie-booking-form-title">Movie Booking Form</h3>
      <form onSubmit={handleSubmit}>
        <label className="movie-booking-form-label">Movie Name:</label>
        <input
          className="movie-booking-form-input"
          type="text"
          value={movieName}
          readOnly
        />

        <label className="movie-booking-form-label">Your Name:</label>
        <input
          className="movie-booking-form-input"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label className="movie-booking-form-label">Email:</label>
        <input
          className="movie-booking-form-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <button className="movie-booking-form-button" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default MovieBookingForm;

