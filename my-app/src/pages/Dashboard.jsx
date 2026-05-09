import React from 'react';
import styles from './Dashboard.module.css';
import CustomNavbar from './navbar.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <>
      <CustomNavbar />
      <div className={styles.dashboardContainer}>
        <h1>Welcome to Your Dashboard</h1>
        <p>This is a protected area where you can manage your health data, view reports, and access premium AI features.</p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>AI Symptom Checker</h3>
            <p>Check your health symptoms using our advanced AI engine.</p>
            <button onClick={() => navigate('/symptomschecker')}>Go</button>
          </div>

          <div className={styles.card}>
            <h3>Health Report</h3>
            <p>View and download your AI-generated health reports.</p>
            <button>View Report</button>
          </div>

          <div className={styles.card}>
            <h3>Upgrade Plan</h3>
            <p>Unlock premium features by upgrading your plan.</p>
            <button>Upgrade</button>
          </div>

          <div className={styles.card}>
            <h3>Secure Data</h3>
            <p>Review how we secure and use your data.</p>
            <button onClick={() => navigate('/datasecure')}>Learn More</button>
          </div>
        </div>

        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
