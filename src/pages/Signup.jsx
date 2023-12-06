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
    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
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
          <p>Already have an account? <Link to="/login">Login</Link></p>
          <p>Have an account? <Link to="/Succlog">Continue to Succlog</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

