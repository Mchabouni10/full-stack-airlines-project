import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import './Employee.css';

function EmployeeListItem({ employee }) {
    let { setWork } = useContext(EmployeeContext);
    if (!employee) {
      return null;
    }
    // adbdul help neet to work on it
    return (
      <div
        className="EmployeeListItem"
        onClick={() => {
          setWork(employee);
        }}
      >
        {employee.image && (
          <img
            className="ProfileImage"
            src={employee.image}
            alt={employee.name}
          />
        )}
        <div className="EmployeeDetails">
          <h3>{employee.name}</h3>
          <p>{employee.position}</p>
        </div>
      </div>
    );
  }
  
  export default EmployeeListItem;