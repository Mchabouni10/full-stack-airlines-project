const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/movies');

// Movies index route
router.get('/', moviesController.index);

// Single movie show route
router.get('/:id', moviesController.show);

// Create a new movie
router.post('/', moviesController.createMovie);

// Edit a movie
router.put('/:id', moviesController.editMovie);

// Delete a movie
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;

