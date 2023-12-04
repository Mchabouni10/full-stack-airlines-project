import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Airlines(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming props.airlinessearch sends the search term to the server
    props.airlinessearch(formData.searchterm);
    // Navigate to AirlinesDetails with the search term
    navigate(`/airlines/${formData.searchterm}`);
  };

  return (
    <div className="submitAirlines">
      <form onSubmit={handleSubmit}>
        <input
          className="inputAirlines"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Search for an Airlines Company"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Airlines;
