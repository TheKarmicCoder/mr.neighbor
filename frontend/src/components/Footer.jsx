import  { useEffect, useState } from 'react';
import "../css/footer.css"

const Footer = () => {
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
    <footer className={scrolled ? 'footer scrolled' : 'footer'}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mr.Neighbor <br></br> Designed by The Karmic Coder</p>
      </div>
    </footer>
  );
};

export default Footer;
