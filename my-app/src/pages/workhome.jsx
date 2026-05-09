import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./workhome.module.css"; // ✅ Importing CSS module correctly
import background from "../assets/work4.png";

const workData = [
  {
    title: "1. Share Your Health Data",
    description: "Our platform guides you through simple steps to input key health details. You can upload scans, test results, or describe your symptoms in your own words. This helps experts and AI tools deliver faster, more accurate insights tailored to you.",
    image: "/robot1.png",
  },
  {
    title: "AI-Powered Analysis",
    description: "Our intelligent system quickly processes your uploaded data to detect patterns and evaluate symptoms. It analyzes medical reports, images, and health inputs with high accuracy. Receive a detailed assessment that helps you understand your condition better and take the next step confidently.",
    image: "/analysis.jpg",
  },
  {
    title: "Personalized Health Insights",
    description: "Get a comprehensive report based on your unique symptoms, medical history, and uploaded data. Our system highlights key findings, possible risks, and health trends specific to you. Understand your condition better with insights designed just for your health profile.",
    image: "/health.jpg",
  },
  {
    title: "Smart Recommendations",
    description: "Receive AI-driven suggestions tailored to your health needs and goals. From treatment options to personalized diet and fitness plans, we've got you covered. Get actionable lifestyle tips that support long-term wellness and better outcomes.",
    image: "/solution.jpg",
  },
  {
    title: "Automated Health Reminders",
    description: "Never miss a dose or check-up with timely medicine alerts and follow-up notifications. Get gentle nudges for healthy habits, routine care, and wellness practices. Stay organized and in control of your health, effortlessly.",
    image: "/notify.jpg",
  },
];

const WorkSection = () => {
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
      <div className="section-heading">
        <h1 data-aos="fade-up" className="headingwork">How Our CareTechAI Works</h1>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork}>
          A seamless step-by-step process to analyze, diagnose, and improve your health.
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
          </div>
          <div className={`${styles["work-img"]} ${styles["pop-on-hover"]}`}>
            <img src={item.image} alt={item.title} className={styles.imgwork} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
