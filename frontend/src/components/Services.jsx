import  { useState, useEffect } from 'react';
import servicesData from '../data/serviceData';
import ServiceModal from './Modal';
import CardList from './CardsList';
import "../css/service.css";
const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Get the h2 element
    const h2Element = document.querySelector('.services h2');

    // Add a scroll event listener
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Calculate the opacity based on the scroll position
      const opacity = Math.min(scrollPosition / 200, 1); // Adjust 200 to control when the effect starts

      // Update the background gradient with the calculated opacity
      h2Element.style.background = `linear-gradient(rgba(116, 137, 89, ${opacity}), rgba(116, 137, 89, 0))`;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <section className="services">
      <div>
        <h2>Our Services</h2>
      </div>
      
      <CardList services={servicesData} openModal={openModal} />

      {isModalOpen && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
          onGetQuote={() => {
            // Handle the "Get Quote" action and navigation here
            // You can use React Router to navigate to the form page
            // e.g., history.push('/contact') if you're using React Router
          }}
        />
      )}
    </section>
  );
};

export default Services;
