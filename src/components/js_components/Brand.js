import React from "react";
import styles from "../css-files/Brand.module.css";

const clientLogos = [
  "/images/clients/logo.jpg",
  "/images/clients/th.jpeg",
  "/images/clients/keku.jpg",
  "/images/clients/playlogo-1.jpg",
  "/images/clients/RR_Logo-01_mxoxnl.avif",
];
const OurClients = () => {
  return (
    <div className={styles.wrapper}>
        {/* <img src="/images/clients/logo.jpg" /> */}
      <h2 className={styles.title}>Our Clients</h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className={styles.logo}
            />
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {clientLogos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt={`Client duplicate ${index + 1}`}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
