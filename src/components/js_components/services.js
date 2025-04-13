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
      title: "Move-In/Move-Out Cleaning",
      description: "Ensure a fresh start in your new home with professional cleaning.",
      icon: "📦",
    },
    {
      title: "Carpet & Upholstery Cleaning",
      description: "Restore the freshness of your carpets, rugs, and furniture.",
      icon: "🛋️",
    },
    {
      title: "Eco-Friendly Cleaning",
      description: "Safe and non-toxic cleaning products for a healthier environment.",
      icon: "🌿",
    },
    {
      title: "Laundry & Ironing Services",
      description: "Convenient washing, drying, and ironing for your household needs.",
      icon: "👕",
    },
    {
      title: "Post-Construction Cleaning",
      description: "Remove dust and debris after renovations or construction work.",
      icon: "🚧",
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
