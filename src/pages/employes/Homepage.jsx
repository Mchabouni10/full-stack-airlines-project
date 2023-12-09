import React from 'react'
import Header from './Header';


import EmployeeListItem from './EmployeeListItem'
function Homepage(props) {
  return (
    <div className='Homepage'>
      <Header txt={'Aviation Crew'}/>
      <EmployeeListItem />
    </div>
  )
}

export default Homepage