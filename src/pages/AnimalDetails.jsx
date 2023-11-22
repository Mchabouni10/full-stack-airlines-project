import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetails = () => {
  const apiKey = 'lulGyHOBLEnPvGZ0W2NWZhJWbsiX2RTbYMHhwMZA';
  const { habitat } = useParams();
  const [animal, setAnimal] = useState(null);
  const x = 'lion';
  const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${x}`;
  

const animaldata = async () =>{
  try {
    const response = await fetch(apiUrl, {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'X-Api-Key': apiKey
      },
    })
    console.log(response.json())
  } catch (error) {
    console.error(error)
  }
}


  // useEffect to run getAnimalData when component mounts
  useEffect(() => {
    animaldata();
  }, []); // Added apiUrl as a dependency to run the effect when the URL changes

  // Function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>{animal.name}</h1>
        <p>Habitat: {animal.habitat}</p>
        <p>Description: {animal.description}</p>
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