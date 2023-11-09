import React, { useState } from 'react';
import videoSource from '../assets/banner.mp4';
import backgroundImage from '../assets/logo.png';
import "../css/banner.css"

const Banner = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const bannerStyle = {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  const contentStyle = {
    transition: 'opacity 0.3s',
  };

  const videoStyle = {
    opacity: hovered ? 0 : 1,
  };

  const backgroundImageStyle = {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: hovered ? 'translateY(0)' : 'translateY(-100%)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: hovered ? 1 : 0,
  };

  const textStyle = {
    opacity: hovered ? 1 : 0,
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <section className="banner" style={bannerStyle}>
      <div
        className="content"
        style={contentStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <video autoPlay loop muted playsInline className="video-bg" style={videoStyle}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="background-content" style={backgroundImageStyle}>
          <div style={textStyle}>
          <img src={backgroundImage} alt="Image" />
            <p>There When You Need Us</p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
