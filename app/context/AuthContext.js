"use client";
import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app, { db } from "../firebase";


const AuthContext = createContext({
  user: null,
  loading: true,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setUserData = (userData) => {
    setUser(userData);
    setLoading(false); // Assuming data is ready after setting
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };