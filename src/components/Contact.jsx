import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          I am always open to opportunities, collaborations, or just a friendly
          hello! Feel free to reach out through any of the channels below.
        </p>
        <div className="contact-content-centered">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:mufeezibrahim786@gmail.com">
                mufeezibrahim786@gmail.com
              </a>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+917093761027">+91 7093761027</a>
            </div>
            <div className="info-item">
              <i className="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/mohammad-mufeez-ibrahim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="info-item">
              <i className="fab fa-github"></i>
              <a
                href="https://github.com/IBRAHIM-MUFEEZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
