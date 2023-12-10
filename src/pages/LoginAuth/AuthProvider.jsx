import React from 'react';
import { AuthProvider } from './AuthContext';
import App from '../../App';

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;