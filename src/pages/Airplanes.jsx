import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Airplanes() {
  const [formData, setFormData] = useState({
    SelectManufacturer: "",
    SelectModel: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { SelectManufacturer, SelectModel } = formData;

    if (!SelectManufacturer || !SelectModel) {
      console.error('Please select both manufacturer and model');
      return;
    }

    // Redirect to the details page with the selected manufacturer and model
    navigate(`/airplanes-details/${SelectManufacturer}/${SelectModel}`);
  };

  return (
    <div className="AirplanesList">
      <form onSubmit={handleSubmit}>
        <label className="airplaneLebel">
          <select
            className="airplanesSelect"
            name="SelectManufacturer"
            onChange={handleChange}
            value={formData.SelectManufacturer}
          >
            <option value="" disabled>
              Select an Airplane Manufacturer
            </option>
            <option value="Boeing">Boeing</option>
            <option value="AirBus">AirBus</option>
            <option value="Embraer">Embraer</option>
            <option value="Cessna">Cessna</option>
          </select>
        </label>

        {formData.SelectManufacturer && (
          <label>
            
            <select
              className="airplanesSelect"
              name="SelectModel"
              onChange={handleChange}
              value={formData.SelectModel}
            >
              <option value="" disabled>
                Select an Airplane Model
              </option>

              {formData.SelectManufacturer === "Boeing" && (
                <>
                  <option value="737">Boeing 737</option>
                  <option value="747">Boeing 747</option>
                  <option value="757">Boeing 757</option>
                  <option value="767">Boeing 767</option>
                  <option value="777">Boeing 777</option>
                  <option value="787">Boeing 787</option>
                  <option value="717">Boeing 717</option>
                  <option value="727">Boeing 727</option>
                  <option value="737 MAX">Boeing 737 MAX</option>
                  <option value="747-8">Boeing 747-8</option>
                </>
              )}

              {formData.SelectManufacturer === "AirBus" && (
                <>
                  <option value="A220">Airbus A220</option>
                  <option value="A318">Airbus A318</option>
                  <option value="A319">Airbus A319</option>
                  <option value="A320">Airbus A320</option>
                  <option value="A321">Airbus A321</option>
                  <option value="A330">Airbus A330</option>
                  <option value="A340">Airbus A340</option>
                  <option value="A350">Airbus A350</option>
                  <option value="A380">Airbus A380</option>
                  <option value="Beluga">Airbus Beluga</option>
                </>
              )}

              {formData.SelectManufacturer === "Embraer" && (
                <>
                  <option value="170LR">Embraer 170LR</option>
                  <option value="E145">Embraer E145</option>
                  <option value="E170">Embraer E170</option>
                  <option value="E175">Embraer E175</option>
                  <option value="E190">Embraer E190</option>
                </>
              )}

              
              {formData.SelectManufacturer === "Cessna" && (
                <>
                  <option value="Citation Longitude">Cessna Citation Longitude</option>
                  <option value="750 Citation X">Cessna 750 Citation X</option>
                  <option value="177 Cardinal">Cessna 177 Cardinal</option>
                  <option value="Citation Mustang 510">Cessna Citation Mustang 510</option>
                  <option value="560-XL Citation Excel">Cessna 560-XL Citation Excel</option>
                </>
              )}
            </select>
          </label>
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Airplanes;
