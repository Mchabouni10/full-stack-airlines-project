import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './EmployeeEdit.css'

const EmployeeEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    name: '',
    position: '',
    duty: '',
    field: '',
    averageSalary: '',
    dutyDetails: '',
    email: '',
    image: '',
  });

  useEffect(() => {
    // Fetch the existing employee data based on the ID and set it in the state
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/employees/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error.message);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        console.log('Employee updated successfully!');
        // Redirect to the employee list or do other necessary actions
        navigate('/staff'); // Assuming '/staff' is the route for the employee list
      } else {
        console.error('Error updating employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
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
    <div className='employee-edit-container'>
      <Link to="/staff" className="employee-back-button">Back to Employee List</Link>
      <h1 className='employee-edit-header'>Edit Employee</h1>
      <form  onSubmit={handleSubmit}>
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
        <button className='employee-edit-button' type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
