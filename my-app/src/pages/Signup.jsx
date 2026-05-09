import React, { useState } from 'react';
import styles from './Signup.module.css'; // Reuse the same CSS module
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/signup', formData);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <img src="/logobg.png" alt="Logo" className={styles.logo} />
          <h2>Signup</h2>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
            type="email"
          />
          <input
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
            type="password"
          />
          <button type="submit" className={styles.loginButton}>Register</button>
          <p>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className={styles.signupLink}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
