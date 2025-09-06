import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        {/* <p>📞 Phone: <a href="tel:+905xxxxxxxxx">+90 05xxxxxxxx</a></p> */}
        <p>✉️ Email: <a href="mailto:yourmail@example.com">hatice.yslv36@gmail.com</a></p>
        <p>💻 GitHub: <a href="https://github.com/haticeyesilova" target="_blank" rel="noopener noreferrer">github.com/haticeyesilova</a></p>
        <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/hatice-yesilova/" target="_blank" rel="noopener noreferrer">linkedin.com/in/hatice-yesilova</a></p>
      </div>
    </section>
  );
};

export default Contact;
