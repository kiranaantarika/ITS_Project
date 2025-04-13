import React, {useRef}from "react";
import "../css-files/services.css";

const Services = () => {
  const service = useRef(null);

  const services = [
    {
      title: "Regular House Cleaning",
      description: "Keep your home spotless with scheduled cleanings tailored to your needs.",
      icon: "🧹",
    },
    {
      title: "Deep Cleaning Services",
      description: "Thorough top-to-bottom cleaning for a fresher and healthier home.",
      icon: "🧽",
    },
    {
      title: "Catering Services",
      description: "Provide delicious meals and beverages for events, parties, and corporate functions.",
      icon: "🍽️",
    },
    {
      title: "Carpet & Upholstery Cleaning",
      description: "Restore the freshness of your carpets, rugs, and furniture.",
      icon: "🛋️",
    },
    {
      title: "Multiskilled Services",
      description: "Versatile assistance with repairs, maintenance, installations, and general handyman tasks.",
      icon: "🛠️",
    },
    {
      title: "Laundry & Ironing Services",
      description: "Convenient washing, drying, and ironing for your household needs.",
      icon: "👕",
    },
    {
      title: "Gardening Services",
      description: "Maintain lawns, trim hedges, plant flowers, and ensure overall garden care.",
      icon: "🪴",
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
