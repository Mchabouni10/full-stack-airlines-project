import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Airports.css";

function AirportsDetails() {
  const apiKey = "lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA";
  const { search } = useParams();
  const [airportsDetails, setAirportsDetails] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [airportsLoaded, setAirportsLoaded] = useState(false);

  const apiUrl = `https://api.api-ninjas.com/v1/airports?name=${search}`;

  const fetchAirportsData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
      });
      const data = await response.json();
      setAirportsDetails(data);
      setAirportsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAirportsData();
  }, []);

  const handleSelectChange = (e) => {
    const selectedIcao = e.target.value;
    const selectedAirport = airportsDetails.find(
      (airport) => airport.icao === selectedIcao
    );
    setSelectedAirport(selectedAirport);
  };

  const loaded = () => {
    return (
      <div className="displayAirportsDetails">
        <h1>Airport Details</h1>
        <select onChange={handleSelectChange}>
          <option value="">Select an airport</option>
          {airportsDetails.map((airport, index) => (
            <option key={index} value={airport.icao}>
              {airport.name}
            </option>
          ))}
        </select>
        {selectedAirport && (
          <div className="selected-airport-details">
            <h2>{selectedAirport.name}</h2>
            <p>ICAO: {selectedAirport.icao}</p>
            <p>IATA: {selectedAirport.iata}</p>
            <p>City: {selectedAirport.city}</p>
            <p>Region: {selectedAirport.region}</p>
            <p>Country: {selectedAirport.country}</p>
            <p>Elevation: {selectedAirport.elevation_ft}</p>
            <p>Latitude: {selectedAirport.latitude}</p>
            <p>Longitude: {selectedAirport.longitude}</p>
            <p>Timezone: {selectedAirport.timezone}</p>
          </div>
        )}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return airportsLoaded ? loaded() : loading();
}

export default AirportsDetails;

