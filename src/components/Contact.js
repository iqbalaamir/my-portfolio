import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zb1c6bo', 'template_uoyv5zo', form.current, 'IqNbZQKtFxIKRQ449')
      .then(() => {
        e.target.reset();
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Let's get in touch and build something great together!</p>
      </div>
      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>aamir.iqbal040@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 8484867661</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
