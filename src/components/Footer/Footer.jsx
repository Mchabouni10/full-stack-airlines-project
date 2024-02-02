
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";

function Footer() {
  const [user, setUser] = React.useState(getUser());
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>
            <Link to="/Aboutme">Learn about me</Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mouloud-chabouni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mchabouni10"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </li>
          <li>Safety</li>
          <li>Sustainability</li>
          <li>Enjoy Flying</li>
          {user ? (
            <li>
              <Link to="/staff">Staff</Link>
            </li>
          ) : null}
          <li>Airport Choice</li>
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
        <ul>
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
  );
}

export default Footer;
