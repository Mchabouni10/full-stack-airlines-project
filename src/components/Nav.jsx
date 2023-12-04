import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/airplanes">Airplanes</Link>
        </li>
        <li>
          <Link to="/airlines">Airlines</Link>
        </li>
        <li>
          <Link to="/airport">Airports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;