const Movie = require('../../models/moviesSchema');

const index = async (req, res) => {
  let { page = 1, limit = 96, name, genre, year } = req.query;

  // Validate page and limit to be positive integers
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
    return res.status(400).json({ error: 'Invalid page or limit parameters' });
  }

  try {
    const query = {};

    if (name) {
      query.title = { $regex: new RegExp(name, 'i') };
    }

    if (genre && genre.trim() !== '') {
      query.genres = { $regex: new RegExp(`^${genre.trim()}$`, 'i') };
    }

    if (year) {
      query.year = parseInt(year, 10);
    }

    // If the 'year' parameter is not provided, sort by 'year' in descending order by default
    const sortOptions = year ? {} : { year: -1 };

    const movies = await Movie.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalMovies = await Movie.countDocuments(query);

    // Calculate totalPages based on totalMovies and limit
    const totalPages = Math.ceil(totalMovies / limit);

    res.json({
      movies,
      currentPage: page,
      totalPages,
      totalMovies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};









// Show: Get a single movie
const show = async (req, res) => {
    try {
        console.log('Received request for movie ID:', req.params.id);
      const movie = await Movie.findById(req.params.id);
  
      if (!movie) {
        console.log('Movie not found for ID:', req.params.id);
        return res.status(404).json({ error: 'Movie not found', id: req.params.id });
      }
  
      console.log('Found movie details:', movie);
      res.json(movie);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };




  const createMovie = async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      console.error('Error creating movie:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  
  const editMovie = async (req, res) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedMovie) {
        return res.status(404).json({ error: 'Movie not found', id: req.params.id });
      }
      res.json(updatedMovie);
    } catch (error) {
      console.error('Error editing movie:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  
  const deleteMovie = async (req, res) => {
    try {
      console.log('Deleting movie with ID:', req.params.id);
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
      console.log('Deleted movie:', deletedMovie);
  
      if (!deletedMovie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      res.json(deletedMovie);
    } catch (error) {
      console.error('Error deleting movie:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { index, show, createMovie, editMovie, deleteMovie };


