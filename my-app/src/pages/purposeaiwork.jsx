import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import background from "../assets/bgabout.png"; // Ensure this path is correct
import styles from "./abouthome.module.css";

const PurposeAIWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
      easing: "ease-in-out",
      mirror: false,
      once: false,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={styles["work-section"]}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className={styles["section-heading"]}>
        <h1 data-aos="fade-up" className={styles.headingwork}>
          Understanding Our AI System
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          Our AI healthcare system is built to provide accurate, fast, and reliable medical insights. It helps users understand their health conditions with the support of data-driven technology.It acts like a smart assistant that analyzes complex health data in seconds.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          We’ve designed the system to follow a structured process — starting from data collection to delivering meaningful health predictions.This ensures that each user receives consistent and personalized results.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          Each step is carefully crafted using advanced algorithms that prioritize both precision and privacy. Your health data is handled with the highest ethical standards.We strictly follow data protection laws to keep your information secure.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          In this section, you’ll see how our AI works step-by-step to give you clear, useful health information you can trust. We believe that transparency builds trust, and that’s why we show you every stage.
        </p>
      </div>
      <div className={styles.overlay} />
    </section>
  );
};

export default PurposeAIWork;
