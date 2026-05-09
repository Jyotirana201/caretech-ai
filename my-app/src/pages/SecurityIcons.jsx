import React from "react";
import { FaLock, FaShieldAlt, FaFileContract, FaBalanceScale, FaEyeSlash, FaBrain } from "react-icons/fa";
import styles from "./SecurityIcons.module.css";

const icons = [
  { icon: <FaLock />, tooltip: "Encryption" },
  { icon: <FaShieldAlt />, tooltip: "Data Protection" },
  { icon: <FaFileContract />, tooltip: "Legal Compliance" },
  { icon: <FaBalanceScale />, tooltip: "Ethical Standards" },
  { icon: <FaEyeSlash />, tooltip: "No Tracking" },
  { icon: <FaBrain />, tooltip: "Responsible AI" },
];

const SecurityIcons = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Core Security Pillars</h2>
      <div className={styles.iconRow}>
        {icons.map((item, index) => (
          <div className={styles.iconCard} key={index} title={item.tooltip}>
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityIcons;
