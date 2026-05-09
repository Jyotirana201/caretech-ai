import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/UserAuth';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      const userData = {
        id: res.data.id,
        username: res.data.username,
        email: formData.email,
      };
      login(userData);
      alert('Login successful!');
      navigate('/Homepage');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <img src="/logobg.png" alt="Logo" className={styles.logo} />
          <h2>Login</h2>
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
          <button type="submit" className={styles.loginButton}>Login</button>

          <p>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className={styles.signupLink}
            >
              Sign up here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
