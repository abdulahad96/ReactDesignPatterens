import React, { createContext, useContext, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import { AuthContext, AuthProvider } from '../Context/auth.context';
import AuthRouter from './auth';
import { useAuth } from '../hooks/auth.hook';

// Fake authentication provider

function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <AuthRouter /> 
        <Routes>

          <Route
            path='/Dashboard'
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}







function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
}





function ProtectedPage() {
  return <h3>Protected</h3>;
}

export default AppRouter;
