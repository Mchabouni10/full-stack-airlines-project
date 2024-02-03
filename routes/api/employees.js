const express = require('express');
const router = express.Router();
const employeesCtrl = require('../../controllers/api/employees');
// GET all employees
router.get('/', employeesCtrl.getAllEmployees);

// GET a single employee by ID
router.get('/:id', employeesCtrl.show);

// POST create a new employee
router.post('/', employeesCtrl.createEmployee);

// PUT edit an existing employee
router.put('/:id', employeesCtrl.editEmployee);

// DELETE delete an employee
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;
