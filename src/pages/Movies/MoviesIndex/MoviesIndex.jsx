// MoviesIndex.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import genresOptions from "./genres";
import "./MoviesIndex.css";

function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [yearsList, setYearsList] = useState([]);

  const fetchMovies = async () => {
    try {
      const sortParam = selectedYear ? `&year=${selectedYear}` : "";
      const response = await fetch(
        `/api/movies?page=${currentPage}&limit=96&name=${searchTerm}&genre=${selectedGenre}${sortParam}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovies(data.movies);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setTotalMovies(data.totalMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchYearsList = () => {
    const startYear = 1932;
    const endYear = 2022;
    const yearsArray = Array.from(
      { length: endYear - startYear + 1 },
      (_, index) => startYear + index
    ).reverse();
    setYearsList(yearsArray);
  };

  useEffect(() => {
    fetchMovies();
    fetchYearsList();
  }, [currentPage, searchTerm, selectedGenre, selectedYear]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setCurrentPage(1);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setCurrentPage(1);
  };

  const handleDeleteMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/movies/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Movie deleted successfully!");
        // Fetch the updated list after deletion
        fetchMovies();
      } else {
        const errorMessage = await response.json(); // Parse the error response
        console.error(
          `Error deleting movie: ${response.statusText}`,
          errorMessage
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="movie-container">
      <div className="pagination-container">
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
      <div className="action-buttons">
        <Link to="/airlines-movies/add" className="add-movie-button">
          Add Movie
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-button">
          Search
        </button>
      </div>

      <div className="filter-container">
        <h2>Total Movies:( {totalMovies} )</h2>
        <div className="genre-filter">
          <label>Filter By Genre: </label>
          <select
            value={selectedGenre}
            onChange={handleGenreChange}
            className="select-dropdown"
          >
            {genresOptions.map((genre) => (
              <option key={genre} value={genre}>
                {genre === "" ? "All Genres" : genre}
              </option>
            ))}
          </select>
        </div>
        <div className="year-filter">
          <label>Filter By Year: </label>
          <select
            id="selectedYear"
            value={selectedYear}
            onChange={handleYearChange}
            className="select-dropdown"
          >
            <option value="">All Years</option>
            {yearsList.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="movies-list-itmes">
        {movies.map((movie) => (
          <li key={movie._id} className="movies-items-container">
            <div className="icon-buttons">
              <Link
                to={`/airlines-movies/${movie._id}`}
                className="movie-details-with-link"
              >
                <i className="fas fa-eye"></i>
              </Link>
              <Link
                className="edit-button"
                to={`/airlines-movies/edit/${movie._id}`}
              >
                <i className="fas fa-pen-to-square"></i>
              </Link>
              <Link
                className="delete-button"
                to="#"
                onClick={() => handleDeleteMovie(movie._id)}
              >
                <i className="fas fa-trash"></i>
              </Link>
            </div>

            {movie.poster ? (
              <img
                className="movie-poster"
                src={movie.poster}
                alt={`${movie.title} Poster`}
              />
            ) : (
              <div className="no-poster-container">No Image Available<br /><i className="fas fa-ban"></i></div>
            )}
            <div className="movie-description">
              <p className="movie-title">{movie.title}</p>
              <p className="movie-genres">{movie.genres.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesIndex;
