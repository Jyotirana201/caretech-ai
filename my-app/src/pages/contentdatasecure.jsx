import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./workhome.module.css"; // ✅ Importing CSS module correctly
import background from "../assets/work4.png";

const workData = [
  {
    title: "1.  Securing What Matters:",
    description: "We understand that your health data is deeply personal. That’s why our system is built with strong security as its foundation — protecting your information from the moment it's shared.",
    image: "/robot1.png",
  },
  {
    title: "2. Ethics in Every Layer:",
    description: "From data encryption to responsible AI, we ensure every step respects your privacy and trust. Our approach blends modern tech with strict ethical standards — because your safety isn’t optional.",
    image: "/analysis.jpg",
  },


];

const ContentDataSecure = () => {
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
        <h1 data-aos="fade-up" className="headingwork">Why Data Security Matters in Healthcare</h1>
        <p data-aos="fade-up" data-aos-delay="200" className={styles.pwork}>
          Your trust drives our technology.
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

export default ContentDataSecure;
