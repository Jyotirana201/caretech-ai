import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; // Add at the top
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPumpSoap,
  FaStethoscope,
  FaBrain,
  FaHeartbeat,
  FaRibbon,
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import styles from "./servicehome.module.css"; 

const services = [
  {
    icon: <FaPumpSoap />,
    title: "Skin & Hair Care",
    description:
      "AI-powered analysis and routines for acne, pigmentation, and hair fall tailored to your needs.",
      link: "/haircareform",
    newTab: true,
  },
  {
    icon: <FaStethoscope />,
    title: "General Health Support",
    description:
      "Smart suggestions for common health issues like fever, fatigue, and infections.",
  },
  {
    icon: <FaBrain />,
    title: "Mental Wellness",
    description:
      "Support for stress, anxiety, and emotional health with AI-driven techniques and advice.",
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Pediatric (Child) Care",
    description:
      "Expert-backed care for your child — including illness detection, nutrition tips, and growth tracking.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Blood Pressure Monitoring",
    description:
      "Get early detection support, report analysis, and tips for maintaining a healthy heart.",
      link: "/bp-care",
    newTab: true,
  },
  {
    icon: <FaRibbon />,
    title: "Cancer Awareness & Support",
    description:
      "AI tools to detect warning signs, understand medical reports, and get emotional care guidance.",
       link: "/cancer-care",
     newTab: true,
    },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles["services-section"]}>
      <h2 className={styles["section-title"]} data-aos="fade-down">Our Services</h2>
      <p className={styles["servicep"]}>
        Explore AI-powered solutions tailored for your everyday health and wellness needs
      </p>
      <div className={styles["services-grid"]}>
        {services.map((service, index) => (
          <div className={styles["service-card"]} key={index} data-aos="fade-up">
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

export default ServicesSection;
