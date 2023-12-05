import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Airports.css'; // Adjust the import path according to your project structure

function AirportsDetails() {
  const apiKey = "lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA";
  const { search } = useParams();
  const [airportsDetails, setAirportsDetails] = useState([]);
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAirportsData();
  }, []);

  const loaded = () => {
    return (
      <div className="displayAirportsDetails">
      <h1>Airport Details</h1>
      {airportsDetails.map((airport, index) => (
        <div key={index} className="airport-container">
          <h2 className="airport-name">{airport.name}</h2>
          <p className='airport-code'>
            <span>IATA:</span>{airport.iata}
          </p>
          <p className='airport-code'>
            <span>ICAO:</span>{airport.icao}
          </p>
          <p className='airport-location'>
            <span>City:</span>{airport.city}
          </p>
          <p className='airport-location'>
            <span>Region:</span>{airport.region}
          </p>
          <p className='airport-location'>
            <span>Country:</span>{airport.country}
          </p>
          <p className='airport-location'>
            <span>Elevation:</span>{airport.elevation_ft} 
          </p>
          <p className='airport-location'>
            <span>Latitude:</span>{airport.latitude}
          </p>
          <p className='airport-location'>
            <span>Longitude:</span>{airport.longitude}
          </p>
          <p className='airport-timezone'>
            <span>Timezone:</span>{airport.timezone}
          </p>
        </div>
      ))}
    </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return airportsLoaded ? loaded() : loading();
}

export default AirportsDetails;

