import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Create a Context for the authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

const hardcodedAdmin = {
  email: "admin@example.com",
  password: "admin123",
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(!!token);
    setIsAdmin(isAdmin);
  }, []);

  const login = (token, isAdminUser = false) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdminUser);
    setIsLoggedIn(true);
    setIsAdmin(isAdminUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    
    setIsAdmin(false);
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
