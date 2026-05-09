import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./servicehome.module.css";
import { Link } from "react-router-dom";
import {
  FaFirstAid,
  FaHeartbeat,
  FaViruses,
} from "react-icons/fa";
import { GiBrokenBone, GiStomach } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";

const services = [
  {
    icon: <WiThermometer />,
    title: " Common Symptoms",
    description:
      "AI-powered analysis and routines for acne, pigmentation, and hair fall tailored to your needs.",
    link: "/haircareform",
    newTab: true,
  },
  {
    icon: <FaFirstAid />,
    title: " First Aid & Everyday Injuries",
    description:
      "Get quick help for cuts, burns, sprains, bruises, and other minor injuries with easy, step-by-step care tips.",
    link: "/chatbot",
    newTab: true,
  },
  {
    icon: <GiBrokenBone />,
    title: " Bone & Joint Health",
    description:
      "Support and guidance for joint pain, stiffness, arthritis, and mobility issues to keep you moving comfortably.",
    link: "/chatbot",
    newTab: true,
  },
  {
    icon: <FaHeartbeat />,
    title: "Vitals & General Wellness",
    description:
      "Track and manage essential health indicators like blood pressure, heart rate, weight, and overall well-being.",
   link: "/chatbot",
    newTab: true,
  },
  {
    icon: <FaViruses />,
    title: "Minor Infections & Immunity",
    description:
      "Get support for common infections like cold, flu, and seasonal illnesses while boosting your immune health..",
   link: "/chatbot",
    newTab: true,
  },
  {
    icon: <GiStomach />,
    title: "Digestive Health",
    description:
      "Address issues like acidity, bloating, constipation, and gut discomfort with tailored tips and insights.",
    link: "/chatbot",
    newTab: true,
  },
];

const CategoriesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles["services-section"]}>
      <h2 className={styles["section-title"]} data-aos="fade-down">
        Discover What’s Bothering You?
      </h2>
      <p className={styles["servicep"]}>
        Select a category to explore tailored health support.
      </p>
      <div className={styles["services-grid"]}>
        {services.map((service, index) => (
          <div
            className={styles["service-card"]}
            key={index}
            data-aos="fade-up"
          >
            <div className={styles["service-icon"]}>{service.icon}</div>
            <h3 className={styles["service-title"]}>{service.title}</h3>
            <p className={styles["service-desc"]}>{service.description}</p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["service-btn"]}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
