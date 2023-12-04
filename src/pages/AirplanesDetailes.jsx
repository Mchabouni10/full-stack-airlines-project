import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AirplanesDetails = () => {
  const apiKey = 'lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA';
  const { manufacturer, model } = useParams();
  const [aircraftDetail, setAircraftDetail] = useState({});
  const [aircraftLoaded, setAircraftLoaded] = useState(false);

  useEffect(() => {
    const fetchAircraftData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}`,
          {
            headers: {
              'X-Api-Key': apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAircraftDetail(data);
        setAircraftLoaded(true);
        console.log(data);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    fetchAircraftData();
  }, [manufacturer, model]);

  const loaded = () => {
    // Check if aircraftDetail is undefined or empty
    if (!aircraftDetail || !aircraftDetail.length) {
      return <div>No details available for this aircraft.</div>;
    }

    const details = aircraftDetail[0];

    return (
      <div className="AirplaneDetailes">
        <h1>Aircraft Info</h1>
        <div className="aircraft-container">
          <h1>
            manufacturer: <span>{details?.manufacturer}</span>
          </h1>
          <h1>
            model: <span>{details?.model}</span>
          </h1>
          <h1>
            engine_type: <span>{details?.engine_type}</span>
          </h1>
          <h1>
            max_speed_knots: <span>{details?.max_speed_knots}</span>
          </h1>
          <h1>
            ceiling_ft: <span>{details?.ceiling_ft}</span>
          </h1>
          <h1>
          gross_weight_lbs: <span>{details?.gross_weight_lbs}</span>
          </h1>
          <h1>
          length_ft: <span>{details?.height_ft}</span>
          </h1>
          <h1>
          wing_span_ft: <span>{details?.wing_span_ft}</span>
          </h1>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return aircraftLoaded ? loaded() : loading();
};

export default AirplanesDetails;

