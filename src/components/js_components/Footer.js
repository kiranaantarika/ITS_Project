// Footer.js
import React from "react";
import "../css-files/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo">
          <img
            className="founder-logo"
            src="./images/employees/profilepic.jpg"
            alt="Company Logo"
          />
          <p className="company-name">
            INTIMER TOTAL SOLUTIONS PVT. LTD
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="d-flex align-items-start">Contact Us</h4>

          <p>
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+917829340007">+91 7829340007</a>
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:ganeshraoshi@gmail.com">
              ganeshraoshi@gmail.com
            </a>
          </p>

          <p>
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
            Hosur Main Road, Madivala, Bangalore - 560068
          </p>
        </div>

        {/* Social Media */}
        {/* <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a
              href="https://wa.me/8073782736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div> */}

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 INTIMER TOTAL SOLUTIONS PVT. LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;