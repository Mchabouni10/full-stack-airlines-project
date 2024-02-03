// EmployeeIndex.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import './EmployeeIndex.css';

const EmployeeIndex = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees');
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Employee deleted successfully!');
        // Fetch the updated list after deletion
        fetchEmployees();
      } else {
        console.error('Error deleting employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='employee-page-under-staff'>
      <Link to="/add" className='add-new-employee'>Add<FontAwesomeIcon icon={faPlus} /> New Employee</Link>
      <h1>Employee List</h1>
      <table className='employee-table'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                <Link to={`/staff/${employee._id}`}>View Details</Link>
                </td>
                <td>
                <Link to={`/edit/${employee._id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
                </td>
                <td>
                <button className='employee-delete-button' onClick={() => handleDeleteEmployee(employee._id)}><FontAwesomeIcon icon={faSquareXmark} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeIndex;


