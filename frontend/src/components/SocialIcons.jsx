// SocialIcons.js
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../css/social-icons.css";

const SocialIcons = ({ socialData }) => {
  return (
    <div className="social-icons">
      <Link to={socialData.facebookUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </Link>
      <Link to={socialData.instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </Link>
      <Link to={socialData.githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </Link>
      <Link to={socialData.tiktokUrl} target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </Link>
      <Link to={socialData.youtubeUrl} target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default SocialIcons;
