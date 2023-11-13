// Navbar.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SocialIcons from './SocialIcons';
import socialData from '../data/socialData';
import '../css/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${mobileNavVisible ? 'mobile-nav' : ''}`}>
      <div className="brand">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="brand-name">Mr.Neighbor</div>
      </div>
      <div className="menu-icon" onClick={toggleMobileNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`${mobileNavVisible ? 'mobile-links' : ''}`}>
        
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <SocialIcons socialData={socialData[0]} />
    </nav>
  );
};

export default Navbar;
