// MoviesAdd.js
import React, { useState } from 'react';
import './MoviesAdd.css'; 

function MoviesAdd() {
  const [formData, setFormData] = useState({
    title: '',
    genres: [],
    poster: '',
    runtime: 0,
    cast: [],
    fullplot: '',
    directors: [],
    awards: { wins: 0, nominations: 0, text: '' },
    year: 0,
    imdb: { rating: 0, votes: 0, id: '' },
    countries: [],
    writers: [],
    // Add other fields based on your schema
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for nested attributes like awards and imdb
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success (redirect, display message, etc.)
    } catch (error) {
      console.error('Error adding movie:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className='movie-add-container'>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Genres:</label>
          <input
            type="text"
            name="genres"
            value={formData.genres.join(',')}
            onChange={handleChange}
            placeholder="Enter genres, separated by commas"
            required
          />
        </div>
        <div className="form-group">
          <label>Poster:</label>
          <input type="text" name="poster" value={formData.poster} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Runtime (min):</label>
          <input type="number" name="runtime" value={formData.runtime} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Cast:</label>
          <input
            type="text"
            name="cast"
            value={formData.cast.join(',')}
            onChange={handleChange}
            placeholder="Enter cast, separated by commas"
          />
        </div>
        <div className="form-group">
          <label>Full Plot:</label>
          <textarea name="fullplot" value={formData.fullplot} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Directors:</label>
          <input
            type="text"
            name="directors"
            value={formData.directors.join(',')}
            onChange={handleChange}
            placeholder="Enter directors, separated by commas"
          />
        </div>
        <div className="form-group">
          <label>Awards Wins:</label>
          <input type="number" name="awards.wins" value={formData.awards.wins} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Awards Nominations:</label>
          <input type="number" name="awards.nominations" value={formData.awards.nominations} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Awards Text:</label>
          <input type="text" name="awards.text" value={formData.awards.text} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>IMDb Rating:</label>
          <input type="number" name="imdb.rating" value={formData.imdb.rating} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>IMDb Votes:</label>
          <input type="number" name="imdb.votes" value={formData.imdb.votes} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>IMDb ID:</label>
          <input type="text" name="imdb.id" value={formData.imdb.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Countries:</label>
          <input
            type="text"
            name="countries"
            value={formData.countries.join(',')}
            onChange={handleChange}
            placeholder="Enter countries, separated by commas"
          />
        </div>
        <div className="form-group">
          <label>Writers:</label>
          <input
            type="text"
            name="writers"
            value={formData.writers.join(',')}
            onChange={handleChange}
            placeholder="Enter writers, separated by commas"
          />
        </div>
        {/* Add other fields based on your schema */}
        <button className='movies-add-button' type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MoviesAdd;


