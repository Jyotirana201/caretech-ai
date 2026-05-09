import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./servicehome.module.css"; 

import {
  FaBalanceScale,
  FaLock,
  FaEye,
} from "react-icons/fa";


const services = [
  {
    icon: <FaLock />,
    title: "Encrypted Health Data",
    description:
      "We use end-to-end encryption to protect all your personal and medical information. Your data stays safe whether it's stored or being transmitted.",
 
  },
  {
    icon: <FaEye/>,
    title: "Transparent AI",
    description:
      "We explain how our AI reaches its conclusions, giving you clear, understandable insights at every step — no black box.",
 
  },
  {
    icon: <FaBalanceScale />,
    title: " Bias-Free Predictions",
    description:
      "We regularly audit our AI to eliminate bias and ensure that predictions are fair, accurate, and ethical for all users.",

  },


];

const SecureAIWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles["services-section"]}>
      <h2 className={styles["section-title"]} data-aos="fade-down"> Your Data, Handled with Care</h2>
      <p className={styles.servicep}>We prioritize privacy, fairness, and transparency at every step of our AI process.</p>
      <div className={styles["services-grid"]}>
        {services.map((service, index) => (
          <div className={styles["service-card"]} key={index} data-aos="fade-up">
            <div className={styles["service-icon"]}>{service.icon}</div>
            <h3 className={styles["service-title"]}>{service.title}</h3>
            <p className={styles["service-desc"]}>{service.description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureAIWork;
