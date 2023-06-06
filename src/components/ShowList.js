// src/components/ShowList.js

import React, { useState, useEffect } from 'react';
import { searchShows } from '../api';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await searchShows('all');
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      {shows.map((show) => (
        <div key={show.show.id}>
          {show.show.name}
          {show.show.summary}
          <button onClick={() => onSelectShow(show.show.id)}>View Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
