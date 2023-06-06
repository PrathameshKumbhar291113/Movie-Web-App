import React from 'react';

const ShowCard = ({ show, onClick }) => {
  return (
    <div className="show-card" onClick={() => onClick(show)}>
      <img className="show-image" src={show.image?.medium} alt={show.name} />
      <h3 className="show-title">{show.name}</h3>
     <h4 className="show-details">Language: {show.language}</h4>
     <h4 className="show-details">Genre: {show.genres?.join(', ')}</h4>
    </div>
  );
};

export default ShowCard;
