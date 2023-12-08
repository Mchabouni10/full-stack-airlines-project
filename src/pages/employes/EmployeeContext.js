import { createContext, useState } from 'react';
import Infolist from './Infolist';

const EmployeeContext = createContext();

const EmployeeProvider = (props) => {
  const [worker, setWork] = useState(Infolist[0])
  const [stuff, setStuff] = useState(Infolist)

  

  return (
    <EmployeeContext.Provider value={{ worker, stuff, setWork, setStuff}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeProvider, EmployeeContext };