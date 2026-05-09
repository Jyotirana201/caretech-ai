import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./bp.module.css"; // Importing the CSS Module

function BPCare() {
  const [formData, setFormData] = useState({
    Age: "", Gender: "", Region: "", "Weight (kg)": "",
    BP_Category: "", Diabetes: "", Heart_Rate: "",
    Cholesterol_Level: "", Blood_Sugar_Level: "", Smoking_Status: "",
    Alcohol_Consumption: "", Physical_Activity_Level: "", Diet_Score: "",
    Stress_Level: "", Medication_Compliance: "", Family_History_Hypertension: "",
    Screen_Time: "", Sleep_Hours: "", Frequent_Headaches: "",
    Chest_Pain: "", Swelling_Legs: ""
  });

  const [result, setResult] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false, mirror: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [result]);

  const dropdownOptions = {
    Gender: ["Male", "Female", "Other"],
    Region: ["North", "South", "East", "West"],
    BP_Category: ["Normal", "Elevated", "Stage 1", "Stage 2", "Hypertensive Crisis"],
    Diabetes: ["Yes", "No"],
    Cholesterol_Level: ["High", "Low", "Medium"],
    Blood_Sugar_Level: ["High", "Medium"],
    Heart_Rate: ["High", "Low", "Medium"],
    Diet_Score: ["High", "Low", "Medium"],
    Smoking_Status: ["Never", "Former", "Current"],
    Stress_Level: ["High", "Medium", "Low"],
    Alcohol_Consumption: ["None", "Occasional", "Regular"],
    Physical_Activity_Level: ["Low", "Moderate", "High"],
    Medication_Compliance: ["Yes", "No"],
    Family_History_Hypertension: ["Yes", "No"],
    Frequent_Headaches: ["Yes", "No"],
    Chest_Pain: ["Yes", "No"],
    Swelling_Legs: ["Yes", "No"]
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send full formData without deleting keys
    const res = await axios.post("http://localhost:5000/bp/predict", formData);
    setResult(res.data);
  } catch (err) {
    if (err.response) {
      setResult({ error: err.response.data.error || "Prediction failed." });
    } else {
      setResult({ error: "Prediction failed." });
    }
  }
};


  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      <h2 className={styles.heading} data-aos="fade-down">BP Care Form</h2>

      <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
        {Object.keys(formData).map((key) => (
          <div className={styles.formGroup} key={key}>
            <label className={styles.label}>{key.replace(/_/g, " ")}</label>
            {dropdownOptions[key] ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select {key.replace(/_/g, " ")}</option>
                {dropdownOptions[key].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name={key}
                placeholder={key.replace(/_/g, " ")}
                value={formData[key]}
                onChange={handleChange}
                className={styles.input}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.button}>Predict</button>
      </form>

      {result && (
        <div className={styles.resultsGrid} data-aos="fade-up">
          {/* First row */}
          <div className={styles.row}>
            <div className={styles.left}>
              <h2>Prediction Result</h2>
              {result.error ? (
                <p>{result.error}</p>
              ) : (
                <>
                  <p><strong>Exercise:</strong> {result.Exercise_Recommendation}</p>
                  <p><strong>Diet:</strong> {result.Diet_Recommendation}</p>
                  <p><strong>Remedies:</strong> {result.Remedies}</p>
                  <p><strong>Follow-Up:</strong> {result.Follow_Up_Advice}</p>
                  <p><strong>Support Type:</strong> {result.Support_Type}</p>
                  <p><strong>Tips:</strong> {result.Support_Tips}</p>
                </>
              )}
            </div>
            <div className={styles.right}>
              <img src="/rightimg1.jpg" alt="Health Tips" className={styles.guidanceImg} />
            </div>
          </div>

          {/* Second row */}
          <div className={styles.row}>
            <div className={styles.left}>
              <img src="/leftimg1.jpg" alt="Additional Guidance" className={styles.guidanceImg} />
            </div>
            <div className={styles.right}>
              <h2>Additional Guidance</h2>
              <p><strong>Screen Time Advice:</strong> {result.Additional_Guidance?.Screen_Time_Advice}</p>
              <p><strong>Sleep Hours Advice:</strong> {result.Additional_Guidance?.Sleep_Hours_Advice}</p>
              <p><strong>Frequent Headaches:</strong> {result.Additional_Guidance?.Frequent_Headaches_Advice}</p>
              <p><strong>Chest Pain:</strong> {result.Additional_Guidance?.Chest_Pain_Advice}</p>
              <p><strong>Swelling in Legs:</strong> {result.Additional_Guidance?.Swelling_Legs_Advice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BPCare;
