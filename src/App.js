import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Airlines from "./pages/Airlines";
import AirlinesDetails from "./pages/AirlinesDetails";
import Airplanes from "./pages/Airplanes";
import AirplanesDetails from "./pages/AirplanesDetailes";
import Footer from "./components/Footer";
import AirportsDetails from "./pages/AirportsDetails";
import Airports from "./pages/Airports";
import Login from "./pages/Login";

const App = () => {
  const handleAirlinesSearch = (searchTerm) => {
    // Handle the navigation to AirlinesDetails with the search term
  };

  const handleAirportSearch = (search) => {
    // Handle the navigation to AirportsDetails with the search term
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/airlines"
          element={<Airlines airlinessearch={handleAirlinesSearch} />} // Correct prop name
        />
        <Route path="/airlines/:searchterm" element={<AirlinesDetails />} />
        <Route
          path="/airports"
          element={<Airports airportsearch={handleAirportSearch} />}
        />
        <Route path="/airports/:search" element={<AirportsDetails />} />
        <Route path="/airplanes" element={<Airplanes />} />
        <Route
          path="/airplanes-details/:manufacturer/:model"
          element={<AirplanesDetails />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
