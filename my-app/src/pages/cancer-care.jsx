// File: cancer-care.jsx
import React, { useState, useEffect } from "react";
import styles from "./cancerform.module.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Symptoms: "",
    FamilyHistory: "",
    SmokingUse: "",
    PhysicalActivity: "",
    DietQuality: "",
    SupportNeeded: ""
  });

  const [result, setResult] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [result]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setResult(res.data);
    } catch (error) {
      alert("Prediction failed. Please check the backend or input data.");
    }
  };

  const dropdownOptions = {
    Gender: ["Male", "Female", "Other"],
    SmokingUse: ["Yes", "No"],
    Symptoms: [
      "Fatigue, Weight Loss",
      "Lump, Fatigue",
      "Skin Changes",
      "Abdominal Pain",
      "Cough, Weight Loss"
    ],
    PhysicalActivity: ["Low", "Moderate", "High"],
    DietQuality: ["Poor", "Average", "Good"],
    SupportNeeded: ["Yes", "No"]
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>

      <h2 data-aos="zoom-in">Cancer Care Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(formData).map((key) => (
          <div key={key} className={styles.formGroup} data-aos="fade-up">
            <label>{key}</label>
            {dropdownOptions[key] ? (
              <select name={key} value={formData[key]} onChange={handleChange}>
                <option value="">Select</option>
                {dropdownOptions[key].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={`Enter ${key}`}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.submitButton} data-aos="fade-up">Submit</button>
      </form>

      {result && (
        <>
          <div className={styles.rowContainer}>
            <div className={styles.leftBox} data-aos="fade-right">
              <h3>Prediction Result:</h3>
              <ul>
                <li><strong>Cancer Type:</strong> {result.CancerType}</li>
                <li><strong>Treatment Status:</strong> {result.TreatmentStatus}</li>
                <li><strong>Cancer Stage:</strong> {result.CancerStage}</li>
                <li><strong>Support Type:</strong> {result.SupportType}</li>
                <li><strong>Support Tips:</strong> {result.SupportTips}</li>
                <li><strong>Remedies:</strong> {result.Remedies}</li>
                <li><strong>Diet Plan:</strong> {result.DietPlan}</li>
              </ul>
            </div>
            <div className={styles.rightBox} data-aos="fade-left">
              <img
                src="/right (2).jpg"
                alt="Result Illustration"
                className={`${styles.image} ${styles.zoomOnHover}`}
              />
            </div>
          </div>

          <div className={styles.rowContainer}>
            <div className={styles.leftBox} data-aos="fade-right">
              <img
                src="/left (2).jpg"
                alt="Guidance Illustration"
                className={`${styles.image} ${styles.zoomOnHover}`}
              />
            </div>
            <div className={styles.rightBox} data-aos="fade-left">
              <h3>Additional Guidance</h3>
              <ul>
                <li><strong>Benefits:</strong> {result.Benefits}</li>
                <li><strong>Exercise:</strong> {result.Exercise}</li>
                <li><strong>Solution Products:</strong> {result.SolutionProducts}</li>
                <li><strong>Future Consequences:</strong> {result.FutureConsequences}</li>
                <li><strong>Consequences Solutions:</strong> {result.ConsequencesSolutions}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
