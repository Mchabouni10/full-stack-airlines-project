import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation} from "react-router-dom";
import "./Nav.css";
import * as userService from "../../utilities/users-service";
import UserLogOut from "../../pages/LoginAuth/UserLogOut/UserLogOut";

const Nav = ({ user, setUser }) => {



  return (
    <nav id="nav">
      <ul>
        <li>
          <img
            className="CompanyLogo"
            src="comlogo.png"
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
        <UserLogOut user={user} setUser={setUser} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


