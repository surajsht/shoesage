import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
