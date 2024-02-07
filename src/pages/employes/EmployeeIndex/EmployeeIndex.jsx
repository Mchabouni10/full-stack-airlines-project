// EmployeeIndex.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './EmployeeIndex.css';

const EmployeeIndex = () => {
  const [employees, setEmployees] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  useEffect(() => {
    fetchEmployees();
  }, [sortConfig]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees');
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      const sortedData = sortData(data, sortConfig.key, sortConfig.direction);
      setEmployees(sortedData);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  const sortData = (data, key, direction) => {
    if (!key) {
      return data;
    }

    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
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
    <div className="employee-page-under-staff">
      <Link to="/staff/add" className="add-new-employee">
        Add<FontAwesomeIcon icon={faPlus} /> New Employee
      </Link>
      <h1>Employee List</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('employeeId')}>
              Employee ID {sortConfig.key === 'employeeId' && <span>{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>}
            </th>
            <th onClick={() => requestSort('name')}>
              Name {sortConfig.key === 'name' && <span>{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>}
            </th>
            <th onClick={() => requestSort('position')}>
              Position {sortConfig.key === 'position' && <span>{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>}
            </th>
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
                <Link className='view-details-index' to={`/staff/${employee._id}`}>View Details</Link>
              </td>
              <td>
                <Link className="employee-edit-link" to={`/staff/edit/${employee._id}`}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </td>
              <td>
                <button className="employee-delete-button" onClick={() => handleDeleteEmployee(employee._id)}>
                  <FontAwesomeIcon icon={faSquareXmark} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeIndex;



