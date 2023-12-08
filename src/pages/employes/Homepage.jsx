import React from 'react'
import Header from './Header';

import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'

function Homepage(props) {
  return (
    <div className='Homepage'>
      <Header txt={'Aviation Crew'}/>
      <EmployeeList employees={props.employees} />
      <EmployeeListItem />
    </div>
  )
}

export default Homepage