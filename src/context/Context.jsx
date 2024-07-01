import { createContext, useContext, useState, useEffect } from "react";

let createCon = createContext();

export const Context = ({ children }) => {
  let [apiData, setApiData] = useState([]);
  let [backUpApiData, setBackUpApiData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [cart, setCart] = useState([]);
  let [wishList, setWishList] = useState([]);
  let [openCart, setOpenCart] = useState(false);
  let [openWishList, setOpenWishList] = useState(false);
  let [gridOption, setGridOption] = useState("single-layout-grid");
  let [sortOptionLabel, setOptionLabel] = useState("Select");
  let [currentPath, getCurrentPath] = useState();

  let fetchData = async () => {
    setLoading(true);
    try {
      let fetchApi = await fetch("/api/products");
      let response = await fetchApi.json();
      setApiData(response.products);
      setBackUpApiData(response.products);
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
  };

  let addTowishList = (data) => {
    let findData = wishList.find((item) => item.id === data.id);

    if (findData === undefined) {
      setWishList([...wishList, data]);
    } else {
      alert("Product is already in Wishlist.");
    }
  };

  const handleSort = (e) => {
    const targetClassName = e.target.className;

    const sortedData = [...apiData].sort((a, b) => {
      if (targetClassName.includes("a-z")) {
        return a.title.localeCompare(b.title);
      } else if (targetClassName.includes("z-a")) {
        return b.title.localeCompare(a.title);
      } else if (targetClassName.includes("low-to-high")) {
        return a.price - b.price;
      } else if (targetClassName.includes("high-to-low")) {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    setApiData(sortedData);
    setOptionLabel(e.target.textContent);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [currentPath]);

  const contextValue = {
    apiData,
    setApiData,
    loading,
    addToCart,
    cart,
    setCart,
    addTowishList,
    wishList,
    setWishList,
    setOpenCart,
    openCart,
    setOpenWishList,
    openWishList,
    gridOption,
    setGridOption,
    sortOptionLabel,
    handleSort,
    backUpApiData,
    setBackUpApiData,
    getCurrentPath,
  };

  return (
    <createCon.Provider value={contextValue}>{children}</createCon.Provider>
  );
};

export const useCon = () => useContext(createCon);
