import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EmployeeAdd.css'

const EmployeeAdd = () => {
  const [employeeData, setEmployeeData] = useState({
    image: '',
    name: '',
    position: '',
    duty: '',
    field: '',
    averageSalary: '',
    dutyDetails: '',
    email: '',
  });

  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees');
      if (response.ok) {
        const employees = await response.json();
        return employees;
      } else {
        console.error('Error fetching employees:', response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Error fetching employees:', error.message);
      return [];
    }
  };

  const generateEmployeeId = (employeesLength) => {
    return employeesLength + 1;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch the employees from the server
    const employees = await fetchEmployees();

    // Check if the employee already exists
    const isEmployeeExists = employees.some(
      (emp) =>
        emp.name === employeeData.name &&
        emp.position === employeeData.position &&
        emp.duty === employeeData.duty &&
        emp.field === employeeData.field &&
        emp.averageSalary === employeeData.averageSalary &&
        emp.dutyDetails === employeeData.dutyDetails &&
        emp.email === employeeData.email &&
        emp.image === employeeData.image
    );

    if (isEmployeeExists) {
      // Show an alert or handle it accordingly
      window.alert('Employee already exists!');
      return;
    }

    // Generate or obtain employeeId (on the client side)
    const employeeId = generateEmployeeId(employees.length);

    // Update the employeeData with the generated employeeId
    const updatedEmployeeData = {
      ...employeeData,
      employeeId: employeeId,
    };

    try {
      const response = await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployeeData),
      });

      if (response.ok) {
        // Display an alert
        window.alert('Employee added successfully!');
        
        // Redirect to the index page
        navigate('/staff');
      } else {
        console.error('Error adding employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='employee-add-container'>
      <Link to="/staff" className="employee-back-button">Back to Employee List</Link>
      <h1 className='employee-add-title'>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={employeeData.position}
            onChange={handleChange}
          />
        </label>
        <label>
          Duty:
          <input
            type="text"
            name="duty"
            value={employeeData.duty}
            onChange={handleChange}
          />
        </label>
        <label>
          Field:
          <input
            type="text"
            name="field"
            value={employeeData.field}
            onChange={handleChange}
          />
        </label>
        <label>
          Average Salary:
          <input
            type="text"
            name="averageSalary"
            value={employeeData.averageSalary}
            onChange={handleChange}
          />
        </label>
        <label>
          Duty Details:
          <input
            type="text"
            name="dutyDetails"
            value={employeeData.dutyDetails}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={employeeData.image}
            onChange={handleChange}
          />
        </label>
        <button className='employee-add-button' type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeAdd;
