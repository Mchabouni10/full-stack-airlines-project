import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Airlines.css';

const AirlinesDetails = () => {
  const apiKey = "lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA";
  const { searchterm } = useParams();
  const [airlineDetail, setAirlineDetail] = useState([]);
  const [airlineLoaded, setAirlineLoaded] = useState(false);

  const apiUrl = `https://api.api-ninjas.com/v1/airlines?name=${searchterm}`;

  const fetchAirlineData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
      });

      const data = await response.json();
      setAirlineDetail(data);
      setAirlineLoaded(true);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAirlineData();
  }, []);

  const loaded = () => {
    return (
        <div className="displayAirlinesDEtailes">
        <h1>Airlines Info</h1>
        {airlineDetail.map((airline, index) => (
          <div key={index} className="airline-container">
            <h2 className="airline-name">{airline.name}</h2>
            <p className='airline-code'>
            <span>IATA:</span>{airline.iata}
          </p>
          <p className='airline-code'>
            <span>ICAO:</span>{airline.icao}
          </p>
            {airline.logo_url && (
              <img className='company-logo' src={airline.logo_url} alt={`${airline.name} logo`} />
            )}
            {airline.fleet && (
              <div className='fleet-info'>
                <h3>Fleet</h3>
                <ul>
                  {Object.entries(airline.fleet).map(([type, count]) => (
                    <li key={type}>{type}: <span>{count}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return airlineLoaded ? loaded() : loading();
};

export default AirlinesDetails;
