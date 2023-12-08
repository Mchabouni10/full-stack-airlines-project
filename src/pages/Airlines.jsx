import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Airlines.css';

function Airlines(props) {
  const navigate = useNavigate();  // useNavigate is a hook from react-router-dom 
  const [formData, setFormData] = useState({ searchterm: "" });  // useState is a hook to manage state SEARCHTERM

  const handleChange = (event) => { // function updates the formData state when the input value changes
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => { // handleSubmit function is triggered when the form is submitted
    event.preventDefault();  // prevent the default form submission behavior

    // call the airlinessearch function passed as a prop with the search term from formData
    props.airlinessearch(formData.searchterm);
  // use the navigate function to navigate to a AIRLINES DETAILS
    navigate(`/airlines/${formData.searchterm}`);
  };

  return (
    <div className="AirlinesContainer">
      <form className="submitAirlines" onSubmit={handleSubmit}>
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
