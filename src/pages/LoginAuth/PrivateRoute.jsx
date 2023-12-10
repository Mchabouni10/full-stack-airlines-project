import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    // If the user is authenticated, render the provided element
    <Route {...props} element={element} />
  ) : (
    // If not authenticated, redirect to the login page
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;