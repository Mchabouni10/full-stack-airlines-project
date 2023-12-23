import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <img
            className="CompanyLogo"
            src="logo-no-background.png"
            alt="Compaby Logo"
          />
        </li>
      
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/airplanes">AIRPLANES</Link>
        </li>
        <li>
          <Link to="/airlines">AIRLINES</Link>
        </li>
        <li>
          <Link to="/airports">AIRPORTS</Link>
        </li>
        <li>
          <a className='UserIcon' href="/login">
            <FontAwesomeIcon icon={faUser}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


