import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Airports.css';


//FOLLOWED THE SAME WAY I DID WITH AIRLINES API

function Airports(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ search: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.airportsearch(formData.search);
  
    navigate(`/airports/${formData.search}`);
  };




  return (
    <div className="AirportContainer">
      <form className="submitAirport" onSubmit={handleSubmit}>
        <input
          className="inputAirport"
          type="text"
          name="search"
          onChange={handleChange}
          value={formData.search}
          placeholder="Search for an Airport"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Airports;
