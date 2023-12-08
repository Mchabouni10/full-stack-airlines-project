import React, { useContext } from 'react';
import EmployeeListItem from './EmployeeListItem';
import { EmployeeContext } from './EmployeeContext';


function EmployeeList() {
    let {stuff} = useContext(EmployeeContext)
    return (
      <div>
        {stuff.map((employee, index) => (
          <EmployeeListItem key={index} employee={employee} />
        ))}
      </div>
    );
  }
  
  export default EmployeeList;