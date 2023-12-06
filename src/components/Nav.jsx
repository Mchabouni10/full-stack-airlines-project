import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("nav");
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav" className={isSticky ? "sticky" : ""}>
      <ul>
        <li>
          <img
            className="CompanyLogo"
            src="companyLogo.png"
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
          <a href="/login">
            <img className="LoginLogo" src="loginlogo.png" alt="Company Logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
