import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import Airlines from './pages/Airlines';
import AirlinesDetails from './pages/AirlinesDetails';

const App = ({ airlinesData }) => {
  const handleAirlinesSearch = (searchTerm) => {
    // Handle the navigation to AirlinesDetails with the search term
    // You might want to use React Router's `useNavigate` hook here
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
      </Routes>
    </div>
  );
};

export default App;
