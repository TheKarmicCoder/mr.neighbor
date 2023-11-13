import { useState } from 'react';
import '../css/formstyles.css'; // Replace with the correct path to your CSS file
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message, image } = formData;

    // Create mailto link
    const mailtoLink = `mailto:mr.neighbor23@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Create FormData object to send the form data, including the image
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('email', email);
    formDataToSend.append('phone', phone);
    formDataToSend.append('message', message);
    formDataToSend.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully', response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle failure, e.g., show an error message
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
        <div className="row">
          <label htmlFor="image"></label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
