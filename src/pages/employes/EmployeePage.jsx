import React, { useContext } from "react";
import Header from "./Header";
import { EmployeeContext } from "./EmployeeContext";

function EmployeePage() {
  const { worker } = useContext(EmployeeContext);

  return (
    <div className="EmployeePage">
      <Header txt={"Employee Info"} />
      <h2 className="PageName">{worker.name}</h2>
      <img className="ProfileImageRight" src={worker.image} alt={worker.name} />
      <p>
        Position: <strong>{worker.position}</strong>
      </p>
      <p>
        Duty: <strong>{worker.duty}</strong>
      </p>
      <p>
        Field: <strong>{worker.field}</strong>
      </p>
      <p>
        Average Salary: <strong>{worker.averageSalary}</strong>
      </p>
      <p>
        Duty Details: <strong>{worker.dutyDetails}</strong>
      </p>
      <p>
        Email: <strong>{worker.email}</strong>
      </p>
    </div>
  );
}

export default EmployeePage;
