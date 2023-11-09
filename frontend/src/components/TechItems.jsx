import React from 'react';

const TechnologyItem = ({ icon, name }) => {
  return (
    <div className="technology-item">
      <span>{icon}</span>
      <p>{name}</p>
    </div>
  );
};

export default TechnologyItem;
