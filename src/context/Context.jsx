import { createContext, useContext } from "react";

let createCon = createContext();

export const Context = ({ children }) => {
  return <createCon.Provider value={{}}>{children}</createCon.Provider>;
};

export const useCon = () => useContext(createCon);
