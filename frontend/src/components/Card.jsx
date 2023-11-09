import React from 'react';

const Card = ({ gradientColors, title, description, imageSrc, onClick }) => {
  const containerStyle = {
    position: 'relative',
    clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
  };

  const afterStyle = {
    content: '',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '10px 10px 0 0', // Adjusted border-radius
    opacity: 0.7,
    // backgroundImage: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
  };

  return (
    <div className="card" onClick={onClick}>
      <div className="container" style={containerStyle}>
        <img src={imageSrc} alt="Card" />
        <div className="after" style={afterStyle}></div>
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
