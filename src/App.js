
import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import MainPage from "./HomePage/MainPage";
import Airlines from "./pages/Airlines/Airlines";
import AirlinesDetails from "./pages/Airlines/AirlinesDetails";
import Airplanes from "./pages/Aircrafts/Airplanes";
import AirplanesDetails from "./pages/Aircrafts/AirplanesDetailes";
import Footer from "./components/Footer/Footer";
import AirportsDetails from "./pages/Airports/AirportsDetails";
import Airports from "./pages/Airports/Airports";
import { EmployeeProvider } from './pages/employes/EmployeeContext'; 
import EmpApp from "./pages/employes/EmpApp";
import AuthPage from "./pages/LoginAuth/AuthPage/AuthPage";
import { getUser } from "./utilities/users-service";


const App = () => {

  const [user, setUser] = React.useState(getUser());

  const requireAuth = (element) => {
    return user ? element : <Navigate to="/login" />;
  };

  const handleAirlinesSearch = () => {
   
  };

  const handleAirportSearch = () => {

  };

  return (
      <EmployeeProvider>  {/* Add the EmployeeProvider around the Route for /Staff */}
        <div>
          <Nav user={user} setUser={setUser} />
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
            <Route path="/Stuff" element={requireAuth(<EmpApp />)} />
           <Route
              path="/login"
              element={<AuthPage user={user} setUser={setUser} />}
            />
          </Routes>
          <Footer />
        </div>
      </EmployeeProvider>
  );
};

export default App;