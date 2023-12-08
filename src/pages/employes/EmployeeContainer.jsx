import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import SearchBar from './Searchbar';
import EmployeePage from './EmployeePage';

function EmployeeContainer() {
  const [searchQuery, setSearchQuery] = useState('');
  const { stuff } = useContext(EmployeeContext);

  // Filter employees based on the search query
  const filteredEmployees = stuff.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* <SearchBar setSearchQuery={setSearchQuery} />
      <EmployeePage filteredEmployees={filteredEmployees} /> */}
    </div>
  );
}

export default EmployeeContainer;