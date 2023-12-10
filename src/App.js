
import React from "react";
import { Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./HomePage/MainPage";
import Airlines from "./pages/Airlines/Airlines";
import AirlinesDetails from "./pages/Airlines/AirlinesDetails";
import Airplanes from "./pages/Aircrafts/Airplanes";
import AirplanesDetails from "./pages/Aircrafts/AirplanesDetailes";
import Footer from "./components/Footer";
import AirportsDetails from "./pages/Airports/AirportsDetails";
import Airports from "./pages/Airports/Airports";
import Login from "./pages/LoginAuth/Login";
import Signup from "./pages/LoginAuth/Signup";
import Succlog from "./pages/LoginAuth/Succlog";
import { AuthProvider } from './pages/LoginAuth/AuthContext';
import { EmployeeProvider } from './pages/employes/EmployeeContext'; 
import EmpApp from "./pages/employes/EmpApp";


const App = () => {
  const handleAirlinesSearch = () => {
    // Handle the navigation to AirlinesDetails with the search term
  };

  const handleAirportSearch = () => {
    // Handle the navigation to AirportsDetails with the search 
  };

  return (
    <AuthProvider>
      <EmployeeProvider>  {/* Add the EmployeeProvider around the Route for /Staff */}
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/airlines"
              element={<Airlines airlinessearch={handleAirlinesSearch} />} 
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/Succlog" element={<Succlog />} />
            <Route path="/Stuff" element={<EmpApp />} />
          </Routes>
          <Footer />
        </div>
      </EmployeeProvider>
    </AuthProvider>
  );
};

export default App;