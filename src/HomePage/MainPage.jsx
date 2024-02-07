import React from "react";
import { Link } from 'react-router-dom';
import Slideshow from "../components/Slideshow/Slideshow";
import Sliding from "../components/Sliding/Sliding";
import Airplanefood from "../components/Airplanefood/Airplanefood";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import "./MainPage.css";


const MainPage = () => {
  return (
    <>
      {/* the container for my main page*/}
      <div className="MainPage">
        <div className="nav2">
          <h3>Manage Airlines | Visit Aiports | Know Airlplanes</h3>
        </div>
        
        {/* the container for my images*/}
        <div className="imagesContainer">
          <div className="title1image">
            <h2>Aviation Nexus</h2>
          </div>

          <div className="title2image">
            <img
              src="trackingstatus.png"
              alt="track status"
              style={{ width: "150px", height: "150px" }}
            />
            <h2>Soaring Elevation</h2>
          </div>

          <div className="title3image">
            <h2>Enjoy the Sky</h2>
          </div>

          <div className="title4image">
            <h2>Visit the World</h2>
          </div>
        </div>

        {/* put another div for marketking*/}
        <div className="Second-part-homepage">
          <img className="entertainImage" src="entertain.png" alt="Entertain"/>
          <div className="textcontainer">
          <h2 className="nonStop">NON-STOP FLIGHTS{' '}<FontAwesomeIcon icon={faPlane} style={{color: "#ffffff",}} /></h2>
          <Link className="check-movies-homepage" to="/airlines-movies">Check Movies</Link>
          <p className="LoremP">Movies, Games and Music, Dicover the world while entertaining</p>
          </div>
        </div>
      </div>
      <Airplanefood />
      {/* <Slideshow /> */}
      <Sliding />
    </>
  );
};

export default MainPage;
