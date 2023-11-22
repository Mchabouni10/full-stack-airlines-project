import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import Animal from './pages/Animal';
import AnimalDetails from './pages/AnimalDetails';

const App = ({ animalData }) => (
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/animals" element={<Animal animals={animalData} />} />
      <Route path="/animals/:name" element={<AnimalDetails animals={animalData} />} />
    </Routes>
  </div>
);

export default App;