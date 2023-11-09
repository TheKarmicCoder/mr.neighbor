// Navbar.js
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SocialIcons from './SocialIcons';
import socialData from '../data/socialData';
import '../css/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        // User has scrolled, apply the scrolled effect
        setScrolled(true);
      } else {
        // User is at the top, keep the solid background
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="brand-name">Mr.Neighbor</div>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <SocialIcons socialData={socialData[0]} />
    </nav>
  );
};

export default Navbar;
