import React from "react";
import Slideshow from "../components/Slideshow";
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
            <h2>Each airport is piece of Art</h2>
          </div>

          <div className="title2image">
            <img
              src="trackingstatus.png"
              style={{ width: "150px", height: "150px" }}
            />
            <h2>Fly High and Discover the World</h2>
          </div>

          <div className="title3image">
            <h2>Between Airlines and Airplanes is Story</h2>
          </div>

          <div className="title4image">
            <h2>Visit each Country Safely</h2>
          </div>
        </div>

        {/* put another div for marketking*/}
        <div className="Second-part-homepage">
          <h1 className="fly">Fly</h1>
          <h1 className="and">&</h1>
          <h1 className="entertain">Entertain</h1>
        </div>







      </div>
      <Slideshow />
    </>
  );
};

export default MainPage;
