import React, { useState, createContext } from "react";

export const AgentContext = createContext();

 const AgentContextProvider = ({ children }) => {
  const [agent, setAgent] = useState({});

  const value = {
    agent,
    setAgent,
  };
  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>;
};
export default AgentContextProvider;