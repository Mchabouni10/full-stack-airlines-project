import React from "react";
import Slideshow from "../components/Slideshow";

const MainPage = () => {
  return (
    <>
      <div className="MainPage">
      <div className="nav2">text here</div>
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
      </div>
      <Slideshow />
    </>
  );
};

export default MainPage;
