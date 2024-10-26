import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  const login = (userData) => {
    setUser (userData);
};

  const logout = () => {
    setUser (null);
};

  return (
    <User Context.Provider value={{ user, login, logout }}>
      {children}
    </User Context.Provider>
    );

export const useUser  = () => {
  return useContext(UserContext);
};