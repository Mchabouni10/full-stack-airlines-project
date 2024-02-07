// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AirportIndex.css';

function AirportIndex() {
  const [airports, setAirports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from MongoDB
    const apiUrl = `http://localhost:3000/api/airports?limit=50${searchQuery ? `&name=${searchQuery}` : ''}`;

    fetch(apiUrl) 
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setAirports(data);
      })
      .catch((error) => console.error('Error fetching airports:', error));
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Trigger a new fetch when the search button is clicked
    fetch(`http://localhost:3000/api/airports?name=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setAirports(data);
      })
      .catch((error) => console.error('Error fetching airports:', error));
  };

  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/api/airports/${_id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete airport. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAirports(airports.filter((airport) => airport._id !== _id));
      })
      .catch((error) => console.error('Error deleting airport:', error));
  };


  return (
    <div className='airport-choice-container'>
      <h1>Airport Information</h1>
      <div className="search-bar">
        <label htmlFor="search">Search by Name:</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter airport name..."
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>
      <table className="airport-choice-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Municipality</th>
            <th>Details</th>
            <th>Delete</th> {/* Add a new column for Delete */}
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport._id}>
              <td>{airport.id}</td>
              <td>{airport.name}</td>
              <td>{airport.municipality}</td>
              <td>
                <Link to={`/airports-choice/${airport._id}`}>View Details</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(airport._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AirportIndex;
