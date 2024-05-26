import { createContext, useContext, useState, useEffect } from "react";

let createCon = createContext();

export const Context = ({ children }) => {
  let [apiData, setApiData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [cart, setCart] = useState([]);
  let [wishList, setWishList] = useState([]);
  let [openCart, setOpenCart] = useState(false);

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

  let addToCart = (data) => {
    let findData = cart.find((item) => item.id === data.id);

    if (findData === undefined) {
      setCart([...cart, data]);
    } else {
      alert("Product is already in cart.");
    }

    console.log(cart);
  };

  let addTowishList = (data) => {
    let findData = wishList.find((item) => item.id === data.id);

    if (findData === undefined) {
      setWishList([...wishList, data]);
    } else {
      alert("Product is already in Wishlist.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    apiData,
    loading,
    addToCart,
    cart,
    addTowishList,
    wishList,
    setOpenCart,
    openCart,
  };

  return (
    <createCon.Provider value={contextValue}>{children}</createCon.Provider>
  );
};

export const useCon = () => useContext(createCon);
