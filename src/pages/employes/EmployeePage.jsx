import React, { useContext } from "react";
import Header from "./Header";
import { EmployeeContext } from "./EmployeeContext";

function EmployeePage() {
  const { worker } = useContext(EmployeeContext);
  return (
      
      <div className="EmployeePage">
      <Header txt={"Employee Info"} />
          <h2 className="PageName">{worker.name}</h2>
          <img
            className="ProfileImageRight"
            src={worker.image}
            alt={worker.name}
          />
          <p>
            Office: <strong>{worker.office}</strong>
          </p>
          <p>
            SMS: <strong>{worker.sms}</strong>
          </p>
          <p>
            Email: <strong>{worker.email}</strong>
          </p>
        
      </div>
  );
}

export default EmployeePage;