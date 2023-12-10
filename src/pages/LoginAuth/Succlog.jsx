import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Succlog() {
  const logout = () => {
    localStorage.removeItem("signUp");
    return 
  };

  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className='Inside-Login-Page'>
      <h1>Inside the log in page</h1>
      <p>Wlecome{localStorage.getItem('username')}</p>
      {/* Use the onClick handler to trigger the Link navigation */}
      <Link to="/">
        <button className="logoutsucc" onClick={logout}>LogOut</button>
      </Link>
      <button className="deletesucc" onClick={deleteAccount}>Delete</button>
    </div>
  );
}