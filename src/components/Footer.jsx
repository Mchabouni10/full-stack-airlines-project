import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer1">
    <div className="footer-section">
      <h3>About Us</h3>
      <ul >
        <li>Learn about Airplanes</li>
        <li>Learn About Engines</li>
        <li>Learn about the Speed</li>
        <li>Safety</li>
        <li>Sustainability</li>
        <li>Enjoy Flying</li>
        <li>Airport Choice</li>
        <li>
          <Link to="/stuff">Stuff</Link>
        </li>
        <li>Company Choice</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Support</h3>
      <ul>
        <li>Special Assistance</li>
        <li>Airplane Quality</li>
        <li>Site Map</li>
        <li>Plans</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Packages</h3>
      <ul >
        <li>Travel the World</li>
        <li>Travel Japan</li>
        <li>Travel Italy</li>
        <li>Travel France</li>
        <li>Get Information</li>
        <li>Be a Pilot</li>
        <li>Newsroom</li>
      </ul>
    </div>
  </footer>
  
  

  )
}

export default Footer