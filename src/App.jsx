import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleProduct from "./page/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productid" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
