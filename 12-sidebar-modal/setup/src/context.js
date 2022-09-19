import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
export const useGloablContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
