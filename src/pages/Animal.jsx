

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Animal(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const displayAnimals = [
    { name: "Lion", habitat: "Plains" },
    { name: "Tiger", habitat: "Jungle" },
    { name: "Elephant", habitat: "Forest" },
    { name: "Giraffe", habitat: "Savannah" },
    { name: "Penguin", habitat: "Antarctica" },
    { name: "Cheetah", habitat: "Grasslands" },
    { name: "Kangaroo", habitat: "Outback" },
    { name: "Koala", habitat: "Eucalyptus Forest" },
    { name: "Zebra", habitat: "Grasslands" },
    { name: "Panda", habitat: "Bamboo Forest" },
    { name: "Gorilla", habitat: "Rainforest" },
    { name: "Polar Bear", habitat: "Arctic" },
    { name: "Dolphin", habitat: "Ocean" },
    { name: "Killer Whale", habitat: "Ocean" },
    { name: "Hippopotamus", habitat: "Rivers" },
    { name: "Koala", habitat: "Eucalyptus Forest" },
    { name: "Pangolin", habitat: "Grasslands" },
    { name: "Red Fox", habitat: "Woodlands" },
    { name: "Sea Turtle", habitat: "Ocean" },
    { name: "Puffin", habitat: "Cliffs" },
  ];

  // Filter animals based on the search term
  const filteredAnimals = displayAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animals">
      <h2>List of Animals</h2>
      <label>
        <strong>Search for an animal:</strong>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <ul>
        {filteredAnimals.map((animal) => (
          <li key={animal.name}>
            <Link to={`/animals/${animal.name}`}>{animal.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}