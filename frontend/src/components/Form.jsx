import  { useState } from 'react';
import axios from 'axios';
import '../css/formstyles.css'; // Replace with the correct path to your CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your backend API using Axios
      const response = await axios.post('http://localhost:3001/submit', formData);

      // Handle the response as needed
      console.log('Form submission successful:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className="form">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us. We will get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name"></label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="row">
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="row">
          <label htmlFor="phone"></label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
        <div className="row">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
