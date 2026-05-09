import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import background from "../assets/work4.png";  // Ensure this path is correct
import styles from "./abouthome.module.css"; // Importing CSS Module

const workData = [
  {
    title: "1. Our Mission",
    description: "We aim to revolutionize healthcare with AI by making smart, accessible, and personalized health support available to everyone, anytime.",
    image: "/mission1.jpg",
  },
  {
    title: "2. AI for Better Health",
    description: "Using advanced algorithms, our AI analyzes symptoms, identifies possible causes, and provides helpful suggestions tailored to individual needs.",
    image: "/mind.jpg",
  },
  {
    title: "3. Empowering People",
    description: "We help users take control of their health by providing guidance, awareness, and support across physical, mental, and lifestyle concerns..",
    image: "/people.jpg",
  },
  {
    title: "4. Trusted & Evolving",
    description: "Our system grows smarter with every interaction, offering reliable and updated insights that align with real-world medical practices.",
    image: "/handshake.jpg",
  },
];

const AboutUsSection = () => {
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
        <h1 data-aos="fade-up" className={styles["headingwork1"]}>About Us</h1>
      </div>
      <div className={styles["overlay"]} />
      {workData.map((item, index) => (
        <div
          className={`${styles["work-item"]} ${index % 2 === 0 ? styles["left-content"] : styles["right-content"]}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay="300"
          key={index}
        >
          <div className={`${styles["work-text"]} ${styles["pop-on-hover"]}`}>
            <h2 className={styles["titleh2"]}>{item.title}</h2>
            <p className={styles["descriptionp"]}>{item.description}</p>
          </div>
          <div className={`${styles["work-img"]} ${styles["pop-on-hover"]}`}>
            <img src={item.image} alt={item.title} className={styles["imgwork"]} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUsSection;
