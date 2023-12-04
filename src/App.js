import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import Airlines from './pages/Airlines';
import AirlinesDetails from './pages/AirlinesDetails';
import Airplanes from './pages/Airplanes';
import AirplanesDetails from './pages/AirplanesDetailes';
import Footer from './components/Footer';

const App = ({ airlinesData }) => {
  const handleAirlinesSearch = (searchTerm) => {
    // Handle the navigation to AirlinesDetails with the search term
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/airlines"
          element={<Airlines airlinessearch={handleAirlinesSearch} />}
        />
        <Route path="/airlines/:searchterm" element={<AirlinesDetails />} />
         <Route path="/airplanes" element={<Airplanes />} />
        <Route path="/airplanes-details/:manufacturer/:model" element={<AirplanesDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
