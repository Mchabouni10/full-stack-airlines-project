import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
    dateOfBirth: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing user data from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(formData);

    // Save the updated array back to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Call the login function from AuthContext
    login();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //w3 school help how to create a label form 
  return (
    <div className='Signup-page'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Re-enter Password:
          <input
            type="password"
            name="reEnterPassword"
            value={formData.reEnterPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <div>
          <h2>Already have an account? <Link to="/login">Login</Link></h2>
        </div>
      </form>
    </div>
  );
};

export default SignUp;


