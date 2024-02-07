// routes/api/airport.js
const express = require('express');
const airportController = require('./../../controllers/api/airports');

const router = express.Router();

// Index: Get all airports
router.get('/', airportController.index);

// Show: Get a specific airport by ID
router.get('/:id', airportController.show);

// Create: Add a new airport
router.post('/', airportController.createAirport);

// Edit: Update an existing airport
router.put('/:id', airportController.editAirport);

// Delete: Remove an airport
router.delete('/:id', airportController.deleteAirport);

module.exports = router;