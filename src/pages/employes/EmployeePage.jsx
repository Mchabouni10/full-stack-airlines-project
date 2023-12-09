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
      <h3 className="text-my-h3">
  <span className="text-my-h3-span">Position:</span> <strong>{worker.position}</strong>
</h3>
<h3 className="text-my-h3">
  <span className="text-my-h3-span">Duty:</span> <strong>{worker.duty}</strong>
</h3>
<h3 className="text-my-h3">
  <span className="text-my-h3-span">Field:</span> <strong>{worker.field}</strong>
</h3>
<h3 className="text-my-h3">
  <span className="text-my-h3-span">Average Salary:</span> <strong>{worker.averageSalary}</strong>
</h3>
<h3 className="text-my-h3">
  <span className="text-my-h3-span">Duty Details:</span> <strong>{worker.dutyDetails}</strong>
</h3>
<h3 className="text-my-h3">
  <span className="text-my-h3-span">Email:</span> <strong>{worker.email}</strong>
</h3>
    </div>
  );
}

export default EmployeePage;



