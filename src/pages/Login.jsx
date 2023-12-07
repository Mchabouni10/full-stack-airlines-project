import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login, redirect } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    // Check if entered credentials match stored user data
    if (
      storedUserData &&
      formData.username === storedUserData.username &&
      formData.password === storedUserData.password
    ) {
      login('/Succlog'); // Call the login function from AuthContext
    } else {
      // Display an error message
      setErrorMessage('Invalid credentials');
    }

    console.log('Login Form Data:', formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Use the redirect path from context to navigate
    if (redirect) {
      window.location.href = redirect;
    }
  }, [redirect]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Username input */}
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

        {/* Password input */}
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

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
      <div>
        <h3>Don't have an account?</h3>
        <p>
          {/* Link to sign up page */}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

