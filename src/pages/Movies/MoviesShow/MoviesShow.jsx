// MovieShow.jsx

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieShow.css';

function MovieShow() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/movies/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const movieData = await response.json();
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setError(`Error fetching movie details: ${error.message}`);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-show-container">
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="movie-details">
                    <div className="details-content">
                        <div className="details-left">
                            {movie.poster && <img className="poster-image" src={movie.poster} alt={movie.title} />}
                        </div>
                        <div className="details-right">
                            <div className="movie-detail-item-title">
                                <span className="detail-label">Title:</span> {movie.title}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Genres:</span> {movie.genres && movie.genres.join(', ')}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Runtime:</span> {movie.runtime}
                            min</div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Cast:</span> {movie.cast && movie.cast.join(', ')}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Full Plot:</span> {movie.fullplot}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Directors:</span> {movie.directors && movie.directors.join(', ')}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Awards:</span> {movie.awards && `Wins: ${movie.awards.wins}, Nominations: ${movie.awards.nominations}, Text: ${movie.awards.text}`}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Year:</span> {movie.year}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">IMDb:</span> {movie.imdb && `Rating: ${movie.imdb.rating}, Votes: ${movie.imdb.votes}, ID: ${movie.imdb.id}`}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Countries:</span> {movie.countries && movie.countries.join(', ')}
                            </div>
                            <div className="movie-detail-item">
                                <span className="detail-label">Writers:</span> {movie.writers && movie.writers.join(', ')}
                            </div>
                            <Link to={`/airlines-movies`} className="back-link">Back to Movies</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieShow;



