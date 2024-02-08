import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MoviesEdit.css'

function MoviesEdit() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    poster: '',
    title: '',
    plot: '',
    genres: [],
    runtime: 0,
    cast: [],
    fullplot: '',
    directors: [],
    awards: { wins: 0, nominations: 0, text: '' },
    year: 0,
    imdb: { rating: 0, votes: 0, id: '' },
    countries: [],
    writers: [],
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/api/movies/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movieData = await response.json();
        setFormData(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        // Handle error (display error message, redirect, etc.)
      }
    };

    fetchMovieDetails();
  }, [id]);

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
      const response = await fetch(`/api/movies/${id}`, {
        method: 'PUT',
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
      console.error('Error editing movie:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className='movies-edit-container'>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Poster:</label>
          <input type="text" name="poster" value={formData.poster} onChange={handleChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Plot:</label>
          <textarea name="plot" value={formData.plot} onChange={handleChange} />
        </div>
        <div>
          <label>Genres:</label>
          <input
            type="text"
            name="genres"
            value={formData.genres ? formData.genres.join(',') : ''}
            onChange={handleChange}
            placeholder="Enter genres, separated by commas"
          />
        </div>
        <div>
          <label>Runtime (min):</label>
          <input type="number" name="runtime" value={formData.runtime} onChange={handleChange} />
        </div>
        <div>
          <label>Cast:</label>
          <input
            type="text"
            name="cast"
            value={formData.cast ? formData.cast.join(',') : ''}
            onChange={handleChange}
            placeholder="Enter cast, separated by commas"
          />
        </div>
        <div>
          <label>Full Plot:</label>
          <textarea name="fullplot" value={formData.fullplot} onChange={handleChange} />
        </div>
        <div>
          <label>Directors:</label>
          <input
            type="text"
            name="directors"
            value={formData.directors ? formData.directors.join(',') : ''}
            onChange={handleChange}
            placeholder="Enter directors, separated by commas"
          />
        </div>
        <div>
          <label>Awards Wins:</label>
          <input type="number" name="awards.wins" value={formData.awards ? formData.awards.wins : 0} onChange={handleChange} />
        </div>
        <div>
          <label>Awards Nominations:</label>
          <input type="number" name="awards.nominations" value={formData.awards ? formData.awards.nominations : 0} onChange={handleChange} />
        </div>
        <div>
          <label>Awards Text:</label>
          <input type="text" name="awards.text" value={formData.awards ? formData.awards.text : ''} onChange={handleChange} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} />
        </div>
        <div>
          <label>IMDb Rating:</label>
          <input type="number" name="imdb.rating" value={formData.imdb ? formData.imdb.rating : 0} onChange={handleChange} />
        </div>
        <div>
          <label>IMDb Votes:</label>
          <input type="number" name="imdb.votes" value={formData.imdb ? formData.imdb.votes : 0} onChange={handleChange} />
        </div>
        <div>
          <label>IMDb ID:</label>
          <input type="text" name="imdb.id" value={formData.imdb ? formData.imdb.id : ''} onChange={handleChange} />
        </div>
        <div>
          <label>Countries:</label>
          <input
            type="text"
            name="countries"
            value={formData.countries ? formData.countries.join(',') : ''}
            onChange={handleChange}
            placeholder="Enter countries, separated by commas"
          />
        </div>
        <div>
          <label>Writers:</label>
          <input
            type="text"
            name="writers"
            value={formData.writers ? formData.writers.join(',') : ''}
            onChange={handleChange}
            placeholder="Enter writers, separated by commas"
          />
        </div>
        {/* Add other fields based on your schema */}
        <button className='movies-edit-button' type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default MoviesEdit;

