import React from "react";
import RecommendedList from "./RecommendedList";
import { useCon } from "../../context/Context";
import ProductsLoader from "../loader/productsLoader/ProductsLoader";
import "./recommended.css";

const Recommended = () => {
  let { loading } = useCon();

  return (
    <section className="recommended-section">
      <div className="recommended-header">
        <h2 className="recommended-title"> Recommended Products </h2>
      </div>

      {loading ? <ProductsLoader /> : <RecommendedList />}
    </section>
  );
};

export default Recommended;
