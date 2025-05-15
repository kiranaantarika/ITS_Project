import React from "react";
import styles from "../css-files/whyChooseUs.module.css";

const WhyChooseUs = () => {
  const features = [
  {
    title: "Professionals",
    description: "Experienced and vetted cleaners ensuring top-quality service.",
    icon: "🧼",
  },
  {
    title: "Scheduling",
    description: "Book cleanings at your convenience—one-time or recurring.",
    icon: "📅",
  },
  {
    title: "Eco-Friendly",
    description: "Safe and effective cleaning solutions for a healthier home.",
    icon: "🌿",
  },
  {
    title: "Guarantee",
    description: "We stand by our service—your home will be spotless, or we’ll make it right.",
    icon: "✅",
  },
];

  return (
    <div className={styles["why-choose-us"]}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <p className={styles.subheading}>We bring unmatched value to your journey.</p>

      {/* Central Highlighted Card */}
      <div className={styles["central-card"]}>
        <div className={styles.icon}>🏢</div>
        <h3 className={styles["feature-title"]}>Facility Management</h3>
        <p className={styles["feature-description"]}>
          Comprehensive facility care ensuring cleanliness, safety, and comfort.
        </p>
      </div>

      {/* Feature Cards Below */}
      <div className={styles["features-container"]}>
        {features.map((feature, index) => (
          <div className={styles["feature-card"]} key={index}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles["feature-title"]}>{feature.title}</h3>
            <p className={styles["feature-description"]}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
