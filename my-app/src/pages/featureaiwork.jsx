import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./feature.module.css"; // ✅ Importing CSS module correctly
import background from "../assets/bg7.png";

const workData = [
  {
    title: "1. AI Chat",
    description: "Chat live with our AI assistant to discuss your symptoms and get immediate insight. It’s fast, conversational, and designed to understand your concerns naturally. Perfect for those who want quick responses without filling out forms.",
    image: "/robot2.png",
    link: "/chatbot",
    newTab: true
  },
  {
    title: "2. Symptom Form",
    description: "Fill out a simple form by sharing your symptoms in detail. Our system processes your input and provides a personalized diagnosis. Ideal for users who prefer structured reporting and in-depth results.",
    image: "/form2.png",
    link: "/symptomschecker",
    newTab: true
  },
];

const FeatureAIWork = () => {
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
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className="section-heading">
        <h1 data-aos="fade-up" className="headingwork">Choose How You Want to Check Your Health</h1>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork}>
          Select one of the options below and let our AI assist you quickly and accurately.
        </p>
      </div>
      <div className={styles.overlay} />
      {workData.map((item, index) => (
        <div
          className={`${styles["work-item"]} ${index % 2 === 0 ? styles["left-content"] : styles["right-content"]}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay="300"
          key={index}
        >
          <div className={`${styles["work-text"]} ${styles["pop-on-hover"]}`}>
            <h2 className={styles.titleh2}>{item.title}</h2>
            <p className={styles.descriptionp}>{item.description}</p>
            <a
  href={item.link}
  target={item.newTab ? "_blank" : "_self"}
  rel="noopener noreferrer"
  className={styles["service-btn"]}
>
  Start Your Health Check
</a>

          </div>
          <div className={`${styles["work-img"]} ${styles["pop-on-hover"]}`}>
            <img src={item.image} alt={item.title} className={styles.imgwork} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureAIWork;
