import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom, faPumpSoap, faCouch, faBolt, faWrench, faSeedling, faBug, faUtensils } from "@fortawesome/free-solid-svg-icons";

import styles from "../css-files/Features.module.css";

function Features() {
  const featuresRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: faBroom,
      title: "House Keeping",
      description: "Keep your spaces spotless with professional housekeeping services tailored to your needs.",
    },
    {
      id: 2,
      icon: faPumpSoap,
      title: "Deep Cleaning",
      description: "Ensure hygiene and cleanliness with our specialized deep cleaning services for homes and offices.",
    },
    {
      id: 3,
      icon: faCouch,
      title: "Interior Works",
      description: "Enhance your space with expert interior works, including design and renovation solutions.",
    },
    {
      id: 4,
      icon: faBolt,
      title: "Electrical Works",
      description: "Safe and efficient electrical solutions for all your home and office power needs.",
    },
    {
      id: 5,
      icon: faWrench,
      title: "Plumbing Work",
      description: "Reliable plumbing services for installations, repairs, and maintenance.",
    },
    {
      id: 6,
      icon: faSeedling,
      title: "Gardening Work",
      description: "Beautify your surroundings with expert gardening and landscaping services.",
    },
    {
      id: 7,
      icon: faBug,
      title: "Pest Control",
      description: "Effective pest control solutions to keep your home and workplace free from infestations.",
    },
    {
      id: 8,
      icon: faUtensils,
      title: "Catering Services",
      description: "Delicious and hygienic catering services for all occasions and events.",
    },
  ];

  return (
    <div ref={featuresRef} id="features" className={styles["features-section"]}>
      <h2>Our Features</h2>
      <div className={styles["features-row"]}>
        {features.map((feature) => (
          <div key={feature.id} className={styles["feature-card"]}>
            <div className={styles["feature-icon"]}>
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
