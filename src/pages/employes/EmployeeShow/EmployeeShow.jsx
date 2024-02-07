// EmployeeShow.jsx
import React, { useEffect, useState} from 'react';
import { useParams,Link  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './EmployeeShow.css';

const EmployeeShow = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/employees/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch employee');
        }
        const data = await response.json();
        
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee:', error.message);
      }
    };

    fetchEmployee();
  }, [id]);

  useEffect(() => {
  }, [employee]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className='employee-details-container'>
    <div>
      <Link to="/staff" className="employee-back-button"><FontAwesomeIcon icon={faCircleLeft} />Back to Employee List</Link>
    </div>
      <h1>Employee Details</h1>
      <div className='employee-details-card'>
        {employee && Object.keys(employee).length > 0 ? (
          <div className='employee-details-content'>
            {employee.image ? <img src={employee.image} alt={employee.name} /> : <p>No image available</p>}
            <h2>{employee.name}</h2>
            <p>Position: <span>{employee.position}</span></p>
            <p>Duty:<span>{employee.duty}</span></p>
            <p>Field: <span>{employee.field}</span></p>
            <p>Average Salary: <span>{employee.averageSalary}</span></p>
            <p>Duty Details: <span>{employee.dutyDetails}</span></p>
            <p>Email:<span>{employee.email}</span></p>
          </div>
        ) : (
          <p>No employee data available</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeShow;

