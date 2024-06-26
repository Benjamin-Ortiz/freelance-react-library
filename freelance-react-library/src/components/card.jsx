import React from 'react';

// Reusable Card Component
const Card = ({ title, /*imageUrl,*/ description }) => (
  <div className="card">
    {/* <img src={imageUrl} alt={title} className="card-image" /> */}
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default Card;
