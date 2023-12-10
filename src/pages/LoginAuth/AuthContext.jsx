import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();



export const AuthProvider = ({ children}) => {
  // Define a component named AuthProvider, which will serve as the provider for the AuthContext.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Initialize a state variable isAuthenticated with a default value of false, indicating the user is not authenticated.
  const [redirect, setRedirect] = useState(null);
  // Initialize a state variable redirect with a default value of null, which will be used for redirection.
  const [username, setUsername] = useState('');


  const navigate = useNavigate();

  const login = (redirectTo) => {
    // Define a login function that takes a redirect to  parameter.
    setIsAuthenticated(true);
    // Set isAuthenticated to true when the user logs in.
    setRedirect(redirectTo);
    // Set the redirect state to the specified path after login.
  };

  const logout = () => {
    // Define a logout function.
    setIsAuthenticated(false);
    // Set isAuthenticated to false when the user logs out.
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, redirect, username }}>
      {/* Provide the AuthContext with the authentication state and functions as the value to its children. */}
      {children}
      {/* Render the child components that are wrapped by the provider. */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  // Define a custom hook named useAuth.
  const context = useContext(AuthContext);
  // Use the useContext hook to access the AuthContext.
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // If the context is not available, throw an error indicating that useAuth must be used within AuthProvider.
  return context;
  // Return the authentication context.
};

