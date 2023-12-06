import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State to handle log in message 
  const [loginMessage, setLoginMessage] = useState('');

  // Hook to enable navigation in React Router
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if entered credentials match stored user data
    if (
      storedUserData &&
      formData.username === storedUserData.username &&
      formData.password === storedUserData.password
    ) {
      setLoginMessage('You just logged in!');
      // Redirect to another page after successful login (replace '/dashboard' with your desired path)
      navigate('/Succlog');
    } else {
      setLoginMessage('Username or password is wrong.');
    }

    // Additional login logic can be added here

    console.log('Login Form Data:', formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      {/* Display login feedback message */}
      <p>{loginMessage}</p>
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


