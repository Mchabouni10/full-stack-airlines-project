import React from "react";
import Slideshow from "../components/Slideshow";
import Airplanefood from "../components/Airplanefood";
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
          <img className="entertainImage" src="entertain.png"/>
          <div className="textcontainer">
          <h2 className="nonStop">NON-STOP FLIGHTS</h2>
          <h2 className="fly">ENJOY A MOVIE WHILE FLYING</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>







      </div>
      <Airplanefood />
      <Slideshow />
    </>
  );
};

export default MainPage;
