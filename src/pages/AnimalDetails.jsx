import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimalDetails = () => {
  const apiKey = "lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA";
  const { name } = useParams();
  const [animal, setAnimal] = useState(false);
  // const x = 'lion';
  const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${name}`;
  const [animalDetail, setanimalDetail] = useState("");

  const animaldata = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
      });
      // console.log(response.json())
      const data = await response.json();
      setanimalDetail(data);
      setAnimal(true);
      console.log(data);
      console.log(data[0].locations[0]);
      const secondAnimal = data[1];
      console.log(secondAnimal);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to run getAnimalData when component mounts
  useEffect(() => {
    animaldata();
  }, []); // Added apiUrl as a dependency to run the effect when the URL changes

  // Function for when data is fetched
  const loaded = () => {
    return (
      <div className="display">
        <h1>Animals Info</h1>
        <p>{animalDetail[0].locations[0]}</p>
  
        {/* Rendering key-value pairs using a description list */}
        <div>
          {Object.entries(animalDetail[1]).map(([key, value]) => (
            <div key={key}>
              <dt>{key}:</dt>
              <dd>{value.toString()}</dd> {/* Convert value to string */}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If animal has data, run the loaded function, otherwise, run loading
  return animal ? loaded() : loading();
};

export default AnimalDetails;
