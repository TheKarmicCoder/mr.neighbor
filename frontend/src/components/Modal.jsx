
import { useNavigate } from 'react-router-dom';
import "../css/modal.css";

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
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button onClick={handleGetQuote}>Get Quote</button>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ServiceModal;
