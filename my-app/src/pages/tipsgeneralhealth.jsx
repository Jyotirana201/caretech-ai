import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./workhome.module.css";
import background from "../assets/bg5.png";

const workData = [
  {
    title: "Step 1: Understand Your Body",
    description:
      "Listen to what you body is trying to tell you, whether it's changes in energy, sleep, skin, digestion, or mood. These are valuable clues",
    image: "/thinking.png",
  },
  {
    title: "Step 2: Notice Early Symptoms",
    description:
      "Don't ignore small signs like rashes, fatigue, mood swings, or discomfort. These can be the earliest indicators of deeper issues.",
    image: "/cold.png",
  },
  {
    title: "Step 3: Use the AI Symptom Checker",
    description:
      "Our tool helps you identify possible causes for what you’re feeling using smart algorithms and pattern recognition — all within seconds.",
    image: "/phone.png",
  },
  {
    title: " Step 4: Get Personalized Insights",
    description:
      "Receive health suggestions tailored to your symptoms. Whether it’s skin care, mental well-being, or general health, get the right support.",
    image: "/suggestion.jpg",
  },
  {
    title: "Step 5: Consult a Medical Professional",
    description:
      "The AI tool gives helpful guidance, but it’s not a substitute for real medical advice. Always consult a certified doctor for diagnosis and treatment.",
    image: "/doctor.png",
  },
];

const TipsGeneralHealthSection = () => {
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
        <h1 data-aos="fade-up" className={styles["headingwork"]}>
          Smart Health Starts with Simple Steps
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles["pwork"]}
        >
          Taking care of your health is not just about treating illness, it's
          about understanding your body, noticing early signs, and acting with
          awareness.
        </p>
      </div>
      <div className={styles["overlay"]} />
      {workData.map((item, index) => (
        <div
          key={index}
          className={`${styles["work-item"]} ${
            styles[index % 2 === 0 ? "left-content" : "right-content"]
          }`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay="300"
        >
          <div className={`${styles["work-text"]} ${styles["pop-on-hover"]}`}>
            <h2 className={styles["titleh2"]}>{item.title}</h2>
            <p className={styles["descriptionp"]}>{item.description}</p>
          </div>
          <div className={`${styles["work-img"]} ${styles["pop-on-hover"]}`}>
            <img
              src={item.image}
              alt={item.title}
              className={styles["imgwork"]}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TipsGeneralHealthSection;
