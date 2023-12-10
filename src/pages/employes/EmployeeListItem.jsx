import React, { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import "./Employee.css";
import Infolist from "./Infolist";

function EmployeeList() {

  // Destructuring the setWork function from the EmployeeContext
  const { setWork } = useContext(EmployeeContext);

  // State to keep track of the selected position for filtering
  const [selectedPosition, setSelectedPosition] = useState("");


// Event handler for checkbox changes
  const handleCheckboxChange = (e) => {

    // Update the selectedPosition based on checkbox status
    setSelectedPosition(e.target.checked ? e.target.value : "");  //is a conditional (ternary) expression, and it's used to update the state variable selectedPosition
  };

  return (
    <div className="EmployeeList">
      <div className="PositionChecklist">
        <h3>Filter by Position:</h3>
        <label>
          <input
            type="checkbox"
            value=""
            checked={!selectedPosition}
            onChange={handleCheckboxChange}
          />
          All Positions
        </label>
        {/* Creating a Set from unique positions in Infolist using Array.from and Set.
    The Set ensures that only unique positions are included in the array.
    W3 school documentation, Youtube Help*/}
        {Array.from(new Set(Infolist.map((employee) => employee.position))).map(
          (position) => (
            <label key={position}>
              <input
                type="checkbox"
                value={position}
                checked={selectedPosition === position}
                onChange={handleCheckboxChange}
              />
              {position}
            </label>
          )
        )}
      </div>
      <div className="EmployeeItems">
        {Infolist.filter(
          (employee) =>
            !selectedPosition || employee.position === selectedPosition
        ).map((employee, index) => (
          <div
            key={index}
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
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
