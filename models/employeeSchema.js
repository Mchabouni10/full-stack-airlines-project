const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    unique: true,
    required: true,
  },
  image: String,
  name: String,
  position: String,
  duty: String,
  field: String,
  averageSalary: String,
  dutyDetails: String,
  email: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;