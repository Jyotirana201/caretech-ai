import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import background from "../assets/work4.png";
import styles from "./upgradehome.module.css"; // Importing the CSS module

const plans = [
  {
    title: "Basic Care",
    price: "Free",
    features: [
      "Symptom Checker",
      "Basic AI Suggestions",
      "Health Reminders",
    ],
    icon: "bi-heart-pulse",
    bg: "bg-light",
  },
  {
    title: "Smart Care",
    price: "₹99/month",
    features: [
      "Detailed Health Reports",
      "Early Risk Detection",
      "Lifestyle Recommendations",
    ],
    icon: "bi-cpu",
    bg: "bg-white",
  },
  {
    title: "Pro Care+",
    price: "₹499/month",
    features: [
      "Full AI Assistance",
      "24x7 Expert Connect",
      "Personalized Health Plans",
      "Advanced Report Insights",
    ],
    icon: "bi-stars",
    bg: "bg-light",
  },
];

const UpgradeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, easing: "ease-in-out" });
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`${styles.upgradeSection} py-5`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4" data-aos="fade-up">Choose Your Health Journey</h2>
        <p className="mb-5" data-aos="fade-up" data-aos-delay="200">
          Explore our plans designed to guide you from basic care to full AI-powered assistance.
        </p>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay={`${index * 200}`}
              key={index}
            >
              <div className={`card shadow-lg ${plan.bg} h-100 ${styles.cardCustom}`}>
                <div className="card-body text-dark d-flex flex-column align-items-center">
                  <i className={`bi ${plan.icon} display-4 mb-3 service-icon`}></i>
                  <h4 className="card-title">{plan.title}</h4>
                  <h5 className="text-success">{plan.price}</h5>
                  <ul className="list-unstyled my-3">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                 

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div/>
    </section>
  );
};

export default UpgradeSection;
