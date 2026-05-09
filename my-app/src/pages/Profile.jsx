import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import axios from 'axios';
import { useAuth } from './context/UserAuth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: '',
      });
    }
  }, [user]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/updateProfile/${user.id}`, formData);
      login({ ...user, ...formData });
      alert('Profile updated successfully!');
      navigate(-1);
    } catch (err) {
      console.error(err);
      alert('Failed to update profile.');
    }
  };

  const handleCancel = () => {
    navigate('/homepage');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileFormWrapper}>
        <form onSubmit={handleSubmit} className={styles.profileForm}>
          <h2>Update Profile</h2>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password"
            required
          />
          <button type="submit" className={styles.updateButton}>Update</button>
          <button type="button" className={styles.updateButton} onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
