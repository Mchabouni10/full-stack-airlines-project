import React, { useContext } from "react";
import Header from "./Header";
import { EmployeeContext } from "./EmployeeContext";

function EmployeePage() {
  const { worker } = useContext(EmployeeContext);

  return (
    <div className="EmployeePage">
      <Header className="headerTitle" txt={"aviation Info"} />
      <h2 className="PageName">{worker.name}</h2>
      <img className="ProfileImageRight" src={worker.image} alt={worker.name} />
      <h3 className = "text-my-h3">
        Position: <strong>{worker.position}</strong>
      </h3>
      <h3 className = "text-my-h3">
        Duty: <strong>{worker.duty}</strong>
      </h3>
      <h3 className = "text-my-h3">
        Field: <strong>{worker.field}</strong>
      </h3>
      <h3 className = "text-my-h3">
        Average Salary: <strong>{worker.averageSalary}</strong>
      </h3>
      <h3 className = "text-my-h3">
        Duty Details: <strong>{worker.dutyDetails}</strong>
      </h3>
      <h3 className = "text-my-h3">
        Email: <strong>{worker.email}</strong>
      </h3>
    </div>
  );
}

export default EmployeePage;



