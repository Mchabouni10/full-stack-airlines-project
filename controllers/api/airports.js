// controllers/api/airports.js
const Airport = require('../../models/airportSchema');

// Index: Get all airports
const index = async (req, res) => {
  try {
    const limit = req.query.limit || 50; // default limit to 50 if not provided
    let query = {};

    // Check if the 'name' parameter is provided in the query
    if (req.query.name || req.query.municipality) {
      // Use a regular expression to match partial names or municipalities
      const partialNameRegex = req.query.name ? new RegExp(req.query.name, 'i') : null;
      const partialMunicipalityRegex = req.query.municipality ? new RegExp(req.query.municipality, 'i') : null;

      // Build the $or array based on provided parameters
      const orConditions = [];
      if (partialNameRegex) {
        orConditions.push({ name: partialNameRegex });
      }
      if (partialMunicipalityRegex) {
        orConditions.push({ municipality: partialMunicipalityRegex });
      }

      query = {
        $or: orConditions,
      };
    }

    const airports = await Airport.find(query).limit(parseInt(limit));
    res.json(airports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Show: Get a specific airport by ID
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const airport = await Airport.findById(id);
    res.json(airport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Create: Add a new airport
const createAirport = async (req, res) => {
  const airportData = req.body;
  try {
    const newAirport = await Airport.create(airportData);
    res.json(newAirport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





// Edit: Update an existing airport
const editAirport = async (req, res) => {
  const { id } = req.params;
  const updatedAirportData = req.body;
  try {
    const updatedAirport = await Airport.findByIdAndUpdate(id, updatedAirportData, { new: true });
    res.json(updatedAirport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete: Remove an airport
const deleteAirport = async (req, res) => {
  const { id } = req.params;
  try {
    await Airport.findByIdAndDelete(id);
    res.json({ message: 'Airport deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  index,
  show,
  createAirport,
  editAirport,
  deleteAirport,
};