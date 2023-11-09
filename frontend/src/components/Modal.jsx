
import { useNavigate } from 'react-router-dom';

const ServiceModal = ({ service, onClose }) => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    // Handle the "Get Quote" action and navigate to the contact page
    navigate('/contact'); // Replace '/contact' with the actual URL of your contact page
  };

  return (
    <div className={`service-modal ${service ? 'visible' : ''}`}>
      {service && (
        <div className="modal-content">
          <img src={service.image} alt={service.title} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <button onClick={handleGetQuote}>Get Quote</button>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ServiceModal;
