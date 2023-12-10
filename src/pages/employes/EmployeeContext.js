import { createContext, useState } from 'react';
import Infolist from './Infolist';

const EmployeeContext = createContext(); // Creating a new context named EmployeeContext using the createContext function.

const EmployeeProvider = (props) => {  // Defining a functional component named EmployeeProvider to serve as the provider for the EmployeeContext.



  // Initializing a state variable worker using the useState Hook.
  // worker is set to the first element of the Infolist array, and setWork is the function to update the worker state.
  const [worker, setWork] = useState(Infolist[0])



   // Initializing a state variable stuff using the useState Hook.
  // stuff is set to the entire Infolist array, and setStuff is the function to update the stuff state.
  const [stuff, setStuff] = useState(Infolist)

  
// Wrapping child components with the EmployeeContext.Provider.
  return (
    <EmployeeContext.Provider value={{ worker, stuff, setWork, setStuff}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeProvider, EmployeeContext };