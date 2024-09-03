// src/pages/Profile.js

import React, { useState } from 'react';

const Profile = () => {
  // Sample Data (Replace with dynamic data as needed)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  return (
    <div className="container mt-5">
      <h2><i className="fas fa-user"></i> Profile</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <i className="fas fa-user"></i> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <i className="fas fa-lock"></i> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-save"></i> Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
