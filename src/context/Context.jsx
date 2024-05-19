import { createContext, useContext, useState, useEffect } from "react";

let createCon = createContext();

export const Context = ({ children }) => {
  let [apiData, setApiData] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetchData = async () => {
    try {
      let fetchApi = await fetch("/api/products");
      let response = await fetchApi.json();
      setApiData(response.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = { apiData, loading };

  return (
    <createCon.Provider value={contextValue}>{children}</createCon.Provider>
  );
};

export const useCon = () => useContext(createCon);
