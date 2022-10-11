import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [navIsCollapsed, setNavIsCollaped] = useState(false);

  const value = {
    navIsCollapsed,
    setNavIsCollaped,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
