import React from 'react';
import './Card.css'; // Import the CSS file for card styles

const Card = ({ heading, profileImage, name, bio }) => {
  return (
    <div className="card">
      <div className="card-heading">
        {heading}
      </div>
      <div className="card-content">
        <div className="card-left">
          <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
          <button className="choose-button">Choose</button>
        </div>
        <div className="card-right">
          <h2 className="card-name">{name}</h2>
          <div className="card-bio" dangerouslySetInnerHTML={{ __html: bio }} />
        </div>
      </div>
    </div>
  );
};

export default Card;



