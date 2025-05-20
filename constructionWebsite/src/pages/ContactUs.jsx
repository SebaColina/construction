import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You would send the data to your backend here
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

  return (
    <>
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      )}
    </div>
    </>
  )
}

export default ContactUs
