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
import EmployeeIndex from "./pages/employes/EmployeeIndex/EmployeeIndex";
import EmployeeShow from "./pages/employes/EmployeeShow/EmployeeShow";
import EmployeeAdd from './pages/employes/EmployeeAdd/EmployeeAdd'
import EmployeeEdit from './pages/employes/EmployeeEdit/EmployeeEdit'
import AirportIndex from "./pages/AirportChoice/AirportIndex/AirportIndex";
import AirportShow from "./pages/AirportChoice/AirportShow/AirportShow";
import AuthPage from "./pages/LoginAuth/AuthPage/AuthPage";
import { getUser } from "./utilities/users-service";
import MoviesIndex from "./pages/Movies/MoviesIndex/MoviesIndex";
import MoviesShow from "./pages/Movies/MoviesShow/MoviesShow";
import MoviesAdd from "./pages/Movies/MoviesAdd/MoviesAdd";
import MoviesEdit from "./pages/Movies/MoviesEdit/MoviesEdit";




const App = () => {
  const [user, setUser] = React.useState(getUser());

  const requireAuth = (element) => {
    return user ? element : <Navigate to="/login" />;
  };

  const handleAirlinesSearch = () => {};

  const handleAirportSearch = () => {};

  return (
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
        <Route path="/staff" element={requireAuth(<EmployeeIndex />)} />
        <Route path="/staff/:id" element={requireAuth(<EmployeeShow />)} />
        <Route path="/staff/add" element={requireAuth(<EmployeeAdd />)} />
        <Route path="/staff/edit/:id" element={requireAuth(<EmployeeEdit />)} />


        <Route path="/airports-choice" element={requireAuth(<AirportIndex />)} />
        <Route path="/airports-choice/:id" element={requireAuth(<AirportShow />)} />
        <Route
          path="/login"
          element={<AuthPage user={user} setUser={setUser} />}
        />


        <Route path="/airlines-movies" element={requireAuth(<MoviesIndex />)} />
        <Route path="/airlines-movies/:id" element={requireAuth(<MoviesShow />)} />
        <Route path="/airlines-movies/add" element={requireAuth(<MoviesAdd />)} />
        <Route path="/airlines-movies/edit/:id" element={requireAuth(<MoviesEdit />)} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
