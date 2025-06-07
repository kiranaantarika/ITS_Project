import React, { useRef, useState } from "react";
import "../css-files/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={aboutRef} id="about" className="about-main-container">
      <h2 className="about-title">About Us</h2>
      <div className="about-us-container">
        <div className="about-us">
          <div className="about-us-left">
            <img
              src="./images/About.jpg"
              alt="Office environment of our company"
              className="about-image"
            />
          </div>
          <div className="about-us-right">
            <h2 className="about-title">
              Get to Know About Our Cleaning Services
            </h2>
            <p>
              At <span className="brand-name">ITS Services</span>, we
              specialize in providing professional and reliable cleaning
              services tailored to your needs. Whether it's regular
              housekeeping, deep cleaning, or specialized home care, our expert
              cleaners ensure a spotless and refreshing space every time.
            </p>
            <ul className="features-list">
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Facility Management
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Professional & Reliable Cleaners
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Customized Cleaning Plans
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Affordable & Transparent Pricing
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} />{" "}
                Eco-Friendly Cleaning Products
              </li>
              <li>
                <FontAwesomeIcon className="icon-check" icon={faCheck} /> 100%
                Satisfaction Guarantee
              </li>
            </ul>
            <button
              className="book-tour"
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              type="button"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
