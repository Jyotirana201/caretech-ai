import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./faq.module.css";

// Sample images (replace these paths with real image imports or URLs)
import faq1 from "../assets/faq.png";
import faq2 from "../assets/faq4.png";
import faq3 from "../assets/work.png";
import faq4 from "../assets/faq4.png";
import faq5 from "../assets/faq.png";
import faq6 from "../assets/work.png";
import faq7 from "../assets/faq.png";
import faq8 from "../assets/work.png";
import faq9 from "../assets/faq4.png";

const faqs = [
  {
    image: faq1,
    question: "Is my health data secure?",
    answer: "Yes, your data is protected using advanced encryption and strict privacy policies."
  },
  {
    image: faq2,
    question: "Do you track user activity?",
    answer: "No. We value privacy and never track or sell your personal health information."
  },
  {
    image: faq3,
    question: "How is AI used responsibly?",
    answer: "Our AI is trained with ethical guidelines and reviewed by medical experts regularly."
  },
  {
    image: faq4,
    question: "Can I delete my data anytime?",
    answer: "Absolutely. You’re in control of your data and can delete it whenever you wish."
  },
  {
    image: faq5,
    question: "Who has access to my data?",
    answer: "Only authorized medical personnel or AI algorithms have access for analysis."
  },
  {
    image: faq6,
    question: "Do you share data with third parties?",
    answer: "Never. Your information stays confidential unless required by law."
  },
  {
    image: faq7,
    question: "What makes your system secure?",
    answer: "We use end-to-end encryption, firewall protection, and regular audits."
  },
  {
    image: faq8,
    question: "How do I report a security issue?",
    answer: "If you notice any security issue, please reach out to us through the in-app support chat. Our team is available 24/7 to assist you."
  },
  {
    image: faq9,
    question: "Is my child’s data safe here?",
    answer: "Yes. We follow strict pediatric privacy guidelines to protect children’s health data."
  }
];

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles["services-section"]}>
      <h2 className={styles["section-title"]} data-aos="fade-down">
        Frequently Asked Questions
      </h2>
      <p className={styles.servicep}>Clear answers about your privacy, data security, and trust in our healthcare system.</p>
      <div className={styles["services-grid"]}>
        {faqs.map((faq, index) => (
          <div className={styles["service-card"]} key={index} data-aos="fade-up">
            <img src={faq.image} alt={`FAQ ${index + 1}`} className={styles["faq-image"]} />
            <h3 className={styles["service-title"]}>{faq.question}</h3>
            <p className={styles["service-desc"]}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
