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
  ];

  // Filter animals based on the search term
  const filteredAnimals = displayAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animals">
      <h2>List of Animals</h2>
      <label>
        Search for an animal:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <ul>
        {filteredAnimals.map((animal) => (
          <li key={animal.name}>
            <Link to={`/animals/${animal.habitat}`}>{animal.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}