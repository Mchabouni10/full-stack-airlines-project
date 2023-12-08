import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Airlines.css";

//DOCUMENTATION MOVIE API WE DID IN CLASS WITH SOME IMPROVEMENT

const AirlinesDetails = () => {
  const apiKey = "lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA";
  const { searchterm } = useParams(); // useParams used to access parameters from the URL
  const [airlineDetail, setAirlineDetail] = useState([]);
  const [airlineLoaded, setAirlineLoaded] = useState(false); // State to store the details of the airline and track if data is loaded

  const apiUrl = `https://api.api-ninjas.com/v1/airlines?name=${searchterm}`;

  // Function to fetch airline data from the API
  const fetchAirlineData = async () => {
    try {
      // Using the fetch API to make a GET request to the API URL
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
      });

      // Parsing the JSON response
      const data = await response.json();
      setAirlineDetail(data); // Updating state with the fetched airline details
      setAirlineLoaded(true); // Setting the airlineLoaded state to true to indicate that data is loaded
      console.log(data);
    } catch (error) {
      console.error(error); // Handling errors and logging them to the console
    }
  };

  useEffect(() => {
    //it triggers the fetchAirlineData function when the component mounts
    fetchAirlineData();
  }, []);

  const loaded = () => {
    return (
      <div className="displayAirlinesDEtailes">
        <h1>Airlines Info</h1>
        {airlineDetail.map((airline, index) => (
          <div key={index} className="airline-container">
            <h2 className="airline-name">{airline.name}</h2>

            <p className="airline-code">
              <span>IATA:</span>
              <a
                href="https://www.iata.org/"
                target="_blank"
              >
                {airline.iata}
              </a>
            </p>
            <p className="airline-code">
              <span>ICAO:</span>
              <a
                href="https://www.icao.int/"
                target="_blank"
              >
                {airline.icao}
              </a>
            </p>

            {airline.logo_url && (
              <img
                className="company-logo"
                src={airline.logo_url}
                alt={`${airline.name} logo`}
              />
            )}
            {airline.fleet && (
              <div className="fleet-info">
                <h3>Fleet</h3>
                <ul>
                  {Object.entries(airline.fleet).map(
                    (
                      [type, count] //go over object and display all data
                    ) => (
                      <li key={type}>
                        {type}: <span>{count}</span>
                      </li>
                    )
                  )}
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
