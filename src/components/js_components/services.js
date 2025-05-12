import React, {useRef}from "react";
import "../css-files/services.css";

const Services = () => {
  const service = useRef(null);

  const services = [
  {
    title: "Housekeeping",
    description: "Professional daily cleaning and maintenance to keep your premises spotless.",
    icon: "🧹",
  },
  {
    title: "Security Services",
    description: "Trained personnel ensuring the safety and protection of your property and people.",
    icon: "👮‍♂️",
  },
  {
    title: "Gardening",
    description: "Comprehensive lawn care, plant maintenance, and landscape upkeep services.",
    icon: "🌿",
  },
  {
    title: "Painting",
    description: "Interior and exterior painting for a fresh, vibrant, and well-maintained look.",
    icon: "🎨",
  },
  {
    title: "STP/WTP Maintenance",
    description: "Expert operation and maintenance of sewage and water treatment plants.",
    icon: "🚰",
  },
  {
    title: "One-Time / Deep Cleaning",
    description: "Intensive cleaning service for seasonal refresh or special occasions.",
    icon: "🧽",
  },
];


  return (
    <section ref={service} id="service" className="services-section">
      <h2 className="services-heading">Our Services</h2>
      {/* <p className="services-subheading">
        We offer a range of services designed to help your business thrive.
      </p> */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
