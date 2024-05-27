import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleProduct from "./page/SingleProduct";
import Cart from "./page/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productid" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
