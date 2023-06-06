
import React, { useState, useEffect } from 'react';
import ShowDetails from './components/ShowDetails';
import ShowCard from './components/ShowCard';


const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  const handleShowClick = show => {
    setSelectedShow(show);
  };

  const handleBackClick = () => {
    setSelectedShow(null);
  };

  return (
    <div className="container">
      <h2>TV Shows</h2>
      {selectedShow ? (
        <ShowDetails show={selectedShow} onBackClick={handleBackClick} />
      ) : (
        <div className="show-list">
          {shows.map(show => (
            <ShowCard key={show.show.id} show={show.show} onClick={handleShowClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
