// models/AirportSchema.js
const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  ident: String,
  type: String,
  name: String,
  latitude_deg: Number,
  longitude_deg: Number,
  elevation_ft: Number,
  iso_country: String,
  iso_region: String,
  municipality: String,
  gps_code: String,
  local_code: String,
  home_link: String,
});

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
