import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import background from "../assets/bgabout.png"; // Ensure this path is correct
import styles from "./abouthome.module.css";

const AboutSymptomsSection = () => {
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
          Your Health Starts with Awareness
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          Health is not just about treating illness – it's about understanding your body, spotting early signs, and taking care of yourself every day. Whether you're concerned about your skin, heart, a child’s health, or daily wellness, recognizing symptoms early can make all the difference.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          This symptoms checker is designed to help you explore possible causes of what you're feeling. From common issues to more serious conditions, it provides helpful insights and guides to support your well-being.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          Please note, this tool offers general suggestions and is not a substitute for medical diagnosis. For accurate evaluation and treatment, always consult a certified healthcare professional.
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork1}>
          Every small sign your body gives — whether it’s fatigue, discomfort, a rash, or a change in behavior — can be an early signal of something deeper. Recognizing these signs and taking timely steps is the foundation of healthy living.
        </p>
      </div>
      <div className={styles.overlay} />
    </section>
  );
};

export default AboutSymptomsSection;
