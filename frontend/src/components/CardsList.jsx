import React from 'react';
import Card from './Card';
import "../css/cardstyles.css";

const CardList = ({ services, openModal }) => {
  return (
    <div className="cards">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.image}
          // gradientColors={['#0100ec', '#fb36f4']}
          onClick={() => openModal(service)}
        />
      ))}
    </div>
  );
};

export default CardList;
