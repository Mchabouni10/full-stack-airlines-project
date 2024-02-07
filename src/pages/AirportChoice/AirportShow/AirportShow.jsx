import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AirportShow.css';

function AirportShow() {
  const { id } = useParams();
  const [airport, setAirport] = useState({});

  useEffect(() => {
    // Fetch specific airport details from MongoDB
    fetch(`http://localhost:3000/api/airports/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Airport Details:', data);
        setAirport(data);
      })
      .catch((error) => console.error('Error fetching airport details:', error));
  }, [id]);

  return (
    <div className='airport-show-container'>
      <h1 className='airport-show-header'>Airport Details</h1>
      <div className='airport-show-details-choice'>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>ID: <span>{airport.id}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Ident: <span>{airport.ident}</span></label> 
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Type: <span>{airport.type}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Name: <span>{airport.name}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Latitude: <span>{airport.latitude_deg}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Longitude: <span>{airport.longitude_deg}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Elevation: <span>{airport.elevation_ft}</span></label>
        </div>
        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>ISO Country: <span>{airport.iso_country}</span></label>
        </div>
        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>ISO Region: <span>{airport.iso_region}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Municipality: <span>{airport.municipality}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>GPS Code: <span>{airport.gps_code}</span></label>
        </div>

        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Local Code: <span>{airport.local_code}</span></label>
          
        </div>
        <div className='airport-detail-item-choice'>
          <label className='airport-details-label-choice'>Home Link: {airport.home_link && (
            <a href={airport.home_link} target="_blank" rel="noopener noreferrer">
              {airport.home_link}
            </a>
          )}</label>
          
        </div>
      </div>
    </div>
  );
}

export default AirportShow;
